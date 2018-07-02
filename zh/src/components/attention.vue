<template>
    <div>
        <Conts :contlist="items"></Conts>
        {{ind}}
    </div>
</template>

<script>
import axios from 'axios';
import Conts from './content';
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
           contlist:'',
           ind:1
        }
    },
    computed: {
        ...mapState(['items'])
    },
    methods: {
        ...mapActions([
            "fetchUpdata"
        ])
    },
    mounted () {   
        this.fetchUpdata()
      
    },
    components: {
        Conts
    }
}
</script>

<style>

</style>
