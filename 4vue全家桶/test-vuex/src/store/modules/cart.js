export default {
    namespaced:true,
    state:{
        cartlist:[],
        count:0
    },
    getters:{
        getCount(state){
            return state.count;
        },
        getCartlist(state, getters, rootState){
            return state.cartlist.map(({id, quantity})=>{
                const product = rootState.products.all.find(item => item.id===id);
                return {
                    title: product.title,
                    price:product.price,
                    quantity
                }
            })
        },
        cartTotal(state, getters){
            return getters.getCartlist.reduce((total, product)=>{
                return total + product.price * product.quantity
            }, 0);
        }
    },
    mutations:{
        pushProductToCart(state, {id, quantity}){
            state.cartlist.push({
                id,quantity
            });
            console.log(state.cartlist)
        },
        incrementitem(state, {id}){
            const product = state.cartlist.find(item => item.id === id)
            product.quantity ++;

        }
    },
    actions:{
        addProductToCart({commit, state}, product){
            if (product.inventory > 0) {
                const cartitem = state.cartlist.find(item => item.id === product.id)
                if (!cartitem) {
                    commit('pushProductToCart', {id:product.id, quantity:1})
                } else {
                    commit('incrementitem', {id: product.id})
                }
                commit('products/decrementProductInventory', {id:product.id}, {root: true})
            }
        }
    }
}