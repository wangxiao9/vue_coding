<template>
  <div>
    <h3>这是Add组件:{{this.$store.state.count}}</h3>
    <h3>getter:{{this.$store.getters.showNum}}</h3>
    <button @click="Add">+1</button>
    <button @click="AddAsync">异步+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 触发mutations
    Add() {
      this.$store.commit("add");
    },
    // 触发action
    AddAsync() {
      this.$store.dispatch("addAsync");
    }
  }
};
</script>