<template>
  <view class="index">
      <view class="notice" @tap="goNoticeDetail">
          <view class="time flex-ct-ct">8月1日 上午 10:00</view>
          <view class="info">
              <view class="font1">8月5日 系统通知</view>
              <view class="font2">猎头推荐职位</view>
              <view class="font3">一大波企业正在招聘，福利多多，快来看看新的职位是否有你需要的吧～</view>
              <view class="link flex-ct-btw">
                  <view class="font3">点击查看</view>
                  <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
              </view>
          </view>
      </view>
      <view class="notice">
          <view class="time flex-ct-ct">8月2日 上午 10:00</view>
          <view class="info">
              <view class="new">new</view>
              <view class="font1">8月5日 系统通知</view>
              <view class="font2">猎头推荐职位</view>
              <view class="font3">一大波企业正在招聘，福利多多，快来看看新的职位是否有你需要的吧～</view>
          </view>
      </view>

      <view class="notice">
          <view class="time flex-ct-ct">8月2日 上午 10:00</view>
          <view class="info">
              <view class="font1">8月5日 系统通知</view>
              <view class="font2">猎头推荐职位</view>
              <view class="font3">一大波企业正在招聘，福利多多，快来看看新的职位是否有你需要的吧～</view>
              <image class="cover" :src="baseImgUrl + '/index/' "></image>
          </view>
      </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "通知"
});
export default {
  components: {
  },
  data() {
    return {
        baseImgUrl
        
    };
  },
  methods:{
        goNoticeDetail(){
            Taro.navigateTo({
                url: '/message/noticeDetail/index'
            })
        }
  }
  
};
</script>
