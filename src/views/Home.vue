<template>
  <header>123</header>
  <div class="home">主页面{{ info }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data() {
    return {
      info: '这是继承的Home',
    }
  }
}
</script>
