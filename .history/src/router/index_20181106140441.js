import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Index = resolve => require(['@/components/Layout/Index'], resolve);
const Home = resolve => require(['@/components/Home/Home'], resolve);
const Home = resolve => require(['@/components/recordManager/StudentRecord'], resolve);

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/Home',
      name: 'Home',
      component: Home,
    }]
  }]
})
