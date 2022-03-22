<template>
  <view class="index">
      <view class="skip font-des" @tap="goProfile">跳过</view>
      <view class="title">添加求职期望</view>
      <view class="font-des">求职期望不同，推荐的职位也会不同</view>
      <view class="tips">商家登录，可在“我的”中更换角色</view>

      <view class="type flex-ct-btw">
          <view class="font-sub">求职类型</view>
            <view class="type-item">
                <view class="type-item-content">找工作</view>
                <view class="type-item-content active">找兼职</view>
            </view>
      </view>

      <view class="type">
          <view class="font-des">工作城市</view>
          <view class="flex-ct-btw">
               <picker mode="region" @change="change" :value="[]">
                  <view class="font-sub">北京（默认当前地区）</view>
                </picker>
              <image class="arrow-icon" src=""></image>
          </view>
      </view>

      <view class="type">
          <view class="font-des">期望职位</view>
          <view class="flex-ct-btw">
              <picker mode="selector" :range="selector" @change="change">
                  <view class="font-sub">请选择</view>
                </picker>
              <image class="arrow-icon" src=""></image>
          </view>
      </view>

      <view class="type">
          <view class="font-des">期望行业</view>
          <view class="flex-ct-btw">
              <picker mode="selector" :range="selector" @change="change">
                  <view class="font-sub">不限</view>
                </picker>
              <image class="arrow-icon" src=""></image>
          </view>
      </view>

      <view class="type">
          <view class="font-des">薪资要求</view>
          <view class="flex-ct-btw">
              <picker mode="selector" :range="selector" @change="change">
                  <view class="font-sub">请选择薪资要求</view>
                </picker>
          </view>
      </view>


      <view class="button btn" @tap="goProfile">下一步</view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "求职期望"
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
