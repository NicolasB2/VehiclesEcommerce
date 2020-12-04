<template>
    <div grid-list-md fluid>
    <div></div>
    <div class="container"> 
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
</template>

<script>
import Car from "./Car";
import { api } from '../helpers/helpers';

export default {
    components:{
        appCar: Car,
    },
    data() {
        return {
            vehicles: []
        };
    },
    async mounted() {
        this.vehicles = await api.getvehicles();
  }
}

</script>

<style>

</style>