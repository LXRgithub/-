import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/Layout/Index'], resolve);
/* 管理员 */
const AdminHome = resolve => require(['@/views/Admin/Home'], resolve);
const StudentRecord = resolve => require(['@/views/Admin/recordManager/StudentRecord'], resolve);
const TeachRecord = resolve => require(['@/views/Admin/recordManager/TeachRecord'], resolve);
const LoginBg = resolve => require(['@/views/Admin/SystemSet/LoginBg'], resolve);
const InitPwd = resolve => require(['@/views/Admin/SystemSet/InitPwd'], resolve);
const SystemLog = resolve => require(['@/views/Admin/SystemSet/SystemLog'], resolve);
const RoleManager = resolve => require(['@/views/Admin/AuthorManager/RoleManager'], resolve);
const PermissionSet = resolve => require(['@/views/Admin/AuthorManager/PermissionSet'], resolve);

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
        path: '/PermissionSet',
        name: 'PermissionSet',
        component: PermissionSet,
      }]
  }]
})
