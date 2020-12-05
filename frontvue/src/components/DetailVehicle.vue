<template>
  <section id="new-cars" class="new-cars">
    <v-container class="grey lighten-5">
      <div class="section-header">
        <h2>{{ vehicle.car + " " + vehicle.model }}</h2>
      </div>
      <v-row no-gutters>
          <div class="new-cars-content">
        <div class="owl-carousel owl-theme" id="new-cars-carousel">
          <div class="new-cars-item">
            <div class="single-new-cars-item">
              <div class="row">
                <div class="col-md-7 col-sm-12">
                  <div class="new-cars-img">
                    <v-img :src="vehicle.img"></v-img>
                  </div>
                </div>

                <div class="col-md-5 col-sm-12">
                  <div class="new-cars-txt">
                    <h2>Seller Information</h2>

                    <p>Name: {{ seller.fullName }}</p>
                    <p>Phone: {{ seller.phoneNumber }}</p>
                    <p>Email: {{ seller.email }}</p>
                    <v-btn class="prymary"> Contact</v-btn>
                  </div>
                </div>

                <div class="col-md-12 col-sm-12">
                  <div class="new-cars-txt">
                    <h2>Vehicle Information</h2>

                    <p>Brand: {{ vehicle.car }}</p>
                    <p>Model: {{ vehicle.model }}</p>
                    <p>Price: $ {{ vehicle.price }}</p>
                    <p>Miles: {{ vehicle.mileage }}</p>
                    <p>Discrption: {{ vehicle.engType }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      </v-row>
    </v-container>
  </section>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  data() {
    return {
      vehicle: {},
      seller: {},
    };
  },
  async mounted() {
    this.vehicle = this.$store.state.vehicle;
    this.seller = await api.getUser(this.vehicle.idSeller);
  },
};
</script>

<style>
.section-header {
  position: relative;
  text-align: center;
}
.section-header h2 {
  position: relative;
  font-size: 60px;
  font-weight: 500;
  padding-bottom: 35px;
}

h2 {
  font-size: 40px;
  font-weight: 500;
}
.new-cars {
  background: #0f2032;
  padding: 112px 0 0%;
}

p {
  margin-top: 10px;
  font-size: 30px;
}

.label {
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.new-cars-content {
  padding-top: 50px;
  margin-left: 15%;
}
.clients-say .owl-carousel .owl-stage {
  position: relative;
  padding: 100px 0 40px;
}
.clients-say .owl-carousel .owl-item img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
}

.new-cars-txt {
  margin-left: 80px;
  margin-bottom: 30px;
}
.new-cars-txt h2 a {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 26px;
}
</style>