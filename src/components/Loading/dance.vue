<template>
  <div class="loading-wrapper">
    <div class="loading-dance">
      <div class="loading-dance-line"></div>
      <div class="loading-dance-line"></div>
      <div class="loading-dance-line"></div>
    </div>
  </div>
</template>

<style lang="scss">
.loading-wrapper {
  .loading-dance {
    &-line {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: $image-bg-color1;

      margin-left: 4px;

      &:nth-last-child(1) {
        animation: loadingC 0.6s 0.1s linear infinite;
      }
      &:nth-last-child(2) {
        animation: loadingC 0.6s 0.2s linear infinite;
      }
      &:nth-last-child(3) {
        animation: loadingC 0.6s 0.3s linear infinite;
        margin-left: 0;
      }
    }
  }
}

@keyframes loadingC {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 32px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
