import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Index = resolve => require(['@/components/Layout/Index'], resolve);
const AdminHome = resolve => require(['@/components/Admin/Home'], resolve);
const StudentRecord = resolve => require(['@/components/Admin/recordManager/StudentRecord'], resolve);
const TeachRecord = resolve => require(['@/components/Admin/recordManager/TeachRecord'], resolve);

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/AdminHome',
      name: 'AdminHome',
      component: AdminHome,
      redirect: '/AdminHome',   //重定向第一个页面
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
