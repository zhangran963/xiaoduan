import { Howl } from 'howler'
import { Vue } from 'vue-class-component'

export class Audio extends Vue {
  sound!: Howl
  mounted() {
    this.sound = new Howl({
      src: [
        'https://ran-1303246897.file.myqcloud.com/www/lyric/audio/yesterday%20once%20more.m4a',
      ],
      loop: true,
      volume: 0.5,
      autoplay: false,
    })
  }

  beforeUnmount() {
    this.pauseAudio()
  }

  public playAudio() {
    this.sound.play()
  }

  public pauseAudio() {
    this.sound.pause()
  }
}
