import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from './modules/cart.js'
import products from './modules/products.js'
export default new Vuex.Store({
  state: {
    count: 0,
    username: '小马哥'
  },
  getters:{
    evenOrodd(state){
      return state.count % 2 == 0 ? "偶数":"奇数";
    }
  },
  mutations: {
    increment(state, amount){
      state.count += amount;
    },
    decrement(state){
      state.count--;
    },
    incrementAsync(state){
      state.count++;
    }
  },
  actions: {
    increment({commit}, {amount}){
      commit('increment', amount);
    },
    decrement({commit}){
      commit('decrement');
    },
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('incrementAsync')
      }, 1000)
    }
  },
  modules: {
    cart,
    products
  }
})
