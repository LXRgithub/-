// 引入mockjs
const Mock = require('mockjs');
import {loginInfo, getMenuData, getGradeData, getRecordData,
        getRoleData} from './data';
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/loginInfo', 'post', loginInfo);
Mock.mock('/getMenuData', 'post', getMenuData);
Mock.mock('/getGradeData', 'post', getGradeData);
Mock.mock('/getRecordData', 'post', getRecordData);
Mock.mock('/getRoleData', 'get', getRoleData);