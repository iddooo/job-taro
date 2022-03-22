<template>
  <view class="index">
      <view class="tabs">
          <view class="tab-item active">验证码登录</view>
          <view class="tab-item">密码登录</view>  
      </view>

      <view class="form">
          <view class="form-item">
              <view class="form-label">+86</view>
              <view class="form-ipt">
                  <input type="text">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">
                  <image class="form-label-icon" src="https://img.langcms.com/login/lock.png"></image>
              </view>
              <view class="form-ipt">
                  <input type="text">
                  <text class="tips green">获取验证码</text>
                  <!-- <text class="tips disabled">重新发送59秒</text> -->
                  <!-- <text class="tips">忘记密码</text> -->
              </view>
          </view>

          <button class="button btn disabled" @tap="goPrefer">登录</button>
      </view>


      <view class="other">
          <view>其他登录方式</view>
          <image class="wechat-icon" src="https://img.langcms.com/login/wechat.png"></image>
      </view>

      <view class="agreement">
          <view class="circle active"></view>
          <view>登录并同意<text class="underline">牛犊梦用户协议、隐私协议</text>｜ 我不同意</view>
      </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "登录"
});
export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods:{
      goPrefer(){
        Taro.navigateTo({
                url:'/login/prefer/index'
        })
      }
  }
  
};
</script>
