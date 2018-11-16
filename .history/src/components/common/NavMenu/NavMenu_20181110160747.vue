<template>
    <div class="navmenu-container">
        <div class="navbar" :class="{mgRnull: index === data.length - 1}"
             :style="blockStyle" v-for="(item,index) in data" :key="index"
             :mgSpan="index == data.length-1">
            <div class="nav-div" @click="item.disable == true? '':navClick(index,item)"
                 @mouseover="mouseoverMenu(index,item)" @mouseout="mouseoutMenu(index,item)"
                 :class="{actives:(active == (item.routeUrl||index)), overact: over == (item.routeUrl||index),
                 menuStyle,disableClass: item.disable == true}">
                <!-- 左侧菜单图标 -->
                <span class="icon-div">
                    <img :src="(active == (item.routeUrl||index) || over == (item.routeUrl||index)) ? (item.iconActive? item.iconActive:item.icon) : item.icon"
                     class="icon" v-if="item.icon" name="caret">
                </span>
                <!-- 中间菜单文本 -->
                <dd class="dtdd" :style="dtPLeft" v-show="expand"><span>{{item.title}}</span></dd>
                <!-- 右侧箭头图标 -->
                <img class="arrow" v-show="expand && data[index].submenus != undefined"
                :src="item.isSubShow && item.submenus ? arrowS: (over == index? arrowNH: (active != (item.routeUrl||index)?arrowN:arrowNH))" 
                    > <!-- :class="{'arrow-animate': item.isSubShow && item.submenus ? arrowNH: (over == index? arrowNH: arrowN)}" -->
            </div>
            <!-- 二级菜单 -->
            <div class="sub-menu" v-show="data[index].isSubShow">
                <div class="scorll-div" v-for="(sub,subindex) in data[index].submenus" :key="subindex"
                     :class="{actives2: sub.routeUrl === active2}"
                     @click="twoClick(subindex,sub,$event,index)" v-show="expand">
                    <dd class="dtdd">{{sub.title}}</dd>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

	export default {
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			},
			actives: {// 设置选中样式
				type: String,
				default() {
					return ''
				}
			},
			blocks: {//‘block’是块级元素，其他都是行内元素
				type: String,
				default() {
					return 'block'
				}
			},
			dtPLeft: {//dt 设置块级元素的paddingLeft值
				type: String,
				default() {
					return 'padding-left: 0;'
				}
			},
			colorDd: {//dd 设置按钮的文本颜色//////不能要，不然选中的样式加不上
				type: String,
				default() {
					return ''
				}
			},
			menuStyle: {//设置整个按钮的样式
				type: String,
				default() {
					return ''
				}
			},
			mgSpan: {//有magin间距的导航，设置为数字，没有单位（默认是以%计算）
				type: String,
				default() {
					return '0'
				}
			},
			arrowShow: {//是否右侧箭头图标
				type: Boolean,
				default() {
					return true
				}
			},
			expand: {   //是否显示按钮文字和右侧图标180403添加
				type: Boolean,
				default: true
			},
			clickActive1: {   //一级导航点击赋值180720添加
				type: [String, Number],
				default: sessionStorage.getItem('act1') ? sessionStorage.getItem('') : 0
			},
			clickActive2: {   //一级导航点击赋值180720添加
				type: [String, Number],
				default: ''
            },
            arrowN:{        // 右侧箭头(默认)181102添加
                type: String,
				default: require('./icons/arrowN.png')
            },
            arrowS:{        // 右侧箭头(选中)181102添加
                type: String,
				default: require('./icons/arrowS.png')
            },
            arrowNH:{        // 右侧箭头(移入高亮)181102添加
                type: String,
				default: require('./icons/arrowNH.png')
            }
		},
		data() {
			return {
				active: this.clickActive1,
				over: this.active,
				subShow: false,
                active2: this.clickActive2,
                menuData: this.data
			}
		},
		computed: {
			navbarWidth() {
				return (100 - ((this.data.length - 1) * this.mgSpan)) / this.data.length + '%'
			},
			navbarStyle() {
				return [{
					'width': this.navbarWidth,
					'display': 'inline-block',
					'margin-right': this.mgSpan + '%'
				}]
			},
			ifBlock() {
				let b = [{'display': 'block', 'text-align': 'left'}]
				return this.blocks == 'block' ? b : this.navbarStyle
            },
            blockStyle(){
                return [{'display': 'block', 'text-align': 'left'}]
            }
        },
        watch:{
        },
		methods: {
			mouseoverMenu(index, item) {
				// this.over = index;
				this.over = item.routeUrl? item.routeUrl: index;
			},
			mouseoutMenu(index, item) {
				this.over = -1;
			},
			navClick(index, item) {
				//点击打开菜单
				this.active = item.routeUrl? item.routeUrl: index;
				// this.active2 = -1;
                this.$emit('click', index, item)
                // sessionStorage.setItem('act1',index)
				if (!item.isSubShow) {
					//点击一个让所有的菜单都关闭
					this.data.forEach(element => {
						element.isSubShow = false;
					});
					//当前的显示
					item.isSubShow = true;
					// console.log('当前打开')
				} else {
					//点击一个让所有的菜单都关闭
					this.data.forEach(element => {
						element.isSubShow = false;
					});
					//当前的关闭
					item.isSubShow = false;
					// console.log('当前关闭')
                }
                // 点击有二级的菜单自动跳到二级第一个菜单
                /* if(item.submenus && item.submenus.length > 0){
                    this.twoClick(0, item.submenus[0])
                } */
			},
			twoClick(sindex, item, event, fidx) {
                // this.active2 = sindex
                this.active2 = item.routeUrl
				// this.active = -1;
				this.$emit('click', sindex, item,fidx);
				item.isSubShow = true;
            },
            overArrow(aThis){
                console.log('aThis',aThis.target)
                this.arrowN = this.arrowNH
            }
		},
		mounted() {
		},
		created() {
            //让所有的菜单都关闭
            setTimeout(() => {
                this.data.forEach((element,index) => {
                    if(index == this.active){
                        element.isSubShow = true;
                    }
                });
            }, 200);
		}
	}

</script>

<style scoped type="text/scss" lang="scss">
    .navmenu-container {
        font-size: 14px;

        .navbar {
            line-height: 50px;
            position: relative;
            .nav-div {
                width: 100%;
                min-height: 50px;
                position: relative;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                clear: both;
                text-align: left;
                .imgActive {
                    transform: rotate(0deg);
                }
            }

            .actives {
                background: #2a2c44;
                color: #9A9FA6;
            }
            .overact{
                color: #fff;
            }
            &:nth-child(1) {
                .actives{
                    color: #fff;
                }
                .dtdd span{
                    display: inline-block;
                    width: 60px;
                    text-align:justify;
                    text-justify:distribute-all-lines;/*ie6-8*/
                    text-align-last:justify;/* ie9*/
                    -moz-text-align-last:justify;/*ff*/
                    -webkit-text-align-last:justify;/*chrome 20+*/
                }             
            }
            .disableClass {
                cursor: not-allowed;
            }
            .disableClass:hover {
                background: transparent;
            }
            .icon-div{
                width: 30px;
                margin-left: 22px;
                .icon {
                    transition: transform .3s;
                    vertical-align: middle;
                    display: inline-block;
                }
            }
            .icon-div, .dtdd {
                float: left;
            }
            .dtdd { //dd,dt
                height: 50px;
                line-height: 50px;
            }
            .arrow {
                position: absolute;
                right: 10%;
                margin: auto;
                top: 0;
                bottom: 0;
                z-index: 10;
            }
            dt {
                text-align: center;

                img {
                    vertical-align: middle;
                }
            }

            .sub-menu { //二级导航
                width: 100%;
                background: #2a2c44;
                .scorll-div {
                    position: relative;
                    min-height: 50px;
                    cursor: pointer;

                    &:hover {
                    color: #fff;
                    }

                    dd {
                        display: block;
                        padding-left: 52px;
                    }
                }
                .actives2{
                    color: #fff;
                    background: -webkit-linear-gradient(left, #215BA0 10%, #283757 60%); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(right, #215BA0 10%, #283757 60%); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(right, #215BA0 10%, #283757 60%); /* Firefox 3.6 - 15 */
                    background: linear-gradient(to right, #215BA0 10%, #283757 60%); /* 标准的语法（必须放在最后） */
                }
            }
        }
        dd{
            margin: 0;
        }
        .mgRnull {
            margin-right: 0 !important;
        }
    }
</style>
