<template>
  <RouterView />
  <DialogWrapper></DialogWrapper>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DialogWrapper from '@/components/Dialog/fade.vue'
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
