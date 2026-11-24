import type { RouteRecordRaw, Router } from 'vue-router'

import HomePage from '@/pages/home/HomePage.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: HomePage }]

interface Param {
  router: Router
}

function vueRouter({ router }: Param) {}

export { routes, vueRouter }
