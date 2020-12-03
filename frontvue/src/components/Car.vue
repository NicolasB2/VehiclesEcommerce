  
<template>
  <div class="single-featured-cars">
    <div class="featured-img-box">
      <div class="featured-cars-img">
        <v-img :src="car.img" > </v-img>
      </div>
      <div class="featured-model-info">
        <p> year  :  {{ car.year }}</p>
        <p> model : {{ car.model }}</p>
        <!--<p> type  : {{ car.engType }}</p>-->
      </div>
    </div>
    <div class="featured-cars-txt">
      <h2>{{ car.car }}</h2>
      <h3>$ {{ car.price }}</h3>
      <p>
      </p>
      <button @click="viewDetails"> View details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
    },
  },
  methods: {
    viewDetails() {
      this.$store.dispatch("viewDetails", this.car);
      this.$router.push('/cardetail')
    },
  },
};
</script>

<style>
.featured-cars {
  padding: 112px 0 120px;
}
.featured-cars-content {
  padding-top: 96px;
}

/*.single-featured-cars*/
.featured-img-box {
  border: 1px solid #dadfe9;
}

.featured-cars-img {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 220px;
  border-bottom: 1px solid #dadfe9;
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
  margin: 21px 0 47px;
}
.featured-cars-txt h2 a {
  font-size: 16px;
  margin-bottom: 15px;
}
.featured-cars-txt h2 a span {
  text-transform: uppercase;
}
.featured-cars-txt h3 {
  margin-bottom: 10px;
}
.featured-cars-txt h3,
.featured-cars-txt p {
  font-size: 13px;
}
</style>