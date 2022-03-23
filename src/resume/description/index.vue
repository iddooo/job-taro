<template>
  <view class="index">
      <view class="title">个人优势</view>

      <view class="text-box">
            <textarea class="text" name="" id="" maxlength="500" placeholder-class="plchd" placeholder=""></textarea>
            <text class="count">100/500</text>
      </view>

      <button class="button btn">保存</button>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "自我描述"
});
export default {
  components: {
  },
  data() {
    return {
        selector:['男','女']
    };
  },
  methods:{
      change(e){
          console.log('e :>> ', e);
      },
  }
  
  
};
</script>
