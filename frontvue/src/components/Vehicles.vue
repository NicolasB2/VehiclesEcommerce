<template>
    <div grid-list-md fluid>
    <section id="home" class="welcome-hero">
        <div class="container">
			<div class="welcome-hero-txt">
				<h1>get your desired car in resonable price</h1>
			</div>
		</div>
    </section>
      <v-layout wrap>
          <v-flex xs12 sm4 md3 v-for="vehicle in vehicles" :key="vehicle._id">
             <app-car :car="vehicle"></app-car>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
import Car from "./Car";

export default {
    components:{
        appCar: Car,
    },
    data: ()=> ({
        vehicles: [
            
                {
                    name: 'BMW',
                    img: 'https://bmwco.vtexassets.com/arquivos/model-serie1.png',
                    price:10000,
                    _id:1,

                } 
            ,
            
                {
                    name: 'test',
                    img: 'https://bmwco.vtexassets.com/arquivos/model-serie1.png',
                    price:10000,
                    _id:2,
                } 
            ,
            
                {
                    name: 'test',
                    img: 'https://bmwco.vtexassets.com/arquivos/model-serie1.png',
                    price:10000,
                    _id:3,
                } 
            ,
            
                {
                    name: 'test',
                    img: 'https://bmwco.vtexassets.com/arquivos/model-serie1.png',
                    price:10000,
                    _id:4,
                } 
            
        ]
    }),
}

</script>

<style>

</style>