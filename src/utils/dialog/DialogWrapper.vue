<template>
  <Transition>
    <div :class="ns.b()" v-if="store.visible">
      <component :is="store.component" v-bind="store.props" v-on="store.onProps" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useNamespace } from '@/hooks/use-namespace'

export const store = reactive({
  visible: false,
  component: null,
  props: {},
  onProps: {},
})

export default {
  setup() {
    const ns = useNamespace('dialogContainer')
    return {
      ns,
      store,
    }
  },
}
</script>

<style lang="scss">
.#{$ns}-dialogContainer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.68);

  @include flex();
}
</style>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
