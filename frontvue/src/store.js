import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        vehicle:{ },
        seller: { }
    },

    mutations:{
        viewDetails(state,  payload){
            state.vehicle = payload;
        },
        viewSeller(state,  payload){
            state.seller = payload;
        }
        
    },

    actions:{
        viewDetails({commit}, payload){
            commit('viewDetails', payload);
        },
        viewSeller({commit}, payload){
            commit('viewSeller', payload);
        }
    }

})