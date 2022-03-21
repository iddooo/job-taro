<template>
  <view class="index">
      <view class="tabs flex-ct-btw">
          <view class="tab-item active">全部</view>
          <view class="tab-item">已报名</view>
          <view class="tab-item">待支付</view>
          <view class="tab-item">已完成</view>
      </view>

          <!-- JobCard start-->
    <view class="job-box">
        <view class="job-card">
            <view class="flex-ct-btw">
                <view class="flex-ct title">
                    <view class="status">待录取</view>
                    <view>护肤品一套</view>
                </view>
                <view class="flex-btm red">
                    <view class="price">30元</view>
                    <view class="unit">/单</view>
                </view>
            </view>
            <view class="distance flex-ct">
                <view>完成订单: 微信账户  | 2021-07-26 11:01:27</view>
            </view>
            <view class="company flex-ct-btw">
                <view class="flex-ct">
                    <image class="c-icon" src=""></image>
                    <view>北京有限公司</view>
                </view>
                <view class="r-btn">联系商家</view>
            </view>
        </view>

        <view class="job-card">
            <view class="flex-ct-btw">
                <view class="flex-ct title">
                    <view class="status">待支付</view>
                    <view>护肤品一套</view>
                </view>
                <view class="flex-btm red">
                    <view class="price">30元</view>
                    <view class="unit">/单</view>
                </view>
            </view>
            <view class="distance flex-ct">
                <view>完成订单: 微信账户  | 2021-07-26 11:01:27</view>
            </view>
            <view class="company flex-ct-btw">
                <view class="flex-ct">
                    <image class="c-icon" src=""></image>
                    <view>北京有限公司</view>
                </view>
                <view class="r-btn">联系商家</view>
            </view>
        </view>

        <view class="job-card finish">
            <view class="flex-ct-btw">
                <view class="flex-ct title">
                    <view class="status">已完成</view>
                    <view>护肤品一套</view>
                </view>
                <view class="flex-btm">
                    <view class="price">+30元</view>
                    <view class="unit"></view>
                </view>
            </view>
            <view class="distance flex-ct">
                <view>完成订单: 微信账户  | 2021-07-26 11:01:27</view>
            </view>
            <view class="company flex-ct-btw">
                <view class="flex-ct">
                    <image class="c-icon" src=""></image>
                    <view>北京有限公司</view>
                </view>
                <view class="r-btn">联系商家</view>
            </view>
        </view>
        
    </view>
    <!-- JobCard end-->

  </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '我的投递'
})

export default {
    components: {
  },
  data () {
    return {
    }
  },
  methods: {
    goAlipayAccount(){
        Taro.navigateTo({
            url: '/pages/alipayAccount/index'
        })
    }
  },
    }
</script>
