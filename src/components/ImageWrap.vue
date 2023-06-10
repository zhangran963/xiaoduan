<template>
  <div :class="ns.b()" ref="wrap" :style="{ visibility: show ? 'visible' : 'hidden' }">
    <slot v-if="show"></slot>
  </div>
</template>

<script lang="ts">
import { useNamespace } from '@/hooks/use-namespace'

export default {
  inheritAttrs: false,
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const ns = useNamespace('imageWrap')

    return {
      ns,
    }
  },
  data() {
    return {
      top: 0,
      bottom: 0,
      show: false,
      isActive: false,
    }
  },
  mounted() {
    const wrapEle = this.$refs.wrap as HTMLDivElement
    const { top, bottom } = wrapEle.getBoundingClientRect()

    this.top = top
    this.bottom = bottom

    if (this.index < 20) {
      this.show = true
    }
  },
  methods: {
    refresh({ topEdge = 0, bottomEdge = 0 } = {}) {
      if (this.bottom < bottomEdge) {
        this.show = true
      }

      if (this.top > topEdge && this.bottom < bottomEdge) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
  },
}
</script>

<style lang="scss">
.#{$ns}-imageWrap {
  @include flex();
  padding: 6px 0;
  min-height: 180px;

  img {
    width: 90%;
  }

  &:nth-child(odd) {
    background-color: #e7f7ff;
  }

  &:nth-child(even) {
    background-color: #ece1da;
  }
}

/* 宽大一些的屏幕 */
@media (min-width: 640px) {
  .#{$ns}-imageWrap {
    padding: 10px 0;
  }
}
</style>
