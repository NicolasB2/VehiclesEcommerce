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
        <div class="my-cars">
          <v-layout wrap>
            <v-flex xs20 sm12 md6 lg4 xl3 v-for="vehicle in vehicles" :key="vehicle._id">
              <section>
                <div>
                  <app-car :car="vehicle"></app-car>
                </div>
              </section>
            </v-flex>
          </v-layout>
          <div class ="center">
            <v-btn class="add" @click="addCar">Add Vehicle to sell</v-btn>
          </div>
        </div>
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
    methods: {
    addCar() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.add {
    background: #fff;
    border-radius: 10px;
    font-weight: bolder;
}
.center {
    text-align:center;
    margin: 25px;
}
.user-txt {
    margin-left: 30px;
    color: white;
}
.detail-user {
    padding: 50px;
}
.my-cars {
    background: #0f2032;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
}
</style>