import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/libs/axios.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        firstData:[{
            name:'码云',
            price: 200
        },{
            name:'马化腾',
            price:140
        },{
            name:'马冬梅',
            price:20
        },{
            name:'马青',
            price:75
        }],
        menuActive: sessionStorage.getItem('clickActive1'),         // 菜单选中值
        loginInfo: {},          // 获取登录成功信息
    },
    getters:{   // 获取数据
        gettersFristData: state=>{
            let a = state.firstData.map(data=>{
                return{
                    name: `${data.name}:`,
                    price: `${data.price}`
                }
            })
            return a
        }
    },
    mutations:{ // 改变数据，vuex中唯一修改state的方式，但不支持异步操作 
        mutationsFirstData: (state, num)=>{
            state.firstData.forEach(data=>{
                data.price -= num
            })
        },
        changeMenuAct:(state, act)=>{
            state.menuActive = act;
            console.log('changeMenuAct',state.menuActive,act)
        },
        getLoginInfo:(state, data)=>{
            state.loginInfo = data;
        }
    },
    actions:{   // 和mutations类似。不过actions支持异步操作
        actionsFirstData: (context, num)=>{
            setTimeout(() => {
                context.commit('mutationsFirstData',num)
            }, 2000);
        },
        /**
         *  @function: 获取登录成功信息
         *  @author: lxr
         *  @date: 2018-11-12
         **/
        getLoginInfo:(context, num)=>{
            axios.loadAxios('post','/loginInfo').then(res => {
                console.log('getLoginInfo',res)
                context.commit('getLoginInfo',res.data)
            }).catch(err => console.log(err))
        }
    }
})