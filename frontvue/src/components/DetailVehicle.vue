<template>
  <section id="new-cars" class="new-cars">
    <div class="container">
      <div class="section-header">
        <h2>Chevrolet Camaro SS</h2>
      </div>

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
                    
                    <p>Name: {{seller.name}}</p>
                    <p>Phone: {{seller.phone}}</p>
                    <p>Email: {{seller.email}} </p>
                    <p>Location: {{seller.location}}</p>
                    
                  </div>
                </div>


                <div class="col-md-12 col-sm-12">
                    
                    <div class="new-cars-txt">
                    <h2>Vehicle Information</h2>

                    <p>Brand: {{vehicle.car}}</p>
                    <p>Model: {{vehicle.model}}</p>
                    <p>Price: $ {{vehicle.price }} </p>
                    <p>Miles: {{vehicle.miliage}}</p>
                    <p>Discrption: {{vehicle.description}}</p>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    components:{

    },
    data: ()=> ({
        vehicle: {

            car: 'Chevrolet',
            price: '130.000.000',
            year: '2020',
            brand: 'Chevrolet',
            miliage: 300000,
            model: 'Camaro',
            img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/05/20190504-CHEVROLET-CAMARO-2020-01.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores adipisci nam exercitationem tempore voluptate quod eligendi! Odit veniam omnis tenetur velit veritatis esse dolorum assumenda incidunt, cumque, consequatur perspiciatis.',
            color: 'Blue'
        },

        seller: {

            name: 'David Erazo',
            phone: '31211332211',
            email: 'evo@hotmail.com',
            location: 'Cali, Colombia'


        }
    })

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
  background: #f8f9fb;
  padding: 112px 0 120px;
}

p {
    font-size: 30px;
}

.label {
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.new-cars-content {
  padding-top: 96px;
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

.new-cars-txt {margin-left: 80px;margin-bottom: 30px;}
.new-cars-txt h2 a {
    font-size:  30px;
    font-weight:  500;
    margin-bottom: 26px;
}
</style>