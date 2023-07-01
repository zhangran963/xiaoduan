<template>
  <div :class="ns.b()" @click.stop="$emit('close')">
    <DanceLoading :class="ns.b('loading')" v-if="loading"></DanceLoading>
    <img
      :class="ns.b('img')"
      :src="src"
      @loadstart="onLoadStart"
      @load="onLoadSuccess"
      v-show="!loading"
    />
  </div>
</template>

<script lang="ts">
import { useNamespace } from '@/hooks/use-namespace'
import { ref } from 'vue'
import DanceLoading from '@/components/Loading/dance.vue'

export default {
  name: 'ImageView',
  components: {
    DanceLoading,
  },
  props: {
    src: {
      type: String,
    },
  },
  setup() {
    const ns = useNamespace('imageModal')
    const loading = ref(true)

    const onLoadStart = () => {
      loading.value = true
    }
    const onLoadSuccess = () => {
      loading.value = false
    }

    return {
      ns,
      loading,
      onLoadStart,
      onLoadSuccess,
    }
  },
}
</script>

<style lang="scss">
.#{$ns}-imageModal {
  width: 100%;
  height: 100%;

  @include flex();

  &-img {
    max-width: 95vw;
    max-height: 95vh;
  }
}
</style>
