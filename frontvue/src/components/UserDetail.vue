<template>
    <section class="detail-user">
    <div class="container">
        <div class="col-md-4 col-sm-4">
        <div class="new-cars-txt">
            <h2>Seller Information</h2>

            <p>Name: {{ user.fullName }}</p>
            <p>Phone: {{ user.phoneNumber }}</p>
            <p>Email: {{ user.email }}</p>
            <v-btn class="prymary"> Contact</v-btn>
        </div>
        </div>
        <div grid-list-md fluid>
        <div></div>
        <v-layout wrap>
            <v-flex xs20 sm12 md6 lg4 xl3  v-for="vehicle in vehicles" :key="vehicle._id">
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
      user: {},
      vehicles: {},
    };
  },
  async mounted() {
    this.user = await api.getUser("5fc6a8da02fe4574386a9b0f");
    this.vehicles = await this.user.listOfVehicles;
  },
};
</script>

<style>
.detail-user{
    padding: 112px 0 40%;
}
</style>