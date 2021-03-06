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
    redirect: '/AdminHome',   //重定向
    children: [{
      path: '/Home',
      name: 'AdminHome',
      component: AdminHome,
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
