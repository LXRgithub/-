import Vue from 'vue'
import Vuex from 'vuex'

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
        menuActive: '',         // 菜单选中值
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
            console.log('changeMenuAct',state.menuActive,act)
        }
    },
    actions:{   // 和mutations类似。不过actions支持异步操作
        actionsFirstData: (context, num)=>{
            setTimeout(() => {
                context.commit('mutationsFirstData',num)
            }, 2000);
        }
    }
})