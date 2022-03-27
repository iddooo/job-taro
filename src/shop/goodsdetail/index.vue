<template>
  <view class="goodsdetail">
    <view class="banner"></view>
    <view class="band">
      <view class="left">券后商品免费</view>
      <view class="right">仅需付邮费</view>
    </view>
    <view class="info">
      <view class="title">搓澡巾三件套</view>
      <view class="price">10积分+20平台币</view>
      <view class="count">34.2万件已兑换</view>
    </view>
    <view class="content">
      <view class="content-body">
        <view class="content-body-head">
          <view class="head-left">规格</view>
          <picker class="picker">请选择</picker>
        </view>
        <view class="content-body-inside">
          <view class="content-describe">这是关于产品的介绍图文信息,及需要主要的事项.使用规则、用户权益</view>
          <view class="infomation"></view>
        </view>
      </view>
    </view>
    <view class="bottom">
      <button class="getSore">积分不足,立即赚积分</button>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import './index.scss'
definePageConfig({
  navigationBarTitleText: '商品详情'
})
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
