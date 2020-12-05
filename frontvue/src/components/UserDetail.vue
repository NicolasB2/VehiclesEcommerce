<template>
    <section class="detail-user">
    <div class="container">
        <div class="my-cars">
            <div class="user-txt">
                <h2>My Information</h2>
                <p>Name: {{ user.fullName }}</p>
                <p>Phone: {{ user.phoneNumber }}</p>
                <p>Email: {{ user.email }}</p>
            </div>
        </div>
        <div grid-list-md fluid>
        <div></div>
        <v-layout wrap class="my-cars">
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
.user-txt{
    margin-left: 80px;
    color: white;
}
.detail-user{
    padding: 112px 50px 40%;
}
.my-cars {
  background: #0F2032;
  padding: 15px 15px 15px;
  border-radius: 15px;
  margin: 10px;
}
</style>