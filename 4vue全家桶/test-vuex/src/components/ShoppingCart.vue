<template>
    <div> 
        <h2>我的购物车</h2>
        <ul>
            <li v-for="item in getCartlist" :key="item.id">
                {{item.title}} - {{item.price | currency}} x {{item.quantity}}
            </li>
        </ul>
        总价格:{{cartTotal | currency}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters('cart', ['getCartlist', 'cartTotal'])
        },

    }
</script>

<style lang="scss" scoped>

</style>