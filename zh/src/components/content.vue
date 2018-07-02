<template>
    <div>
        <ul>
            <li v-for="(item,index) in contlist" :key="index" @click="jump(index)">
                <h3>{{item.title}}</h3>
                <div class="sma">{{item.cont}}</div>
                <div class="arts">{{item.art}}</div>
                <div>{{item.num}}个赞</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods: {
        jump(ind){
            this.$router.push({name:'detail',params:{con:this.contlist,index:ind}})
        }
    },
    mounted () {
        // this.contlists=this.contlist;
        // console.log(this.contlist)
    //    bus.$on('upd',res=>{
    //        this.contlist=res.items
    //    })  
    },
   
    props: ['contlist']
    // beforeDestroy(){
    //     bus.$off()
    // },
   
    
}
</script>

<style  scoped>
.sma{
    font-size: 12px;
    color:#ccc;
}
.arts{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
li{
    border-bottom:1px solid #ccc;
    margin-top:5px;
}
</style>
