import "./app.scss";
import Taro from "@tarojs/taro";

const App = {
  onShow(options) {},
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  },
  onLaunch() {
    let extConfig = Taro.getExtConfigSync
      ? Taro.getExtConfigSync()
      : { brandId: 0, brandName: "", brandLogo: "", appId: "" };
    Taro.setStorageSync("brandInfo", extConfig);
  },
};
export default App;
