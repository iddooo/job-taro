export default {
  pages: [
    'pages/index/index',
    'pages/shopping/index',
    'pages/message/index',
    'pages/mine/index',
    'pages/jobDetail/index',
    'pages/company/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color: "#9797BE",
    selectedColor: "#111E38",
    backgroundColor: "#FFFFFF",
    borderStyle:'white',
    list:[
        {
            pagePath: "pages/index/index",
            iconPath: "images/tabbar/index.png",
            selectedIconPath: "images/tabbar/index-s.png",
            text: "首页"
        },
        {
            pagePath: "pages/shopping/index",
            iconPath: "images/tabbar/shopping.png",
            selectedIconPath: "images/tabbar/shopping-s.png",
            text: "商城"
        },
        {
            pagePath: "pages/message/index",
            iconPath: "images/tabbar/message.png",
            selectedIconPath: "images/tabbar/message-s.png",
            text: "消息"
        },
        {
            pagePath: "pages/mine/index",
            iconPath: "images/tabbar/mine.png",
            selectedIconPath: "images/tabbar/mine-s.png",
            text: "我的"
        }
    ]
  }
}
