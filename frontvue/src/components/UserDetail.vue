<template>
  <section class="detail-user">
    <div class="catalog">
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
import Car from "./CarDetail";
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
    var userId = api.getUserLogged();
    this.user = await api.getUser(userId);
    this.vehicles = await api.getvehiclesbyuser(userId);
  },
    methods: {
    addCar() {
      this.$router.push("/sell");
    },
  },
};
</script>

<style>
.add {
    background: #fff;
    border-radius: 8px;
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
     /* The image used */
  background: url(https://images.unsplash.com/photo-1582733460601-0ae67a942777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
    no-repeat;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    padding: 50px;
}
.my-cars {
    background: #0f2032;
    border-radius: 9px 9px 9px 9px;
    box-shadow: 0px 10px 14px -7px rgba(0,0,0,0.81);
    margin: 10px;
    padding: 10px;
}
</style>