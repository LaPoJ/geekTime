import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home/index'
import Mine from '@pages/mine/Mine'
import Course from '@pages/course/Course'
import Learn from '@pages/learn/Learn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Home
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    }
  ]
})
