import type { App } from 'vue'
import UIButton from './UIButton.vue'

export default function install(app: App) {
  app.component('UIButton', UIButton)
}

export { UIButton, install }
