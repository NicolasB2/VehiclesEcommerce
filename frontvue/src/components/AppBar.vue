<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'black' : 'black'"
    fixed
    dense
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" />

    <v-container class="mx-auto py-0">
      <v-row align="center">
    

        <v-btn router :to="{ path: '/' }" text>
          <h6 style="color: white; margin-top: 6px">Home</h6>
        </v-btn>

        <v-btn router :to="{ path: '/catalog' }" text>
          <h6 style="color: white; margin-top: 6px">Catalog</h6>
        </v-btn>

        <v-spacer />

        <v-btn v-if="this.userId === ''" router :to="{ path: '/login' }" text>
          <h6 style="color: white; margin-top: 6px">Login</h6>
        </v-btn>

        <v-btn v-if="this.userId === ''" router :to="{ path: '/register' }" text>
          <h6 style="color: white; margin-top: 6px">Registro</h6>
        </v-btn>

        <v-btn v-if="this.userId !== ''  && this.user.rol == 'seller' " router :to="{ path: '/userdetail' }" text>
          <h6 style="color: white; margin-top: 6px">User Detail</h6>
        </v-btn>

        <v-btn v-if="this.userId !== '' && this.user.rol == 'admin' " router :to="{ path: '/reports' }" text>
          <h6 style="color: white; margin-top: 6px">Reports</h6>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import { api } from "../helpers/helpers";

export default {
  name: "CoreAppBar",
  data: () => ({
    user: {},
    userId : {},
    micookie: {},
    isScrolling: false,
  }),
  created: function () {
    this.leerCookie();
  },
  methods: {

    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },

    async leerCookie() {
      this.userId = api.getUserLogged();
      this.user = await api.getUser(this.userId);
      console.log(this.user.rol)
    },
  },
};
</script>