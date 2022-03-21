<template>
  <view class="shopping">
    <view class="shopping-top">
      <view class="shopping-btn-list">
        <view class="shopping-btn">
          <view class="icon"></view>订单
        </view>
        <view class="shopping-btn">
          <view class="icon"></view>地址
        </view>
        <view class="shopping-btn">
          <view class="icon"></view>积分
        </view>
        <view class="shopping-btn">
          <view class="icon"></view>推广
        </view>
      </view>
    </view>
    <view class="tab">
      <view class="tab-common active">全部</view>
      <view class="tab-common">家居百货</view>
      <view class="tab-common">服饰鞋包</view>
      <view class="tab-common">美妆个护</view>
    </view>
    <view class="filter">
      <picker class="picker" mode="selector" :range="selector" @change="change">默认排序</picker>
      <picker class="picker" mode="selector" :range="selector" @change="change">积分</picker>
      <picker class="picker" mode="selector" :range="selector" @change="change">现金</picker>
      <view class="radio">
        <view class="radio-box"></view>仅看积分兑换
      </view>
    </view>
    <view class="content">
      <view class="content-left">
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
import './index.scss'
definePageConfig({
  navigationBarTitleText: '牛犊梦商城',
  navigationBarBackgroundColor: '#00CC88',
  navigationBarTextStyle: 'white' // 字体颜色
})

export default {
  components: {
    AtRadio
  },
  data() {
    return {
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      checkboxOption: [
        {
          value: 'list1',
          label: 'iPhone X'
        }
      ],
      checkedList: [],
      value: ''
    }
  },
  methods: {
    handleClick() {
      this.show = true
    },
    handleClose() {
      this.show = false
    },
    change(e) {
      console.log(e)
    },
    handleChange(e) {
      console.log(e)
    }
  }
}
</script>
