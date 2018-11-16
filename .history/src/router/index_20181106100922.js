import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Index = resolve => require(['@/components/Layout/Index'], resolve);
// const gameitem = resolve => require(['@/page/gameItem'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
