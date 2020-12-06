import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        vehicle:{ },
        user: { }
    },

    mutations:{
        viewDetails(state,  payload){
            state.vehicle = payload;
        },
        viewUser(state,  payload){
            state.user = payload;
        }
        
    },

    actions:{
        viewDetails({commit}, payload){
            commit('viewDetails', payload);
        },
        viewUser({commit}, payload){
            commit('viewUser', payload);
        }
    }

})