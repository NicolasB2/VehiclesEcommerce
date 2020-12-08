<template>
  <section class="font">
    <AppBar/>
    <div id="Login">
      <v-flex class="vux-center">
        <div class="login-form">
          <v-card elevation="10" class="form-wrapper">
            <v-card-title>
              <div class="display-1 mb-2">Login</div>
            </v-card-title>
            <facebook-login
              class="button"
              appId="386318569371318"
              @login="onLogin"
              @logout="onLogout"
              @get-initial-status="getUserData"
              @sdk-loaded="sdkLoaded"
            >
            </facebook-login>
            <v-form v-model="valid">
              <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                required
                :rules="emailRules"
                v-model.lazy="email"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                autocomplete="current-password"
                :value="password"
                label="Enter password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                :rules="passwordRule"
                v-model="password"
              ></v-text-field>
              <v-btn :disabled="!valid" @click="verifyUser" router>Login</v-btn>
            </v-form>
          </v-card>
          <v-dialog v-model="error" max-width="400px">
            <v-alert type="error"
              >The user email or password is incorrect</v-alert
            >
          </v-dialog>
        </div>
      </v-flex>
    </div>
  </section>
</template>


<script>
import { api } from "../helpers/helpers";
import facebookLogin from 'facebook-login-vuejs'
import AppBar from './AppBar';
export default {
  components:{
  AppBar,
  facebookLogin
  },
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      isConnected: false,
      name: "",
      personalID: "",
      picture: "",
      FB: undefined,
      users: [],
      error: false,
      email: "",
      password: "",
      value: true,
      submitted: false,
      valid: false,
      emailRules: [
        (email) => !!email || "Email is required",
        (email) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
          "Email is invalid",
      ],
      passwordRule: [
        (Password) => !!Password || "password is required",
        (Password) => Password.length >= 7 || "Password is too short",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        password: (value) => {
          const pattern = /^(?=.*[a-z])/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        },
      },
    };
  },
  methods: {
    async getUserData() {
      await this.FB.api("/me", "GET", { fields: "id,name,email,picture" }, (user) => {
        this.personalID = user.id;
        this.email = user.email;
        this.name = user.name;
        this.picture = user.picture.data.url;
        this.password = user.id;
      });
      //this.verifyUser();
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    },
    async addUser(){
      if(this.isConnected){
        console.log("crear face")
          api.creatUser(
          {
            userName:this.name,
            fullName:this.name,
            password:this.password,
            email:this.email,
            rol: "seller",
          });
      }
    },
    async verifyUser() {
      try {
        this.users = await api.getUsers();
        this.users.forEach((element) => {
          if (element.email == this.email) {
            if (element.password == this.password) {
              api.login(this.email, this.password);
              const user = {
                _id: element._id,
              };
              api.setUserLogged(user);
              this.$router.push("/catalog");
            }
          }
        });

        if(this.isConnected){
          var userAnswer = await api.creatUser(
          {
            userName:this.name,
            fullName:this.name,
            password:this.password,
            email:this.email,
            rol: "seller",
          });
      api.setUserLogged(userAnswer);
      this.$router.push("/catalog");
      }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 40px;
  border-top: 200px;
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.font {
  /* The image used */
  background: url(https://images.unsplash.com/photo-1501428291079-b42d45fc7455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
    no-repeat;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>