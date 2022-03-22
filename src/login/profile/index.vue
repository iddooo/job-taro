<template>
  <view class="index">
      <view class="head">
          <view class="avater">
              <image src="https://img.langcms.com/index/"></image>
          </view>
          <view class="green">更换头像</view>
      </view>

      <view class="tips flex-ct-btw">
          <view>基本信息（必填）</view>
          <view class="tips-outer">输入真实姓名能提高录取率</view>
      </view>

      <view class="form">
          <view class="form-item">
              <view class="form-label">姓名</view>
              <view class="form-ipt">
                  <input type="text" placeholder="张三">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">性别</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker">性别</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">生日</view>
              <view class="form-ipt">
                    <picker mode="date"  @change="change" value="1991-04-04">
                        <view class="picker">1991-04-04</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">职业</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker">学生党/上班族/待就业</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">电话</view>
              <view class="form-ipt">
                  <input type="text" placeholder="199****5566">
              </view>
          </view>
      </view>

      <view class="tips flex-ct-btw">
          <view>基本信息（必填）</view>
      </view>

      <view class="form">
          <view class="form-item">
              <view class="form-label">微信</view>
              <view class="form-ipt">
                  <input type="text" placeholder="请输入你的微信">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">QQ</view>
              <view class="form-ipt">
                  <input type="text" placeholder="请输入你的QQ">
              </view>
          </view>
      </view>

      <button class="button btn">保存</button>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "基本信息"
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
