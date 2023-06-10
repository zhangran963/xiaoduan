<template>
  <div class="infos">
    <div>段落1</div>
    <div>段落2</div>
    <div>段落3</div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  props: {
    name: String,
  },
  setup(props) {
    onMounted(() => {
      console.log('moUnted', props)
    })
  },
}
</script>
