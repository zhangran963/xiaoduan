<template>
  <li class="image-box" @click.stop="$emit('focus')">
    <div class="front" v-if="show">
      <img class="image" :src="src" />
    </div>
    <div class="back" v-if="show"></div>
  </li>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    show: {
      type: Boolean,
    },
    src: {
      type: String,
    },
    name: {
      type: String,
    },
  },
})
export default class Item extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.image-box {
  list-style-type: none;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  position: relative;
  border-radius: 2px;
  /* Android机兼容性好; Apple兼容性差 */
  transform-style: preserve-3d;
  transform-origin: 50%;
  transition: transform 640ms ease-in-out;

  &:nth-child(odd) {
    .front,
    .back {
      background-color: #e7f7ff;
    }
  }
  &:nth-child(even) {
    .front,
    .back {
      background-color: #ece1da;
    }
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;

    @include flex-row(center, center);
    .image {
      max-width: 90%;
    }
  }
  .front {
    z-index: 2;
  }
  .back {
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.3);
    /* 使背面的元素: 面向后 + 倒立 */
    transform: translateZ(0px) rotateX(180deg) rotateZ(180deg);
  }
}
</style>
