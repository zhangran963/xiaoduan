<template>
  <div class="audio-box" @click.stop="clickHandler">
    <poster ref="posterRef"></poster>
  </div>
</template>

<script lang="ts" setup>
import Poster from './poster.vue'
import { watch, ref } from 'vue'
import { store, toggleMode } from '@/utils/index'
import { modeMap } from '@/constant'

const posterRef = ref()

watch(
  () => store.state.mode,
  () => {
    if (store.getters.isAudio) {
      console.log('* ', posterRef.value)
      posterRef.value.start()
    } else {
      posterRef.value.stop()
    }
  }
)

function clickHandler() {
  const posterVm = posterRef.value
  if (store.getters.isAudio) {
    /* "声音模式", 手动控制动画 */
    if (posterVm.isAnimate) {
      posterVm.stop()
    } else {
      posterVm.start()
    }
  } else {
    /* 其它模式, 监听控制动画 */
    toggleMode(modeMap.audio)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.audio-box {
  perspective: 700px;

  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2), 0 3px 25px rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 12px;
  top: 10px;
  z-index: 1000;

  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  padding: 6px;
  box-sizing: border-box;
}
</style>
