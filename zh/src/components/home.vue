<template>
    <div class="wraper">
        <header class="header">
            <input type="text" placeholder="搜索">
            <div class="top">
               <ul class="text-center">
                   <li class="col-xs-4"><router-link to="/home/attention">关注</router-link></li>
                   <li class="col-xs-4"><router-link to="/home/recommend">推荐</router-link></li>
                   <li class="col-xs-4"><router-link to="/home/hotlist">热榜</router-link></li>
               </ul>
            </div>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    input{
        width:96%;
        height: 30px;
        margin-left:2%;
        margin-right: 2%;
        border-radius: 5px;
        padding-left: 10px;
        background-color: #e1e1e1;
        border:0;
        margin-top: 5px;
    }
    .top{
        line-height: 50px;
    }
</style>
