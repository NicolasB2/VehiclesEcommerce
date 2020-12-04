<template>
<<<<<<< HEAD
    <div grid-list-md fluid>
    <div></div>
    <div class="container"> 
      <v-layout wrap>
=======
  <section class="catalog-cars">
    <div class="container">
      <div grid-list-md fluid>
        <div></div>
        <v-layout wrap>
>>>>>>> 2326cc83d4c0f7e6594dc285df840aa4a9af8d0a
          <v-flex xs12 sm4 md3 v-for="vehicle in vehicles" :key="vehicle._id">
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
  background: #0F2032;
  padding: 112px 0 40%;
}
</style>