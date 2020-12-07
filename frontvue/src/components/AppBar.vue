<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'black' : 'black'"
    fixed
    dense
    
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
    />

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

         <v-btn
           v-for="item in nav"
           :key="item.icon"
           :to="item.to"
           :title="item.title"
           text
         >
          <h6 style="color: white;    margin-top: 6px;">{{ item.text }}</h6>
        </v-btn>

        <v-spacer />

        <v-btn
           v-for="item in nav2"
           :key="item.icon"
           :to="item.to"
           :title="item.title"
           text
         >
          <h6 style="color: white;    margin-top: 6px;">{{ item.text }}</h6>
        </v-btn>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities


  export default {
    name: 'CoreAppBar',
    data: () => ({
      showLogo: false,
      isScrolling: false,
        nav: [
        {
    
          text: 'Home',
          to: "/",
          title: 'Home',
          active: true
        },
          {
          text: 'Catalog',
          to: "/catalog",
          title: 'Catalog',
          active: false
        }
      ],
      nav2: [
        {
          text: 'Login',
          to: "/login",
          title: 'Login',
          active: true
        },
        {
          text: 'Register',
          to: "/register",
          title: 'Register',
          active: false
        },
        {
          text: 'user Detail',
          to: "/userdetail",
          title: 'user',
          active: true
        },
      ]
    }),


    methods: {

      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
    },
  }
</script>