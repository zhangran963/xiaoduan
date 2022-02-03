<template>
  <Modal class="preview-image-modal" v-bind="$attrs" @click="$emit('close')">
    <img class="image" :src="src" @click.prevent />
  </Modal>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Modal from './Modal.vue'

@Options({
  components: {
    Modal,
  },
  props: {
    src: {
      type: String,
    },
  },
})
export default class PreviewImageModal extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.preview-image-modal {
  @include position-fixed(10000);
  perspective: 5000px;

  @include flex-row(center, center);
  > .image {
    max-width: 95vw;
    max-height: 95vh;
  }
}
</style>
