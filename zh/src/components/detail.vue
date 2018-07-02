<template>
    <Det :list="list" :ups="ups" :plus="plus" :cut="cut"></Det>
</template>

<script>
import Det from './det';
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            list:'',
            ind:0
        }
    },
    
    mounted () {
       this.list=this.$route.params.con[this.$route.params.index];
       this.ind=this.$route.params.index;
    },
    methods: {
        ...mapActions(['minus']),
        ups(){
            this.$router.go(-1)
        },
        cut(){
            if(this.list.num<1)return
            this.minus({num:--this.list.num,id:this.ind})
           // this.list.num--;
            // bus.$emit('upd',{
            //     inds:this.$route.params.index,
            //     items:this.$route.params.con
            // })
        },
        plus(){
            this.list.num++;
        }
    },
    components: {
        Det
    }
}
</script>

<style>
    
</style>
