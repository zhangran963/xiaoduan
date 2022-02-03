<template>
  <div class="poster" :style="{ transform: `rotate(${deg}deg)` }"></div>
</template>

<script lang="ts">
import { Audio } from './audio'
export default class Poster extends Audio {
  deg = 0
  timer = 0
  isAnimate = false

  /**
   * start
   */
  public start() {
    this.timer = setInterval(() => {
      this.deg += 1
    }, 90)
    this.playAudio()
    this.isAnimate = true
  }

  /**
   * stop
   */
  public stop() {
    clearInterval(this.timer)
    this.pauseAudio()
    this.isAnimate = false
  }
}
</script>

<style lang="scss" scoped>
.poster {
  opacity: 1;

  background-color: lightpink;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  // background-color: darkblue;
  background-image: url('https://ran-1303246897.file.myqcloud.com/www/lyric/audio/Yesterday%20Once%20More.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  transition: transform 90ms;
}
</style>
