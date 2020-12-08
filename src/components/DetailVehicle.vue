<template>
  <section id="new-cars" class="new-cars">
    <AppBar/>
    <v-container class="grey lighten-5">
      <v-btn color="primary" text @click="back"> Back </v-btn>
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

                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Contact
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Send a message to the seller</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Name"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-text-field
                                    label="Email"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-text-field
                                    label="Message"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                            
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Send
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
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
                  <v-row justify="center"> </v-row>
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
import AppBar from './AppBar';
export default {
  components:{
  AppBar,},
  data() {
    return {
      dialog: false,
      vehicle: {},
      seller: {},
    };
  },
  async mounted() {
    this.vehicle = this.$store.state.vehicle;
    this.seller = await api.getUser(this.vehicle.idSeller);
  },
  methods: {
    back (){ 
      this.$router.push("/catalog");
    }
  }
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
       /* The image used */
  background: url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80) no-repeat;

   /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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