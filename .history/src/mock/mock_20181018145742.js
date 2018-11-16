// 引入mockjs
const Mock = require('mockjs');
import {getDragList, produceNewsData} from './data';
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);
Mock.mock('/news/getDrag', 'get', getDragList);