export default {
  pages: [
    "pages/index/index",
    "pages/shopping/index",
    "pages/mine/index",
    "pages/message/index",
  ],
  subPackages: [
    {
      root: "login",
      pages: ["signIn/index", "prefer/index", "profile/index","agreement/index"],
    },
    {
      root: "job",
      pages: ["jobDetail/index", "company/index", "jobProgress/index"],
    },
    {
      root: "mine",
      pages: [
        "account/index",
        "sign/index",
        "alipayAccount/index",
        "myApply/index",
        "collections/index",
        "salaryDetails/index"
      ],
    },
    {
      root: "message",
      pages: ["notice/index","noticeDetail/index"],
    },
    {
      root: "feedback",
      pages: [
          "feedback/index", 
          "complaint/index", 
          "comment/index",
          "myFdbkList/index",
          "commentResult/index"
        ],
    },
    {
      root: "shop",
      pages: [
        "goodsdetail/index",
        "illustrate/index",
        "mycent/index",
        "myextension/index",
        "myorder/index",
        "myscore/index",
      ],
    },
    {
        root: "resume",
        pages: [
          "userInfo/index",
          "education/index",
          "experience/index",
          "description/index",
          "resumeList/index",
          "onlineResume/index",
          "myResume/index",
        ],
      },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#9797BE",
    selectedColor: "#111E38",
    backgroundColor: "#FFFFFF",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "images/tabbar/home.png",
        selectedIconPath: "images/tabbar/home-s.png",
        text: "首页",
      },
      {
        pagePath: "pages/shopping/index",
        iconPath: "images/tabbar/shopping.png",
        selectedIconPath: "images/tabbar/shopping-s.png",
        text: "商城",
      },
      {
        pagePath: "pages/message/index",
        iconPath: "images/tabbar/message.png",
        selectedIconPath: "images/tabbar/message-s.png",
        text: "消息",
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "images/tabbar/mine.png",
        selectedIconPath: "images/tabbar/mine-s.png",
        text: "我的",
      },
    ],
  },
};
