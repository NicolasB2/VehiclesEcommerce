<template>
  <section class="font">
    <div id="Login">
      <v-flex class="vux-center">
        <div class="login-form">
          <v-card elevation="10" class="form-wrapper">
            <v-card-title>
              <div class="display-1 mb-2">Login</div>
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

export default {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
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
    
    async verifyUser() {
      
      this.users = await api.getUsers();
      this.users.forEach(element => {
        if(element.email==this.email){
          if(element.password==this.password){
             this.$router.push("/catalog");
          }
        }
      });
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
  background: #0f2032;
}
</style>