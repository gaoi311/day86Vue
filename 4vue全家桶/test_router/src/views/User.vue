<template>
    <div>
        <div>用户界面{{$route.params.id}}</div>
        <div>用户界面{{id}}-{{title}}</div>
        <button @click="gohome">跳转到首页</button>
        <button @click="goback">后退</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.params.id);
        },
        beforeRouteUpdate(to, from, next){
            next();
        },
        props:['id', 'title'],

        methods: {
            gohome(){
                // this.$router.push('/');
                this.$router.push({
                    path: '/register',
                    query: {
                        next: 'path'
                    }
                })
            },
            goback(){
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>