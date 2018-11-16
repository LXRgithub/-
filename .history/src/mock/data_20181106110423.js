import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 菜单数据
export const getMenuData = req =>{
    let dragList = [
        {
          title: "首页",
          value: 1,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png')
        },
        {
          title: "档案管理",
          value: 2,
          isSubShow: false,
          icon: require('../../assets/images/report_d03.png'),
          iconActive: require('../../assets/images/report_s03.png'),
          submenus: [
            {
              title: "学生档案",
              value: 21,
              id: 2
            },
            {
              title: "教职工档案",
              value: 22,
              id: 2
            },
          ]
        },
        {
          title: "系统设置",
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png')
          value: 3,
          isSubShow: false,
          submenus: [
            {
              title: "登录背景",
              value: 31,
              id: 3
            },
            {
              title: "初始密码",
              value: 32,
              id: 3
            },
            {
              title: "系统日志",
              value: 33,
              id: 3
            },
          ]
        },
        {
          title: "授权管理",
          value: 4,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png')
        },
        {
          title: "信息发布",
          value: 5,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "图片库",
              value: 51,
              id: 3
            },
            {
              title: "视频库",
              value: 52,
              id: 3
            },
          ]
        }
      ];
    return dragList;
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