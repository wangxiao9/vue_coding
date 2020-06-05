<template>
  <div>
    <span>{{second_data}}</span>
  </div>
</template>
<script>
export default {
  name: "Second",
  data() {
    return {};
  },
  props: {
    second_data: {
      type: String
    }
  }
};
</script>