<template>
    <div>
        <h3>Page页码</h3>
    </div>
</template>

<script>
    export default {
        created () {
            console.log(this.$route.query);
        },
    }
</script>

<style lang="scss" scoped>

</style>