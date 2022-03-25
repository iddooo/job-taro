<template>
  <view class="index">
    <tabview color="green" :tabCode="tabCode" :tabList="tabList" @changeTabCode="changeTabCode" />


    <!-- JobCard start-->
    <view class="job-box">
        <view class="job-card" @tap="goJobProgress">
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
                    <image class="c-icon" src="https://img.langcms.com/index/"></image>
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
                    <image class="c-icon" src="https://img.langcms.com/index/"></image>
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
                    <image class="c-icon" src="https://img.langcms.com/index/"></image>
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
import tabview from '../../components/tabview'

definePageConfig({
  navigationBarTitleText: '我的投递'
})

export default {
    components: {
        tabview
  },
  data () {
    return {
        tabCode: 0,
        tabList: [
            { code: 0, name: '全部' },
            { code: 1, name: '已报名' },
            { code: 2, name: '待支付' },
            { code: 3, name: '已完成' }
        ]
    }
  },
  methods: {
    goAlipayAccount(){
        Taro.navigateTo({
            url: '/mine/alipayAccount/index'
        })
    },
    goJobProgress(){
        Taro.navigateTo({
            url: '/job/jobProgress/index'
        })
    },
    changeTabCode(code) {
      this.tabCode = code
    }
  },
}
</script>
