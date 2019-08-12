import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home/index'
import Mine from '@pages/mine/Mine'
import Learn from '@pages/learn/Learn.vue'
import Lesson from '@components/lesson/Lesson.vue'
import Intro from '@components/intro/ColumnIntro.vue'

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
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    }
  ]
})
