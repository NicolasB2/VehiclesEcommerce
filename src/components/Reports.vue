<template>
  <div>
    <AppBar />
    <section class="font">
      <!-- Small charts -->
      <br /><br /><br /><br />
      <b-row style="justify-content: center">
        <div class="col-lg-4">
          <b-card bg-variant="dark" text-variant="white" class="text-center">
            <template slot="header">
              <h3 class="card-title">Sells by Users</h3>
            </template>
            <div class="chart-area">
              <bar-chart
                style="height: 100%"
                :key="componentKey"
                :chart-data="blueBarChart2.chartData"
                :gradient-stops="blueBarChart2.gradientStops"
                :extra-options="blueBarChart2.extraOptions"
              >
              </bar-chart>
            </div>
          </b-card>
        </div>
        <div class="col-lg-4">
          <b-card bg-variant="dark" text-variant="white" class="text-center">
            <template slot="header">
              <h3 class="card-title">Sells by Brand</h3>
            </template>
            <div class="chart-area">
              <bar-chart
                style="height: 100%"
                :key="componentKey"
                :chart-data="blueBarChart.chartData"
                :gradient-stops="blueBarChart.gradientStops"
                :extra-options="blueBarChart.extraOptions"
              >
              </bar-chart>
            </div>
          </b-card>
        </div>
    
      </b-row>
      <b-row style="justify-content: center">
        <div class="col-lg-4">
          <b-card bg-variant="dark" text-variant="white" class="text-center">
            <template slot="header">
              <h3 class="card-title">Price Recommendation</h3>
            </template>
            <div class="chart-area">
              <pie-chart
              :key="componentKey"
                style="height: 100%"
                :chart-data="purplePieChart.chartData"
              >
              </pie-chart>
            </div>
          
          </b-card>
        </div>
        <br /><br />
      </b-row>
    </section>
  </div>
</template>

<script>

import BarChart from "@/components/Charts/BarChart";
import PieChart from "@/components/Charts/PieChart";
import * as chartConfigs from "@/components/Charts/config";
import AppBar from "./AppBar";
import config from "@/config";


import axios from 'axios'
import { api } from "../helpers/helpers";
export default {
    
  components: {
    AppBar,
    BarChart,
    PieChart,
  },
  data() {
    return {
      componentKey: 0,

      purplePieChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["R-squared", "Error"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Brand",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart2: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Count",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  }, methods:{
      forceRerender() {
        console.log("entrooo")
      this.componentKey += 1;
    }, compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
}
  },async created() {


       axios.get('https://cars-flask-model.herokuapp.com/').then(response => {
          var numero =response.data.results.metric;
            var conDecimal = numero.toFixed(4)*100; 
            var error = 100 - conDecimal
            var error2 = parseFloat(error.toFixed(2))
            this.purplePieChart.chartData.datasets[0].data = [conDecimal, error2]
            
            
            this.forceRerender();
        }).catch(e => {
            console.log(e);
        });
      var testArray = []
      var usersArray = []
      var users2 = []
      var array = await api.getvehiclesSold()
        array.forEach(element => {
          testArray.push(element.car)
          usersArray.push(element.idSeller)
        });
        for (let index = 0; index < usersArray.length; index++) {
          const element = await api.getUser(usersArray[index]);
          users2.push(element.userName)
        }
         var newArray2 = this.compressArray(users2);
      var newArray = this.compressArray(testArray);
        newArray.forEach(element => {
           this.blueBarChart.chartData.datasets[0].data.push(element.count)
           this.blueBarChart.chartData.labels.push(element.value)
        });
        this.forceRerender();

        newArray2.forEach(element => {
           this.blueBarChart2.chartData.datasets[0].data.push(element.count)
           this.blueBarChart2.chartData.labels.push(element.value)
        });
        this.forceRerender();
    
  }
};
</script>

<style>
.font {
  /* The image used */
  background: url(https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1529&q=80)
    no-repeat;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>