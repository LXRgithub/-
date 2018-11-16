import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 菜单数据
export const getMenuData = req =>{
    let data = {};
    let menuData = [
        {
          title: "首页",
          value: 1,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          routeUrl: '/Home'
        },
        {
          title: "档案管理",
          value: 2,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "学生档案",
              value: 21,
              id: 2,
              routeUrl: '/StudentRecord'
            },
            {
              title: "教职工档案",
              value: 22,
              id: 2,
              routeUrl: '/TeachRecord'
            },
          ]
        },
        {
          title: "系统设置",
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          value: 3,
          isSubShow: false,
          submenus: [
            {
              title: "登录背景",
              value: 31,
              id: 3,
              routeUrl: '/LoginBg'
            },
            {
              title: "初始密码",
              value: 32,
              id: 3,
              routeUrl: '/InitPwd'
            },
            {
              title: "系统日志",
              value: 33,
              id: 3,
              routeUrl: '/TeachRecord'
            },
          ]
        },
        {
          title: "授权管理",
          value: 4,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "角色管理",
              value: 41,
              id: 4
            },
            {
              title: "权限设置",
              value: 42,
              id: 4
            }
          ]
        },
        {
          title: "班牌信息管理",
          value: 5,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "图片库",
              value: 51,
            },
            {
              title: "视频库",
              value: 52,
            },
            {
              title: "发布通知",
              value: 53,
            }
          ]
        },
        {
          title: "时间管理",
          value: 6,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "校历设置",
              value: 61,
            },
            {
              title: "作息时间",
              value: 62,
            },
            {
              title: "签到规则设置",
              value: 63,
            }
          ]
        },
        {
          title: "课表查询",
          value: 7,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "学生课表",
              value: 71,
            },
            {
              title: "教师课表",
              value: 72,
            },
            {
              title: "教室课表",
              value: 73,
            },
            {
              title: "课表调整",
              value: 74,
            }
          ]
        },
        {
          title: "设备和空间管理",
          value: 8,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "教室管理",
              value: 81,
            },
            {
              title: "设备管理",
              value: 82,
            },
            {
              title: "日志查询",
              value: 83,
            }
          ]}
      ];
      data.menuData = menuData;
      data.code = 0;
      data.msg = '成功';
    return data;
}

// mock数据
export const getDragList = req =>{
    let dragList = [];
    for(let i = 0; i < 10; i++){
        dragList.push(Mock.mock({
            name: Random.csentence(10, 13),
            id: Random.increment(10)
        }))
    }
    return dragList;
}

export const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}