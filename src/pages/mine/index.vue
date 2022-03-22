<template>
  <view class="index">
    <view class="head">
        <view class="user-info flex-ct-btw">
            <view class="avater">
                <image src=""></image>
            </view>
            <view class="user-name" @tap="goLogin">登录开启赚钱旅程</view>
            <view class="sign" @tap="goSign">
                <image src=""></image>
            </view>
        </view>
        
        <view class="count flex-ct-btw" @tap="goAccount">
            <view class="c-item">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>账户余额</view>
                  <image class="arrow-icon" src=""></image>
                </view>
            </view>
            <view class="line"></view>
            <view class="c-item">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>平台币提现</view>
                  <image class="arrow-icon" src=""></image>
                </view>
            </view>
            <view class="line"></view>
            <view class="c-item">
                <view class="score">0.00 元</view>
                <view class="name flex-ct">
                    <view>立即兑换</view>
                  <image class="arrow-icon" src=""></image>
                </view>
            </view>
        </view>
    </view>

    <view class="profile">
        <image src=""></image>
        <view class="percent flex-ct">完善度 <view class="green">72%</view>,完善简历可提高录取率~</view>
    </view>

    <view class="my-apply flex-ct"  @tap="goMyApply">
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
        <view class="menu-item flex-ct-btw" @tap="goCollections">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image src=""></image>
                </view>
                <view class="menu-name">我的收藏</view>
            </view>
            <view class="flex-ct-end">
                <view class="count">0</view>
                <image class="menu-arrow" src=""></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image src=""></image>
                </view>
                <view class="menu-name">我要招聘</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src=""></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image src=""></image>
                </view>
                <view class="menu-name">服务中心</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src=""></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-icon">
                    <image src=""></image>
                </view>
                <view class="menu-name">用户设置</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src=""></image>
            </view>
        </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'

import './index.scss' 

definePageConfig({
  navigationBarTitleText: '我的'
})

export default {
    components: {
  },
  data () {
    return {
    }
  },
  methods: {
      goSign(){
        Taro.navigateTo({
            url: '/mine/sign/index'
        })
      },
      goLogin(){
        Taro.navigateTo({
            url: '/login/signIn/index'
        })
      },
      goAccount(){
        Taro.navigateTo({
            url: '/mine/account/index'
        })
      },
      goMyApply(){
        Taro.navigateTo({
            url: '/mine/myApply/index'
        })
      },
      goCollections(){
          Taro.navigateTo({
            url: '/mine/collections/index'
        })
      }
  },
    }
</script>
