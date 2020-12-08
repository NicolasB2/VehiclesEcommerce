<template>
  <section class="font">
    <AppBar/>
    <div id="Price">
      <v-flex class="vux-center">
        <div class="price-form">
          <v-card elevation="10" class="form-wrapper">
            <v-card-title style="justify-content: center">
              <h3>Price Recommendation</h3>
            </v-card-title>
            <hr />
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Brand:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.car"
                      required
                      placeholder="Enter your car brand"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-2"
                    label="Body Type:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.body"
                      required
                      placeholder="Enter your car body type"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-3"
                    label="Mileage  (‘000 Km):"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.mileage"
                      required
                      placeholder="Enter your car mile age"
                      step="0.1"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-4"
                    label="Eng.Volume (‘000 cubic cm):"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.engV"
                      required
                      step="0.1"
                      placeholder="Enter your car engine "
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-5"
                    label="Type of Fuel:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.engType"
                      required
                      placeholder="Enter your engine type"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-6"
                    label="Year of Production:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.year"
                      required
                      type="number"
                      placeholder="Enter your car year"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-7"
                    label="Model:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.model"
                      required
                      placeholder="Enter your model name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-8"
                    label="Drive Type:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.drive"
                      required
                      placeholder="Enter your car drive type"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group id="input-group-4">
                <b-form-checkbox
                  v-model="form.registration"
                  name="checkbox-4"
                  value="yes"
                  unchecked-value="no"
                  >Your car is registered?</b-form-checkbox
                >
              </b-form-group>
              <b-form-group v-if="this.price!=0"><h5>Our Recommendation for you is: </h5>
                <h1 style="color:limegreen">{{price}}</h1></b-form-group>
              
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </v-card>
        </div>
      </v-flex>
    </div>
  </section>
</template>


<script>
import axios from 'axios'
import AppBar from './AppBar';
export default {
  components:{
  AppBar,},
  data() {
    return {
      form: {
        car: "",
        body: "",
        mileage: null,
        engV: null,
        engType: "",
        registration: "no",
        year: null,
        model: "",
        drive: "",
      },
        price: 0,
      show: true,
    };
  },
  methods: {
    // consume python service from heroku, for predict the price
    async onSubmit(evt) {
      evt.preventDefault();
      var info = this.form
      var num1 = parseFloat(info.mileage)
      var num2 = parseFloat(info.engV)
      var num3 = parseInt(info.year)
       await axios.post('https://cars-flask-model.herokuapp.com/', {
           car: info.car,
            body: info.body,
            mileage: num1,
            engV: num2,
            engType: info.engType,
            registration: info.registration,
            year: num3,
            model: info.model,
            drive: info.drive,
            price: 0 
       }).then(response => {
            console.log(response.data)
            this.price = (response.data.results.price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                });
        }).catch(e => {
            console.log(e);
        });
      
    },
    // reset all fields
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.car = "";
      this.form.body = "";
      this.form.mileage = "";
      this.form.engV = "";
      this.form.engType = "";
      this.form.year = "";
      this.form.model = "";
      this.form.drive = "";
      this.price = "";

      this.form.registration = "no";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 30px;

  border-radius: 9px 9px 9px 9px;
}
.price-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 116vh;
}

.font {
  /* The image used */
  
  background: url(https://images.unsplash.com/photo-1521410843026-323be9ead002?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)
    no-repeat;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>