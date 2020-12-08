<template>
  <div>
     <AppBar/>
    <section id="home" class="welcome-hero">
      <div class="container">
        <div class="welcome-hero-txt">
          <h1>get your desired car in resonable price</h1>
        </div>
      </div>
    </section>

    <section id="service" class="service">
      <div class="container">
        <div class="service-content">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-service-item">
                <div class="single-service-icon">
                  <v-icon color="black" x-large> mdi-car-connected </v-icon>
                </div>
                <h2>
                  <a href="sell">sell your <span></span> car!!</a>
                </h2>
                <p>We offer you the best service to negotiate your car.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-service-item">
                <div class="single-service-icon">
                  <v-icon color="black" x-large> mdi-car </v-icon>
                </div>
                <h2><a href="catalog">Find your desired car!!</a></h2>
                <p>We offer you your desired car at the best possible price.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-service-item">
                <div class="single-service-icon">
                  <v-icon color="black" x-large> mdi-camera-timer </v-icon>
                </div>
                <h2><a href="recommendation">Find out the real price!!</a></h2>
                <p>We offer you a price service for your car.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/.container-->
    </section>
    <!--/.service-->
  </div>
</template>


<script>
import AppBar from './AppBar';
export default {
  components:{
  AppBar
  }}
</script>

<style>
.welcome-hero {
  position: relative;
  background: url(https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
    no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 10px 14px -7px rgba(0, 0, 0, 0.81);
  z-index: 1;
}

/*.welcome-hero-txt*/
.welcome-hero-txt {
  text-align: center;
  padding: 330px 0 372px;
}
.welcome-hero-txt h1 {
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 45px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.service {
  padding: 120px 80px;
}

.single-service-item {
  text-align: center;
  padding: 55px 30px 60px;
  border-radius: 3px;
  margin-bottom: 30px;
  border: 1px solid #dadfe9;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -ms-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
}

.single-service-icon {
  display: inline-block;
  color: #50616c;
}
.single-service-item h2 a {
  color: black;
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 20px;
  margin: 35px 0 20px;
}
.single-service-item h2 a span {
  text-transform: lowercase;
}
.single-service-item p {
  font-size: 20px;
  padding-bottom: 35px;
  text-transform: initial;
  position: relative;
}
.single-service-item p:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 3px;
  background: #ea3030;
  bottom: 0;
  left: 50%;
  margin-left: -10px;
}

.single-service-item:hover h2 a,
.single-service-item:hover p {
  color: #fff;
}
.single-service-item:hover p:before {
  background: #fff;
}
.single-service-item:hover {
  box-shadow: 0 12px 30px 0px rgba(0, 1, 193, 0.2);
  background: #ea3030;
  border: 1px solid #ea3030;
}
</style>