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
          <section id="featured-cars" class="featured-cars">
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

export default {
    components:{
        appCar: Car,
    },
    data: ()=> ({
        vehicles: [
            
                {
                    name: 'BMW',
                    img: 'https://bmwco.vtexassets.com/arquivos/model-serie1.png',
                    price:610000,
                    _id:1,

                } 
            ,
            
                {
                    name: 'Camaro ss',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox6Sv1UfAXsII8soVHtfo0SS7y4aCQnYZxw&usqp=CAU',
                    price:6565000,
                    _id:2,
                } 
            ,
            
                {
                    name: 'Ferray',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDheic4SpasJE98GyPtTYIizityuEjEVJLw&usqp=CAU',
                    price:588400000,
                    _id:3,
                } 
            ,
            
                {
                    name: 'Audi',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv07mk-TlIrQLnyefMLE5iw4PyCBOtwdvYw&usqp=CAU',
                    price:10000,
                    _id:4,
                } 
            
        ]
    }),
}

</script>

<style>

</style>