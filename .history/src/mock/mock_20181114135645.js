// 引入mockjs
const Mock = require('mockjs');
import {loginInfo, getMenuData, produceNewsData} from './data';
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);
Mock.mock('/loginInfo', 'post', loginInfo);getGradeData
Mock.mock('/getMenuData', 'post', getMenuData);