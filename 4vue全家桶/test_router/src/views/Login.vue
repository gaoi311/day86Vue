<template>
    <div>
        <input type="text" v-model="user">
        <input type="password" v-model="pwd">
        <button @click="handleclick">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: '',
                pwd: ''
            }
        },
        methods: {
            handleclick(){
                setTimeout(()=>{
                    let data = {
                        user: this.user
                    }
                    localStorage.setItem('user', JSON.stringify(data));
                    this.$router.push({
                        name: 'notes'
                    })
                }, 1000)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>