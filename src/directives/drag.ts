import { reactive } from 'vue'
const touchstartThrottle = touchstart
const touchmoveThrottle = touchmove
const touchendThrottle = touchend

const offsets = reactive({
  ox: 0,
  oy: 0,
})

export const dragDirective = {
  mounted(el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    const { x, y, height, width } = rect

    const centerX = x + width / 2
    const centerY = y + height

    el.addEventListener('touchstart', touchstart)
    el.addEventListener('touchmove', touchmove)
    el.addEventListener('touchend', touchendThrottle)
  },
}

let tempTouch: Touch
function touchstart(e: TouchEvent) {
  const touch = e.touches[0]
  tempTouch = touch
  console.log('touchstart', decodeTouch(touch))
}

function touchmove(e: TouchEvent) {
  const el = e.target as HTMLElement
  const touch = e.touches[0]

  const relX = touch.clientX - tempTouch.clientX
  const relY = touch.clientY - tempTouch.clientY

  offsets.ox += relX
  offsets.oy += relY

  console.log('touchmove', decodeTouch(touch))

  el.style.left = `${offsets.ox}px`
  el.style.top = `${offsets.oy}px`

  tempTouch = touch
}

function touchend(e: TouchEvent) {
  const el = e.target as HTMLElement

  // el.style.left = `${tempTouch.clientX}px`
  // el.style.top = `${tempTouch.clientY}px`

  console.log('touchend', e.touches)
}

function decodeTouch(touch: Touch) {
  const { clientX, clientY } = touch
  return { clientX, clientY }
}
