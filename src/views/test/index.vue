<template>
  <div id="test-view" class="test-view">
    <p>test page: {{ dialog.store.visible }}</p>

    <div>
      <button @click="toggle">toggle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useDialog } from '@/utils/dialog/index'
import ModalContent from './modal.vue'

export default {
  setup() {
    const dialog = useDialog(ModalContent)

    const toggle = () => {
      if (dialog.store.visible) {
        dialog.close()
      } else {
        dialog.show({
          name: '四叶草',
        })
      }
    }

    return {
      dialog,
      toggle,
    }
  },
}
</script>
