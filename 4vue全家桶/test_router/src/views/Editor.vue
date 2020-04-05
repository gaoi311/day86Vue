<template>
    <div>
        <textarea cols="30" rows="10" v-model="content"></textarea>
        <button @click="savecontent">保存</button>
        <ul>
            <li v-for="(item, index) in list" :key='index'>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content: '',
                list: []
            }
        },
        methods: {
            savecontent(){
                this.list.push({
                    title:this.content
                })
                this.content = '';
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log(this);
            next(vm=>{
                console.log(vm);
            });
        },
        beforeRouteUpdate(to, from, next){
            next()
        },
        beforeRouteLeave (to, from, next) {
            if(this.content){
                alert('save');

                next(false);
            }else{
                next()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>