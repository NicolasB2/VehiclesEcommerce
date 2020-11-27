<template>
    <div grid-list-md fluid>
    <section id="home" class="welcome-hero">
        <div class="container">
			<div class="welcome-hero-txt">
				<h1>get your desired car in resonable price</h1>
			</div>
		</div>
    </section>
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
        console.log(this.vehicles.length)
  }
}

</script>

<style>

</style>