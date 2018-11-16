// 引入mockjs
const Mock = require('mockjs');
import {loginInfo, getMenuData, getGradeData} from './data';
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/loginInfo', 'post', loginInfo);
Mock.mock('/getMenuData', 'post', getMenuData);getStudentRecordData
Mock.mock('/getGradeData', 'post', getGradeData);