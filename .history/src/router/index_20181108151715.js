import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/components/Layout/Index'], resolve);
const AdminHome = resolve => require(['@/components/Admin/Home'], resolve);
const StudentRecord = resolve => require(['@/components/Admin/recordManager/StudentRecord'], resolve);
const TeachRecord = resolve => require(['@/components/Admin/recordManager/TeachRecord'], resolve);
const LoginBg = resolve => require(['@/components/Admin/SystemSet/LoginBg'], resolve);
const InitPwd = resolve => require(['@/components/Admin/SystemSet/InitPwd'], resolve);
const SystemLog = resolve => require(['@/components/Admin/SystemSet/SystemLog'], resolve);
const RoleManager = resolve => require(['@/components/Admin/AuthorManager/RoleManager'], resolve);
const PermissionSet = resolve => require(['@/components/Admin/AuthorManager/PermissionSet'], resolve);

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/Home', //重定向
    children: [{
      path: '/Home',
      name: 'Home',
      component: AdminHome,
    }, {
      path: '/StudentRecord',
      name: 'StudentRecord',
      component: StudentRecord,
    }, {
      path: '/TeachRecord',
      name: 'TeachRecord',
      component: TeachRecord,
    }, {
      path: '/LoginBg',
      name: 'LoginBg',
      component: LoginBg,
    }, {
      path: '/InitPwd',
      name: 'InitPwd',
      component: InitPwd,
    }, {
      path: '/SystemLog',
      name: 'SystemLog',
      component: SystemLog,
    }, {
        path: '/RoleManager',
        name: 'RoleManager',
        component: RoleManager,
      }, {
        path: '/SystemLog',
        name: 'SystemLog',
        component: SystemLog,
      }]
  }]
})
