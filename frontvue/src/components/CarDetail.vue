<template>
  <div class="container">
    <div class="single-featured-cars">
      <div class="featured-img-box single-catalog-item">
        <div @click="viewDetails">
          <div class="featured-cars-img">
            <v-img :src="car.img" class="featured-cars-img"> </v-img>
          </div>
          <div class="featured-model-info">
            <div class="featured-cars-txt">
              <h2>{{ car.car }}</h2>
              <h2>{{ (car.price ).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                })}}</h2>
              <h3>year : {{ car.year }}</h3>
              <h3>model : {{ car.model }}</h3>
            </div>
          </div>
        </div>
        <v-btn v-if="this.userId !== ''" color="error"  class="deleted_btn" @click="deletedCar"> deleted </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  data: () => ({
    userId : {},
  }),
  props: {
    car: {
      type: Object,
    },
  },
  mounted(){
     this.userId = api.getUserLogged();
  },
  methods: {
    viewDetails() {
      this.$store.dispatch("viewDetails", this.car);
      this.$router.push("/cardetail");
    },
    deletedCar() {
      api.deletvehicle(this.car._id);
      location.reload();
    },
  },
};
</script>

<style>
.deleted_btn{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
}
.featured-cars {
  border-radius: 10px;
  padding: 112px 0 120px;
}
.featured-cars-content {
  padding-top: 90px;
}

/*.single-featured-cars*/
.featured-img-box {
  border-radius: 10px;
  background: white;
}

.featured-cars-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  border-bottom: 1px solid #dadfe9;
  border-radius: 8px;
}
.featured-model-info {
  padding: 12px 7px;
}
.featured-model-info p {
  font-size: 12px;
  color: #8c92a0;
  text-transform: capitalize;
}
.featured-mi-span {
  display: inline-block;
  margin: 0 10px;
}
.featured-hp-span {
  display: inline-block;
  margin-right: 10px;
}
.featured-cars-txt {
  margin: 21px 0 30px;
}
.featured-cars-txt h2 a {
  font-size: 20px;
  margin-bottom: 15px;
}
.featured-cars-txt h1 a span {
  text-transform: uppercase;
}
.featured-cars-txt h3 {
  margin-bottom: 10px;
}
.featured-cars-txt h3,
.featured-cars-txt p {
  font-size: 18px;
}
.single-catalog-item p:before {
  background: #89f0d9;
}

.single-catalog-item h2 a,
.single-catalog-item {
  color: black;
}
.single-catalog-item p:before {
  background: #4b4949;
}
.single-catalog-item {
  background: #fff;
  border: 8px solid #fff;
}

.single-catalog-item:hover h2 a,
.single-catalog-item:hover {
  color: #fff;
}
.single-catalog-item:hover p:before {
  background: #fff;
}
.single-catalog-item:hover {
  background: #4b4949;
  border: 8px solid #4b4949;
}
</style>