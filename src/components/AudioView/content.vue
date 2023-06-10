<template>
  <div :class="ns.b()" :style="{ transform: `rotate(${deg}deg)` }"></div>
</template>

<script lang="ts">
import { useNamespace } from '@/hooks/use-namespace'

export default {
  props: {
    deg: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const ns = useNamespace('enteraudio-cover')
    return {
      ns,
    }
  },
}
</script>

<style lang="scss">
.#{$ns}-enteraudio-cover {
  opacity: 1;

  background-color: transparent;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  // background-color: darkblue;
  background-image: url('https://ran-1303246897.file.myqcloud.com/www/lyric/audio/Yesterday%20Once%20More.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  transition: transform 90ms;
}
</style>
