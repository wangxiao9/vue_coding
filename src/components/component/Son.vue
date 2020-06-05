<template>
  <div>
    <ul>
      <li v-for="item in father_list" :key='item' @click="changeFatherTitle">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    name: 'Son'
    return {
     // list: ['第一章', '第二章', '第三章', '第四章']
    }
  },
  methods: {
    changeFatherTitle (ev) {
      console.log(this)
      this.$emit('changeFatherTitle', ev.target.innerHTML)
    }
  },
  props: ['father_list']
}
</script>