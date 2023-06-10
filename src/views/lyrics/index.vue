<template>
  <header :class="ns.b('header')">
    <EnterVideo></EnterVideo>
    <EnterAudio></EnterAudio>
  </header>
  <main :class="ns.b('main')">
    <template v-for="(item, index) of lyrics" :key="index">
      <ImageWrap ref="wraps" :index="index">
        <img
          :class="ns.b('main-img')"
          :src="`${item.url}?imageMogr2/thumbnail/!16p`"
          @click="onPreview(item)"
        />
      </ImageWrap>
    </template>
  </main>
</template>

<script lang="ts">
import ImageWrap from '@/components/ImageWrap.vue'
import { useNamespace } from '@/hooks/use-namespace'
import { useList, useScroll, usePreviewImage } from './hooks'
import { watch, defineAsyncComponent } from 'vue'
import { nextTick } from 'vue'

export default {
  components: {
    ImageWrap,
    EnterVideo: defineAsyncComponent(() => import('@/components/VideoView/Enter.vue')),
    EnterAudio: defineAsyncComponent(() => import('@/components/AudioView/Enter.vue')),
  },
  setup() {
    const ns = useNamespace('lyricList')
    const listInfo = useList()
    const scrollInfo = useScroll()
    const previewInfo = usePreviewImage()

    // 有数据后, 可监听
    watch(listInfo.lyrics, async (items) => {
      if (items.length) {
        // 待DOM布局完成
        await nextTick()
        scrollInfo.start()
      }
    })

    return {
      ns,
      ...listInfo,
      ...scrollInfo,
      ...previewInfo,
    }
  },
}
</script>

<style lang="scss">
.#{$ns}-lyricList {
  &-header {
    @include flex(space-between);
    padding: 15px 15px 0;
    margin-bottom: 30px;

    position: sticky;
    top: 0;
    z-index: 10;
  }

  &-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 盒子的最小宽度和最大宽度 */
    grid-gap: 10px; /* 盒子之间的间距 */
    grid-template-rows: repeat(auto-fill, minmax(300px, auto));

    &-img {
    }
  }
}

/* 宽大一些的屏幕 */
// @media (min-width: 640px) {
//   .lyrics-main {
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     grid-auto-rows: auto;
//   }
// }
</style>
