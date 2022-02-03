<template>
  <header>
    <VideoBox></VideoBox>
    <AudioBox></AudioBox>
  </header>

  <ul class="items">
    <ImageItem
      v-for="(item, index) of items"
      :key="index"
      :show="index < showIndex"
      :class="[
        platform.isAndroid && 'is-android',
        platform.isApple && 'is-apple',
      ]"
      :src="item.url"
      @focus="previewItem = item"
    ></ImageItem>
  </ul>
  <span ref="loadmore" style="width: 0; height: 0"></span>

  <!-- 弹窗: 预览图片 -->
  <PreviewImageModal
    :show="!!previewImageSrc"
    :src="previewImageSrc"
    @close="previewItem = null"
  ></PreviewImageModal>
</template>

<script lang="ts">
import VideoBox from '@/components/VideoBox/index.vue'
import AudioBox from '@/components/AudioBox/index.vue'
import ImageItem from '@/components/Item/index.vue'
import PreviewImageModal from '@/components/PreviewImage.vue'
import { platform, Awaited, isPlainObject } from '@/utils/index'
import { getLyricList } from '@/services/lyric'

import { Vue, Options } from 'vue-class-component'

@Options({
  components: {
    VideoBox,
    AudioBox,
    ImageItem,
    PreviewImageModal,
  },
  computed: {
    items() {
      return this.fullItems.slice(0, this.showIndex)
    },
    previewImageSrc() {
      if (isPlainObject(this.previewItem)) {
        return this.previewItem.url
      } else {
        return ''
      }
    },
  },
})
export default class Item extends Vue {
  platform = platform
  fullItems: Awaited<ReturnType<typeof getLyricList>> = []
  showIndex = 10

  previewItem = null

  async mounted() {
    try {
      const fullItems = await getLyricList()
      this.fullItems = fullItems
    } catch (err) {
      console.debug('* err', err)
    }

    await this.$nextTick()
    this.watchScrollHandler()

    Object.assign(window, { vm: this })
  }

  /**
   * 监听：滑动加载更多
   */
  private watchScrollHandler() {
    /* 标识DOM */
    const loadmore = this.$refs.loadmore as Element
    /* 监听标识DOM是否加载到"视图"中 */
    const observer = new IntersectionObserver(
      () => {
        this.showIndex = Math.min(
          this.showIndex + 10,
          this.fullItems.length - 1
        )
        const nextShowIndex = this.showIndex + 10
        if (nextShowIndex > this.fullItems.length - 1) {
          /**
           * 达到最大值
           */
          this.showIndex = this.fullItems.length - 1
          observer.unobserve(loadmore)
        } else {
          /**
           * 未到最大值
           */
          this.showIndex = nextShowIndex
        }
      },
      {
        threshold: 1,
        rootMargin: '140px',
      }
    )
    observer.observe(loadmore)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

/* 图片盒子 */
.items {
  padding-top: 90px;
  padding-left: 0;
  padding-right: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-auto-rows: 170px;
  grid-gap: 2px; // 行列的间距
  grid-auto-flow: row dense; // 即使某项超宽, 改变网页宽度时, 也能满填充

  // perspective: 1000px;

  .item {
    @include flex-row(center, center);
  }

  @include fit-safe-area-bottom;
}

/* 宽大一些的屏幕 */
@media (min-width: 640px) {
  .items {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-auto-rows: 320px;

    /* 子元素的样式 */
    ::v-deep(.image) {
      max-width: 80%;
    }
  }
}
</style>
