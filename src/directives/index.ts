import type { App } from 'vue'
import { dragDirective } from './drag'
// import { dragRotateDirective } from './drag'

export const createDirectives = (app: App) => {
  app.directive('drag', dragDirective)
}
