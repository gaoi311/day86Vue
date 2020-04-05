import Axios from 'axios'
// import { prototype } from 'vue/types/umd';
export default {
    namespaced:true,
    state:{
        all:[]
    },
    getters:{
      
    },
    mutations:{
        getAllProducts(state, result){
            state.all = result
        },
        decrementProductInventory (state, { id }) {
            const product = state.all.find(product => product.id === id)
            product.inventory--
        },

    },
    actions:{
        async getAllProducts({commit}){
            const res = await Axios.get('/api/products')
            const result = res.data.results;
            console.log(result)
            commit('getAllProducts', result)
        }
    }
}