<template>
  <transition name="fade">
    <div v-if="show" class="modal modal-container" @touchmove.prevent>
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.72);
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
