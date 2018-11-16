/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
// import store from '../store/index'
// import {Message, Loading} from 'element-ui' // 使用组件中的提示弹窗及loading
import {Spin,Icon} from 'iview'
console.log('Icon',Icon)
// 环境的切换 (mock环境在config/dev.env.js配置)，mock与本地后台联调时要切换配置
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'mock') {    
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http://api.123dailu.com/';
}

// 请求超时时间
// axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(    
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // Loading.service({text:'请等待，正在加载...'});
    /*     Spin.show({
            render: (h) => {
                return h('div', [
                    h('Icon', {
                        'class': 'demo-spin-icon-load',
                        props: {
                            type: 'ios-loading',
                            size: 18
                        }
                    }),
                    h('div', 'Loading')
                ])
            }
        }); */
        Spin.show({
            render: (h) => {
                return h('div', [
                    h('Icon', {
                        'class': 'demo-spin-icon-load',
                        props: {
                            type: 'load-c',
                            size: 30
                        }
                    }),
                    h('div', 'Loading')
                ])
            } });
 	// 设置请求头，根据后台需要设置    
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        // const token = store.state.token;        
        const token = '';        
        token && (config.headers.Authorization = token);   
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    })

// 响应拦截器
axios.interceptors.response.use(    
    response => {  
        // Loading.service().close();     
        setTimeout(() => {
            Spin.hide();
        }, 3000);
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    // 服务器状态码不是200的情况    
    error => {    
        // Loading.service().close();      // 关闭loading   
        setTimeout(() => {
            Spin.hide();
        }, 3000);
        if (error.response) {           
            switch (error.response.status) {                
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。  
                // 登录页点击按钮这样操作：router.push({path:decodeURIComponent(url)});  使用url上保存的query直接跳转回目标页面
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { redirect: router.currentRoute.fullPath } 
                    });
                    break;
                // 403 token过期                
                // 登录过期对用户进行提示                
                // 清除本地token和清空vuex中token对象                
                // 跳转登录页面                
                case 403:                     
                     Message({                        
                        message: '登录过期，请重新登录',                        
                        duration: 1000,                        
                        forbidClick: true                    
                    });                    
                    // 清除token                    
                    localStorage.removeItem('token');                    
                    // store.commit('loginSuccess', null);                    
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 
                // 404请求不存在                
                case 404:                    
                     Message({                        
                        message: '网络请求不存在',                        
                        duration: 1500,                        
                        forbidClick: true                    
                    });    
                break;                
                // 其他错误，直接抛出错误提示                
                default:                    
                    Message({                        
                        message: error.response.data.message,                        
                        duration: 1500,                        
                        forbidClick: true                    
                    });        
            }                  
        }     
        console.log('拦截响应错误：',error)  
        return Promise.reject(error);  
    }
);

/** 
 * 请求方法，对应get、post、put、delete请求 
 * @param {String} type [请求的类型] 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const AllAxios = (type, url, params) =>{     
    return new Promise((resolve, reject) => {         
        axios({
            method: type,
            url: url,
            data: type == 'get' ? QS.stringify(...params) : params,
        }).then(response => {
            resolve(response.data);
          }).catch(error => {
            // reject(error);   // 放开此方法在页面调用时必须写error方法体
            console.log('AllAxios-error',error)
        });  
    });
}

export default {
    loadAxios(type, url, params) {
      return AllAxios(type, url, params);
    }
  }