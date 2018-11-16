import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 登录返回
export const loginInfo = req =>{
    let data = {};
    data.code = 0;
    data.data = {
        
    };
    data.msg = '成功';
    return data;
}

// 菜单数据
export const getMenuData = req =>{
    let data = {};
    let menuData = [
        {
          title: "首页",
          value: 1,
          isSubShow: false,
          icon: require('../assets/images/menu1_n.png'),
          iconActive: require('../assets/images/menu1_s.png'),
          routeUrl: '/Home'
        },
        {
          title: "档案管理",
          value: 2,
          isSubShow: false,
          icon: require('../assets/images/menu2_n.png'),
          iconActive: require('../assets/images/menu2_s.png'),
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
          icon: require('../assets/images/menu3_n.png'),
          iconActive: require('../assets/images/menu3_s.png'),
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
              routeUrl: '/SystemLog'
            },
          ]
        },
        {
          title: "授权管理",
          value: 4,
          isSubShow: false,
          icon: require('../assets/images/menu4_n.png'),
          iconActive: require('../assets/images/menu4_s.png'),
          routeUrl: '/RoleManager'
          /* submenus: [
            {
              title: "角色管理",
              value: 41,
              id: 4,
              routeUrl: '/RoleManager'
            },
            {
              title: "权限设置",
              value: 42,
              id: 4,
              routeUrl: '/PermissionSet'
            }
          ] */
        },
        {
          title: "班牌信息管理",
          value: 5,
          isSubShow: false,
          icon: require('../assets/images/menu5_n.png'),
          iconActive: require('../assets/images/menu5_s.png'),
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
          icon: require('../assets/images/menu6_n.png'),
          iconActive: require('../assets/images/menu6_s.png'),
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
          icon: require('../assets/images/menu7_n.png'),
          iconActive: require('../assets/images/menu7_s.png'),
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
          icon: require('../assets/images/menu8_n.png'),
          iconActive: require('../assets/images/menu8_s.png'),
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

// 年级、学院、专业、班级数据
export const getGradeData = req =>{
    let data = {};
    data.code = 0;
    data.msg = '成功';
    let gradeList = [];
    for(let i = 0; i < 10; i++){
        gradeList.push(Mock.mock({
            name: Random.csentence(10, 13),
            id: Random.increment(10)
        }))
    }
    data.data = gradeList;
    return data;
}

// 学生、教职工档案数据
export const getRecordData = req =>{
    let data = {};
    data.code = 0;
    let list = [];
    for(let i = 0; i < 500; i++){
        list.push(Mock.mock({
            name: Random.cname(),
            no: Random.natural(10000),
            grade: Random.csentence(5, 10),
            collage: Random.csentence(5, 10),
            sex: Random.integer(0, 1),
            tel: /^1[0-9]{10}$/ , 
        }))
    }
    data.data = list;
    data.msg = '成功';
    return data;
}

// 角色数据
export const getRoleData = req =>{
    let data = {};
    data.code = 0;
    let list = [];
    for(let i = 0; i < 10; i++){
        list.push(Mock.mock({
            name: Random.csentence(2, 5),
            id: Random.increment(1),
            state: false,
            only: true
        }))
    }
    data.data = list;
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