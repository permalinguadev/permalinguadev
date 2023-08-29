/* eslint-disable @typescript-eslint/ban-types */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const uiButton: DefineComponent<{}, {}, any>
  export default uiButton
}
