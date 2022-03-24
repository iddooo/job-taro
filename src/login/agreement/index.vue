<template>
  <view class="index">
      <view class="xx">用户协议</view>
      <view class="date">更新日期   2021年8月5日</view>
      <view class="date">生效日期   2021年8月5日</view>
      <view class="section">
            <view class="article indent">欢迎您使用“牛犊”平台，为了权益，我们提示您，请在签署本协前，详细阅读并理解本协议的所有内容特别是免除或者限制责任的条款，争议解决和法律适用条款以及开通或使用某项服务的内容，您应重点阅读并理解。如您对本协议有任何疑问，应向平台客服咨询。如果您不能理解或不同意本协议的部分或全部内容，您应立注册。
            </view>
            <view class="headline">第一条 定义</view>
            <view class="article">如您对本协议有任何疑问，应向平台客服咨询。如果您不能理解或不同意本协议的部分或全部内容，您应立注册。</view>
      </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "用户服务协议"
});

export default {
  components: {
  },
  data() {
    return {
        selector: ['不限', 'a', 'b', 'c'],
    };
  },
  methods:{
      change(e){
          console.log('e :>> ', e);
      },
      goProfile(){
            Taro.navigateTo({
                url:'/login/profile/index'
            })
      }
  }
  
};
</script>
