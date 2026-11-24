import './assets/scss/global.scss'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { routes, vueRouter } from './router'

export const createApp = ViteSSG(App, { routes }, ({ app, router, routes, initialState }) => {
  vueRouter({ router })
})
