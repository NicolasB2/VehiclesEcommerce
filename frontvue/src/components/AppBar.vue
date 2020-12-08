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
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="30"
          width="30"
          max-width="38"
          @click="$vuetify.goTo(0)"
        />

        <v-btn  router :to="{ path: '/' }" text>
          <h6 style="color: white; margin-top: 6px">Home</h6>
        </v-btn>

        <v-btn router :to="{ path: '/catalog' }" text>
          <h6 style="color: white; margin-top: 6px">Catalog</h6>
        </v-btn>

        <v-spacer />

        <v-btn router :to="{ path: '/login' }" text>
          <h6 style="color: white; margin-top: 6px">Login</h6>
        </v-btn>

        <v-btn router :to="{ path: '/register' }" text>
          <h6 style="color: white; margin-top: 6px">Registro</h6>
        </v-btn>

        <v-btn router :to="{ path: '/userdetail' }" text>
          <h6 style="color: white; margin-top: 6px">User Detail</h6>
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
    listac : {},
    micookie: {},
    showLogo: false,
    isScrolling: false,
  }),
  created: function () {
    this.leerCookie("nico@hotmail.com");
  },

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },

    leerCookie() {
      this.listac = api.getUserLogged();
      console.log(this.listac)
    },
  },
};
</script>