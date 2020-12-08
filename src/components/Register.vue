<template>
  <section class="font">
    <AppBar/>
    <div id="Login">
      <v-flex class="vux-center">
        <div class="login-form">
          <v-card elevation="10" class="form-wrapper">
            <v-card-title>
              <div class="display-1 mb-2">Register</div>
            </v-card-title>
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
              <v-text-field
                prepend-icon="mdi-account"
                label="Username"
                required
                v-model="userName"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-account"
                label="Full Name"
                required
                v-model="fullName"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-phone"
                label="CellphoneNumber"
                required
                v-mask= "'(###) ### - ### - ####'"
                v-model="phoneNumber"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-account-box-multiple"
                label="IdNumber"
                required
                v-model="idNumber"
              ></v-text-field>
              <v-btn :disabled="!valid" @click="verifyUser" router
                >Register</v-btn
              >
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
import { mask } from "vue-the-mask";
import { api } from "../helpers/helpers";

import AppBar from './AppBar';
export default {
  components:{
  AppBar
  },
  directives: {
    mask,
  },

  data() {
    return {
      user:{},
      email : "",
      password: "",
      userName: "",
      fullName: "",
      idNumber: "",
      phoneNumber: "",
      error: false,
      value: true,
      submitted: false,
      valid: false,
      emailRules: [
        (email) => !! email || "Email is required",
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
    // Added the new user to mongo db
    async verifyUser() {
    this.user = {
        email : this.email,
        password: this.password,
        userName: this.userName,
        fullName: this.fullName,
        idNumber: this.idNumber,
        phoneNumber: this.phoneNumber,
        rol: "seller",
      };
      
      var userAnswer = await api.creatUser(this.user);
      api.setUserLogged(userAnswer);
      this.$router.push("/catalog");
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 200px;
  padding-right: 200px;
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