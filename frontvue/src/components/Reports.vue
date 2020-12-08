<template>
  <div>
    <AppBar />
    <section class="font">
      <!-- Small charts -->
      <br><br><br><br>
      <b-row>
      <div class="col-lg-4">
          
        <b-card bg-variant="dark"  text-variant="white" class="text-center">
          <template slot="header">
           
            <h3 class="card-title">
              Users vs Time
            </h3>
          </template>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              :chart-data="purpleLineChart.chartData"
              :gradient-colors="purpleLineChart.gradientColors"
              :gradient-stops="purpleLineChart.gradientStops"
              :extra-options="purpleLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </b-card>
      </div>
      <div class="col-lg-4">
        <b-card bg-variant="dark"  text-variant="white" class="text-center">
          <template slot="header">
            
            <h3 class="card-title">
               Sells by Brand
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              :chart-data="blueBarChart.chartData"
              :gradient-stops="blueBarChart.gradientStops"
              :extra-options="blueBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </b-card>
      </div>
            <div class="col-lg-4">
        <b-card bg-variant="dark"  text-variant="white" class="text-center">
          <template slot="header">
            
            <h3 class="card-title">
               Brand vs Time
            </h3>
          </template>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              :chart-data="greenLineChart.chartData"
              :gradient-stops="greenLineChart.gradientStops"
              :extra-options="greenLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </b-card>
      </div>
      </b-row>
      <b-row style="
    justify-content: center;
">

      <div class="col-lg-4">
        <b-card bg-variant="dark"  text-variant="white" class="text-center">
          <template slot="header">
            
            <h3 class="card-title">
               Price Recommendation
            </h3>
          </template>
          <div class="chart-area">
             <pie-chart
              style="height: 100%"
              :chart-data="purpleLineChart.chartData"
              
              
            >
            </pie-chart>
          </div>
        </b-card>
      </div>
      <br><br>
      </b-row>
    </section>
  </div>
</template>

<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import PieChart from "@/components/Charts/PieChart";
import * as chartConfigs from "@/components/Charts/config";
import AppBar from "./AppBar";
import config from "@/config";

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
];
let bigChartLabels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let bigChartDatasetOptions = {
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
};

export default {
  components: {
    AppBar,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
        chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              ...bigChartDatasetOptions,
              data: bigChartData[0],
            },
          ],
          labels: bigChartLabels,
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
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
              data: [80, 100, 70, 80, 120, 80],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
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