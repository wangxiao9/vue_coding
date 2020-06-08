<template>
    <div>
        <my-add></my-add>
        <my-sub></my-sub>
    </div>
</template>

<script>
import Add from './Add.vue'
import Sub from './Sub.vue'

export default {
    data() {
        return {}
    },
    components: {
        'my-add': Add,
        'my-sub': Sub
    }
}
</script>