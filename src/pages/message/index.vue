<template>
<view class="index">
    <view class="notice flex-ct-ct" @tap="goNotice">
      <image class="notice-icon" :src="baseImgUrl + '/message/xttz@1x.png' "></image>
      <view class="n-txt">系统通知</view>
      <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
    </view>

    <view class="msg-list">
        <view class="msg-box">
            <view class="avater">
                <image class="notice-icon" :src="baseImgUrl + '/resume/avater@1x.png' "></image>
                <view class="badge flex-ct-ct">1</view>
            </view>
            <view class="des">
                <view class="flex-ct-btw">
                    <view class="flex-ct mb12">
                        <view class="font1">李先生</view>
                        <view class="font2">教育学院</view>
                    </view>
                    <view class="font3">10:25</view>
                </view>
                <view class="font4">兼职书法老师</view>
                <view class="font5">加我电话详细聊18844567899</view>
            </view>
        </view>
        <view class="msg-box">
            <view class="avater">
                <image class="notice-icon" :src="baseImgUrl + '/resume/avater@1x.png' "></image>
                <view class="badge flex-ct-ct">1</view>
            </view>
            <view class="des">
                <view class="flex-ct-btw">
                    <view class="flex-ct mb12">
                        <view class="font1">李先生</view>
                        <view class="font2">教育学院</view>
                    </view>
                    <view class="font3">10:25</view>
                </view>
                <view class="font4">兼职书法老师</view>
                <view class="font5">加我电话详细聊18844567899</view>
            </view>
        </view>
        
        <view class="tips flex-ct-ct">
            <view>没有更多沟通商家了</view>
        </view>

        <!-- <view class="no-msg flex-ct-ct">
            <image :src="baseImgUrl + '/message/Empty Inbox _Two Color@1x.png' "></image>
            <view class="tips">没有更多消息</view>
        </view> -->
    </view>
  </view>
  
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "消息"
});
export default {
  components: {
  },
  data() {
    return {
        baseImgUrl
    };
  },
  methods: {
    goNotice(){
        Taro.navigateTo({
            url: "/message/notice/index"
        })
    }
  }
};
</script>
