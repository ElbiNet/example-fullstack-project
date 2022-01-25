import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
  },
  { path: '/:path(.*)', component: NotFound },
]
