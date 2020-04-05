<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{mycount}}-{{user}}-{{evenOrodd}}
    <button @click="increment">加一</button>
    <button @click="decrement">减一</button>
    <button @click="incrementAsync">异步加一</button>
    <ProductList></ProductList>
    <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
export default {
  computed: {
    // count(){
    //   return this.$store.state.count;
    // },
    // username(){
    //   return this.$store.state.username;
    // }
    // ...mapState(['count', 'username'])
    ...mapState({
      mycount: 'count',
      user: 'username'
    }),
    // evenOrodd(){
    //   return this.$store.getters.evenOrodd;
    // }
    ...mapGetters(['evenOrodd'])
  },
  methods: {
    increment(){
      this.$store.dispatch('increment', {
        amount: 1
      })
    },
    decrement(){
      this.$store.dispatch('decrement')
      // this.$store.commit('decrement')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    }
  },
  components:{
    ProductList,
    ShoppingCart
  }
}
</script>