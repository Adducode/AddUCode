import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuActive: false,
    },
    mutations: {
        setIsMenuActive(state, payload) {
            state.isMenuActive = payload;
        }
    },
    actions: {
        setIsMenuActive({ commit }, payload) {
            commit('setIsMenuActive', payload);
        }
    },
    getters: {
        getIsMenuActive(state){
            return state.isMenuActive;
        }
    },
    modules: {
    }
})
