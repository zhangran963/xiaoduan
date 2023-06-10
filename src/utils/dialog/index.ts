import { createApp } from 'vue'
import DialogWrapper, { store } from './DialogWrapper.vue'

export default {
  install: () => {
    const dialogApp = createApp(DialogWrapper)
    dialogApp.mount('#myContainer')
  },
}

export const useDialog = (Component: any = {}, options = {}) => {
  if (typeof Component !== 'object') {
    Component = {}
  }

  const show = (props = {}, onProps = {}) => {
    if (props && typeof props === 'object') {
      store.props = props
    }
    if (onProps && typeof onProps === 'object') {
      store.onProps = onProps
    }
    store.component = Component
    store.visible = true
  }

  const close = () => {
    store.visible = false
    store.props = {}
    store.onProps = {}
    store.component = null
  }

  return {
    store,
    show,
    close,
  }
}
