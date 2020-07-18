import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import(/* webpackChunkName: "about" */ '../views/Albums.vue')
  },
  {
    path: '/users/:id',
    name: "User",
    component: () => import('../views/User.vue')
  },
  {
    path: '/posts/:id',
    name: "Post",
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
