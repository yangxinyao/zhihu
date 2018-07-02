<template>
    <div class="in">
        <header>
            <span @click="ups">返回</span>
            <span>详情页</span>
            <span></span>
        </header>
        <section>
            <h3>{{this.list.title}}</h3>
            <div class="sm">{{this.list.cont}}</div>
            <div>{{this.list.art}}</div>
            <!-- <div>{{this.list}}</div> -->
        </section>
        <footer>
            <span @click="cut">--</span><span>{{this.list.num}}</span><span @click="plus">++</span>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["list", "ups", "cut", "plus"]
};
</script>

<style scoped>
.in {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.in header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.in header span {
  flex: 1;
}

section {
  flex: 1;
}
section .sm {
  font-size: 12px;
  color: #ccc;
}
footer {
  width: 100%;
  height: 50px;
  margin-top:10px;
  font-weight: bold;
}
</style>
