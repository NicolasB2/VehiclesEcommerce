
import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://reqres.in/api/";


Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const vehiclesURL = 'http://localhost:3000/vehicles/';
const loginURL = 'http://localhost:3000/auth/facebook/';
const usersURL = 'http://localhost:3000/users/';


const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash( `${error.response.status}: ${error.response.statusText}`, 'error');
  });


  
export const api = {
  getvehicle: handleError(async id => {
    const res = await axios.get(vehiclesURL + id);
    return res.data;
  }),
  getvehiclesbyuser: handleError(async id => {
    let byuser = [];
    const res = await axios.get(vehiclesURL);
    res.data.forEach(element => {
      if(element.idSeller===id){
        byuser.push(element)
        console.log(element);
      }
    });
    console.log(res.data)
    return byuser;
  }),
  getvehicles: handleError(async () => {
    const res = await axios.get(vehiclesURL);
    return res.data;
  }),
  deletvehicle: handleError(async id => {
    const res = await axios.delete(vehiclesURL + id);
    return res.data;
  }),

  creatvehicle: handleError(async payload => {
    const res = await axios.post(vehiclesURL, payload);
    return res.data;
  }),
  updatevehicle: handleError(async payload => {
    const res = await axios.put(vehiclesURL + payload._id, payload);
    return res.data;
  }),

  getUser: handleError(async id => {
    const res = await axios.get(usersURL + id);
    return res.data;
  }),
  getUsers: handleError(async () => {
    const res = await axios.get(usersURL);
    return res.data;
  }),
  deletUser: handleError(async id => {
    const res = await axios.delete(usersURL + id);
    return res.data;
  }),

  creatUser: handleError(async payload => {
    const res = await axios.post(usersURL, payload);
    console.log(res.data)
    return res.data;
  }),
  updateUser: handleError(async payload => {
    const res = await axios.put(usersURL + payload._id, payload);
    return res.data;
  }),

  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    var obj = JSON.parse(Cookies.get("userLogged"));
    return obj._id;
  },

  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  
  loginFacebook: handleError(async ()=> {
    const res = await axios.get(loginURL);
    return res.data;
  }),

};