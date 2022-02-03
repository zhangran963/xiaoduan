import { createStore } from 'vuex'
import { modeMap } from '@/constant'

export default createStore({
  state: {
    mode: modeMap.home,
  },
  getters: {
    isHome(state) {
      return state.mode === modeMap.home
    },
    isVideo(state) {
      return state.mode === modeMap.video
    },
    isAudio(state) {
      return state.mode === modeMap.audio
    },
  },
  mutations: {
    toggleMode(state, val) {
      state.mode = val
    },
  },
  actions: {},
  modules: {},
})
