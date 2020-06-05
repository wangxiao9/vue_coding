<template>
  <div>
    <h2>{{title}}</h2>
    <son :father_list="father_list" @changeFatherTitle="changeTitle"></son>
  </div>
</template>
<script>
import Son from "./Son.vue";
export default {
  name: "Father",
  data() {
    return {
      title: "father",
      father_list: ["第一章", "第二章", "第三章", "第四章"]
    };
  },
  methods: {
    changeTitle(str) {
      this.title = str;
    }
  },
  components: {
    son: Son
  }
};
</script>