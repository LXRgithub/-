import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Index = resolve => require(['@/components/Layout/Index'], resolve);
const Home = resolve => require(['@/components/Home/Home'], resolve);
const StudentRecord = resolve => require(['@/components/recordManager/StudentRecord'], resolve);
const TeachRecord = resolve => require(['@/components/recordManager/TeachRecord'], resolve);

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
      redirect: '/ButtonUse',   //重定向pc-第一个组件
    }, {
      path: '/StudentRecord',
      name: 'StudentRecord',
      component: StudentRecord,
    }, {
      path: '/TeachRecord',
      name: 'TeachRecord',
      component: TeachRecord,
    }]
  }]
})
