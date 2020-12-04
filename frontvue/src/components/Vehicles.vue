<template>
  <section class="catalog-cars">
    <div class="container">
      <div grid-list-md fluid>
        <div></div>
        <v-layout wrap>
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