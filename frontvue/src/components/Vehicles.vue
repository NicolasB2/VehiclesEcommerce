<template>
  <section class="catalog-cars">
    <div class="container">
      <div grid-list-md fluid>
        <div></div>
        <v-layout wrap>
          <v-flex xs20 sm12 md6 lg4 xl3 v-for="vehicle in vehicles" :key="vehicle._id">
            <section>
              <div class="container">
                <app-car :car="vehicle"></app-car>
              </div>
            </section>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </section>
</template>

<script>
import Car from "./Car";
import { api } from "../helpers/helpers";

export default {
  components: {
    appCar: Car,
  },
  data() {
    return {
      vehicles: [],
    };
  },
  async mounted() {
    this.vehicles = await api.getvehicles();
  },
};
</script>

<style>
.catalog-cars {
     /* The image used */
  background: url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80) no-repeat;

   /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 112px 0 40%;
}
</style>