<template>
  <div :class="ns.b()" @click.stop="onClick">
    <img :class="ns.b('icon')" src="/src/assets/video-icon.svg" alt="video" />
  </div>
</template>

<script lang="ts">
import { useNamespace } from '@/hooks/use-namespace'
import { useDialog } from '@/utils/dialog/index'
import VideoModal from '@/components/VideoView/modal.vue'

export default {
  name: 'EnterVideo',
  setup() {
    const ns = useNamespace('entervideo')
    const dialog = useDialog(VideoModal)

    const onClick = () => {
      dialog.show(
        {},
        {
          close() {
            dialog.close()
          },
        }
      )
    }

    return {
      ns,
      onClick,
    }
  },
}
</script>

<style lang="scss">
.#{$ns}-entervideo {
  perspective: 700px;

  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2), 0 3px 25px rgba(0, 0, 0, 0.5);

  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @include flex();
  &-icon {
    width: 88%;
    height: 88%;
  }
}
</style>
