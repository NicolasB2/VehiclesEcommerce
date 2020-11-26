  
<template>
  <v-card color=" ligthten-2">
    <v-img :src="car.img" height="170px"> </v-img>
    <v-card-title>
      <div>
        <h3>{{ car.name }}</h3>
        <p>{{ car.price }}</p>
      </div>
    </v-card-title>
    <v-btn @click='addFavorites'>Add to favorites</v-btn>
  </v-card>
</template>

<script>
export default {
    props: {
        car: {
            type: Object
        }
    },
    created (){
        
    },
    methods:{
      addFavorites(){
        this.$store.dispatch("addToFavorites",this.dog)
      }
    }
};
</script>

<style>

</style>