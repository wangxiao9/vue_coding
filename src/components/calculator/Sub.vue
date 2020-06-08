<template>
  <div>
    <h3>这是Sub组件:{{count}}</h3>
    <h3>这是Sub组件getter:{{showNum()}}</h3>
    <button @click="sub">-1</button>
    <button @click="subAsync">异步-1</button>
  </div>
</template>

<script>
// 导入mapState函数
// 导入 mapMutations函数
// 导入mapGetters 函数
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  // 定义计算属性，把全局变量映射到当前组件中的computed计算属性中
  computed: {
    ...mapState(["count"])
  },
  // 映射到methods
  methods: {
    ...mapMutations(["sub"]),
    ...mapActions(["subAsync"]),
    ...mapGetters(['showNum'])
  }
};
</script>