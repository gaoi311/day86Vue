<template>
    <div>
        <div v-if='loading'>
            loading
        </div>
        <div v-if='post'>
            <h3>标题:{{post.title}}</h3>
            <p>内容:{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: null,
                loading: false
            }
        },
        created() {
            console.log(this.$http);
            this.getPostData();
        },
        methods: {
            async getPostData(){
                try{
                    this.loading = true;
                    let { data } = await this.$http.get('/api/post');
                    this.loading = false;
                    this.post = data;
                }catch(error){
                    console.log(error)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>