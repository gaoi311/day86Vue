<template>
<div>
    <h3>{{msg}}</h3>
</div>
</template>

<script>
export default {
    data(){
        return {
            msg: "vue-cli3开发单文件组件"
        };
    }
};
</script>
<style scoped>
    h3{
        color: red;
    }
</style>