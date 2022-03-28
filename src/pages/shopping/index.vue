<template>
  <view class="shopping">
    <view class="shopping-top">
      <view class="shopping-cent" @tap="navigateTo('/shop/mycent/index')">10</view>
      <view class="shopping-info" @tap="navigateTo('/shop/mycent/index')">我的平台币</view>
      <view class="shopping-btn-list">
        <view class="shopping-btn" @tap="navigateTo('/shop/myorder/index')">
          <view class="icon"></view>订单
        </view>
        <view class="shopping-btn" @tap="navigateTo('/location/location/index')">
          <view class="icon"></view>地址
        </view>
        <view class="shopping-btn" @tap="navigateTo('/shop/myscore/index')">
          <view class="icon"></view>积分
        </view>
        <view class="shopping-btn" @tap="navigateTo('/shop/myextension/index')">
          <view class="icon"></view>推广
        </view>
      </view>
    </view>
    <tabview :tabCode="tabCode" :tabList="tabList" @changeTabCode="changeTabCode" />
    <filterpicker
      :selectorList="selectorList"
      :selectorData="selectorData"
      @change="change"
      @changeRadio="changeRadio"
    />
    <view class="content">
      <view class="content-left">
        <view class="content-item" @tap="navigateTo('goodsdetail/index')">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">防紫外线抗风晴雨伞10元代金券</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
          </view>
        </view>
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view style="clear:both"></view>
      </view>
      <view class="content-right">
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">防紫外线抗风晴雨伞10元代金券</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>

        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view class="content-item">
          <view class="banner"></view>
          <view class="title"></view>
          <view class="content-info">
            <view class="content-info-title">搓澡巾三件套</view>
            <view class="content-info-price">10积分+20平台币</view>
            <view class="content-info-count">万件已兑换</view>
            <view class="share-goods">分享的商品</view>
          </view>
        </view>
        <view style="clear:both"></view>
      </view>
      <view style="clear:both"></view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
// import { Picker } from '@tarojs/components'
import { AtRadio } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import filterpicker from '../../components/filterpicker'
import tabview from '../../components/tabview'
import './index.scss'
definePageConfig({
  navigationBarTitleText: '牛犊梦商城',
  navigationBarBackgroundColor: '#00CC88',
  navigationBarTextStyle: 'white' // 字体颜色
})
Taro.setBackgroundColor({
  backgroundColorTop: '#00CC88' // 顶部窗口的背景色为红
})

export default {
  components: {
    AtRadio,
    filterpicker,
    tabview
  },
  data() {
    return {
      selectorData: {
        sort: '0',
        score: '0',
        cash: '0'
      },
      onlyTask: false,
      selectorList: [
        { selector: ['默认排序', '按销量', '按时间'], key: 'sort' },
        { selector: ['积分', '>100', '>500'], key: 'score' },
        { selector: ['现金', '0-100', '>500'], key: 'cash' }
      ],
      tabCode: 0,
      tabList: [
        { code: 0, name: '全部' },
        { code: 1, name: '家居百货' },
        { code: 2, name: '服饰鞋包' },
        { code: 3, name: '美妆个护' }
      ]
    }
  },
  methods: {
    change({ key, value }) {
      this.selectorData[key] = value
    },
    changeRadio(flag) {
      this.onlyTask = flag
    },
    navigateTo(url) {
      Taro.navigateTo({
        url
      })
    },
    changeTabCode(code) {
      this.tabCode = code
    }
  }
}
</script>
