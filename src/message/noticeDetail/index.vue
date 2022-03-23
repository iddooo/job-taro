<template>
  <view class="info">
        <view class="font2">猎头推荐职位</view>
        <view class="font1">8月5日 系统通知</view>
        <view class="font3">一大波企业正在招聘，福利多多，快来看看新的职位是否有你需要的吧～</view>
        <image class="cover" src="https://img.langcms.com/index/"></image>
    </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "通知"
});
export default {
  components: {
  },
  data() {
    return {
    };
  },
  
};
</script>
