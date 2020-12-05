<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'black' : 'black'"
    fixed
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="40"
          width="40"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

         <v-btn
           v-for="item in nav"
           :key="item.icon"
           :to="item.to"
           :title="item.title"
           text
         >
          <h4 style="color: white">{{ item.text }}</h4>
        </v-btn>

        <v-spacer />

        <v-btn
           v-for="item in nav2"
           :key="item.icon"
           :to="item.to"
           :title="item.title"
           text
         >
          <h4 style="color: white">{{ item.text }}</h4>
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
          text: 'Service',
          to: "/service",
          title: 'Service',
          active: false
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