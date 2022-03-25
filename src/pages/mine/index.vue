<template>
  <view class="index">
    <view class="head">
        <view class="user-info flex-ct-btw">
            <view class="avater">
                <image :src="baseImgUrl + '/resume/avater@1x.png' "></image>
            </view>
            <view class="user-name" @tap="navigateTo('/login/signIn/index')">登录开启赚钱旅程</view>
            <view class="sign" @tap="navigateTo('/login/sign/index')">
                <view class="link flex-ct-ct"><image :src="baseImgUrl + '/mine/jb@2x.png' "></image>来签到</view>
                <image :src="baseImgUrl + '/mine/Coins_Two Color@1x.png' "></image>
            </view>
        </view>
        
        <view class="count flex-ct-btw">
            <view class="c-item" @tap="navigateTo('/mine/account/index')">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>账户余额</view>
                  <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
                </view>
            </view>
            <view class="line"></view>
            <view class="c-item" @tap="navigateTo('/mine/coin/index')">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>平台币提现</view>
                  <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
                </view>
            </view>
            <view class="line"></view>
            <view class="c-item" @tap="swichTab('/pages/shopping/index')">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>立即兑换</view>
                  <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
                </view>
            </view>
        </view>
    </view>

    <view class="profile" @tap="navigateTo('/resume/userInfo/index')">
        <image :src="baseImgUrl + '/mine/wsjl@1x.png' "></image>
        <view class="percent flex-ct">完善度 <view class="green">72%</view>,完善简历可提高录取率~</view>
        <view class="resume-btn flex-ct-ct">去完善</view>
    </view>

    <view class="my-apply flex-ct"  @tap="navigateTo('/mine/myApply/index')">
        <view class="apply-status">
            <view class="count">0</view>
            <view class="status">全部</view>
        </view>
        <view class="apply-status">
            <view class="count">0</view>
            <view class="status">已报名</view>
        </view>
        <view class="apply-status">
            <view class="count">0</view>
            <view class="status">已录取</view>
        </view>
        <view class="apply-status">
            <view class="count">0</view>
            <view class="status">已结束</view>
        </view>
    </view>

    <view class="menu">
        <view class="menu-item flex-ct-btw" @tap="navigateTo('/mine/collections/index')">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image :src="baseImgUrl + '/mine/shoucang.png' "></image>
                </view>
                <view class="menu-name">我的收藏</view>
            </view>
            <view class="flex-ct-end">
                <view class="count">0</view>
                <image class="menu-arrow" :src="baseImgUrl + '/mine/Rectangle @1x.png' "></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw" >
            <view class="flex-ct">
                <view class="menu-icon">
                    <image :src="baseImgUrl + '/mine/zhaopingangwei.png' "></image>
                </view>
                <view class="menu-name">我要招聘</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" :src="baseImgUrl + '/mine/Rectangle @1x.png' "></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw" @tap="navigateTo('/mine/serviceCenter/index')">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image :src="baseImgUrl + '/mine/fuwu.png' "></image>
                </view>
                <view class="menu-name">服务中心</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" :src="baseImgUrl + '/mine/Rectangle @1x.png' "></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw" @tap="navigateTo('/login/setting/index')">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image :src="baseImgUrl + '/mine/shezhi.png' "></image>
                </view>
                <view class="menu-name">用户设置</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" :src="baseImgUrl + '/mine/Rectangle @1x.png' "></image>
            </view>
        </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

import './index.scss' 

definePageConfig({
  navigationBarTitleText: '我的'
})

export default {
    components: {
  },
  data () {
    return {
        baseImgUrl
    }
  },
  methods: {
      navigateTo(url) {
        Taro.navigateTo({
            url: url
        })
      },
      swichTab(url){
          Taro.switchTab({
              url
          })
      }
  },
    }
</script>
