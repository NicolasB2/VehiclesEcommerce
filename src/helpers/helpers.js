
import axios from 'axios'; //impor axios
import Vue from 'vue'; // import vue
import VueFlashMessage from 'vue-flash-message'; //import flash message
import 'vue-flash-message/dist/vue-flash-message.min.css'; //import vue-flash-message
import Cookies from "js-cookie"; //import cookies

const ENDPOINT_PATH = "https://reqres.in/api/"; // declare the endpoint

// set VueFlashMessage for time out of 3 seconds
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue(); //init vue
const vehiclesURL = 'http://localhost:3000/vehicles/'; //route of vehicles services
const loginURL = 'http://localhost:3000/auth/facebook/'; //route of facebook authentication
const usersURL = 'http://localhost:3000/users/'; // route of users services


// declare the handle error
const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash( `${error.response.status}: ${error.response.statusText}`, 'error');
  });



// export api constant with all methods from back-end service
export const api = {
  // get a vehicle with the _id like parameter
  getvehicle: handleError(async id => {
    const res = await axios.get(vehiclesURL + id);
    return res.data;
  }),

  //get all vehicles with the same seller, the parameter its the _id of the seller
  getvehiclesbyuser: handleError(async id => {
    let byuser = [];
    const res = await axios.get(vehiclesURL);
    res.data.forEach(element => {
      if(element.idSeller===id && element.state === 'onSale'){
        byuser.push(element)
      }
    });
    return byuser;
  }),

  //get all vehicles which are already sold
  getvehiclesSold: handleError(async () => {
    let vehiclesSold = [];
    const res = await axios.get(vehiclesURL);
    res.data.forEach(element => {
      if( element.state === 'sold'){
        vehiclesSold.push(element)
      }
    });
    return vehiclesSold;
  }),

  //get all vehicles to sell
  getvehicles: handleError(async () => {
    let vehiclesSell = [];
    const res = await axios.get(vehiclesURL);
    res.data.forEach(element => {
      if( element.state === 'onSale'){
        vehiclesSell.push(element)
      }
    });
    return vehiclesSell;
  }),

  //remove a vehicle from database, the parameter its vehicle _id
  deletvehicle: handleError(async id => {
    const res = await axios.delete(vehiclesURL + id);
    return res.data;
  }),

  //create a new vehicle, the parameter its the vehicle object
  creatvehicle: handleError(async payload => {
    const res = await axios.post(vehiclesURL, payload);
    return res.data;
  }),

  //update the atributes from a vehicle, the parameter its vehicle _id
  updatevehicle: handleError(async payload => {
    const res = await axios.put(vehiclesURL + payload._id, payload);
    return res.data;
  }),

  //get the user with the _id
  getUser: handleError(async id => {
    const res = await axios.get(usersURL + id);
    return res.data;
  }),

  //get all users
  getUsers: handleError(async () => {
    const res = await axios.get(usersURL);
    return res.data;
  }),

  //deleted a user with
  deletUser: handleError(async id => {
    const res = await axios.delete(usersURL + id);
    return res.data;
  }),

  //create a user, the parameter its the user object
  creatUser: handleError(async payload => {
    const res = await axios.post(usersURL, payload);
    return res.data;
  }),

  //update the user, the parameters are the user object and user id
  updateUser: handleError(async payload => {
    const res = await axios.put(usersURL + payload._id, payload);
    return res.data;
  }),

  //remove the user id cookies
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },

  //add the user id cookie
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },

  //get the user's id 
  getUserLogged() {
    try {

      var obj = JSON.parse(Cookies.get("userLogged"));
      return obj._id;

    } catch (error) {
      return ""
    }
  },

  //login with  email and password
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  
  //login of facebook
  loginFacebook: handleError(async ()=> {
    const res = await axios.get(loginURL);
    return res.data;
  }),

};