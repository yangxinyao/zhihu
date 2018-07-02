<template>
    <div class="wraper">
        <section class="content">
            <router-view></router-view>
        </section>
        <footer class="footer text-center">
            <span><router-link to="/home">首页</router-link></span>
            <span><router-link to="/idea">想法</router-link></span>
            <span><router-link to="/university">大学</router-link></span>
            <span><router-link to="/inform">通知</router-link></span>
            <span><router-link to="/page">我的</router-link></span>
        </footer>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>
