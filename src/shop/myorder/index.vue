<template>
  <view class="myorder">
    <view class="head">
      <view class="search-input">
        <input
          class="seach-input__input"
          placeholder-class="center search"
          type="text"
          placeholder="订单"
          :value="value"
          @input="handleChange"
        />
        <view class="search-icon" v-show="!value"></view>
      </view>
      <tabview color="green" :tabCode="tabCode" :tabList="tabList" @changeTabCode="changeTabCode" />
    </view>
    <view class="content">
      <view class="content-item">
        <view class="content-item-img"></view>
        <view class="content-item-number">订单编号:Tb1234567</view>
        <view class="content-item-title">护肤品一套</view>
        <view class="content-item-status done">已完成</view>
        <view class="content-item-pay">
          <view class="content-item-score">积分 10,</view>
          <view class="content-item-realtext">实付款</view>
          <view class="content-item-cash">¥20.0</view>
        </view>

        <view class="content-item-bottom">
          <view class="content-item-logistics">查看物流</view>
          <view class="content-item-confirm">确认收货</view>
          <view class="content-item-contact">联系商家</view>
        </view>
      </view>
      <view class="content-item">
        <view class="content-item-img"></view>
        <view class="content-item-number">订单编号:Tb1234567</view>
        <view class="content-item-title">护肤品一套</view>
        <view class="content-item-status">待收货</view>
        <view class="content-item-pay">
          <view class="content-item-score">积分 10,</view>
          <view class="content-item-realtext">实付款</view>
          <view class="content-item-cash">¥20.0</view>
        </view>

        <view class="content-item-bottom">
          <view class="content-item-logistics">查看物流</view>
          <view class="content-item-confirm">确认收货</view>
          <view class="content-item-contact">联系商家</view>
        </view>
      </view>
      <view class="content-item">
        <view class="content-item-img"></view>
        <view class="content-item-number">订单编号:Tb1234567</view>
        <view class="content-item-title">护肤品一套</view>
        <view class="content-item-status">待收货</view>
        <view class="content-item-pay">
          <view class="content-item-score">积分 10,</view>
          <view class="content-item-realtext">实付款</view>
          <view class="content-item-cash">¥20.0</view>
        </view>

        <view class="content-item-bottom">
          <view class="content-item-logistics">查看物流</view>
          <view class="content-item-confirm">确认收货</view>
          <view class="content-item-contact">联系商家</view>
        </view>
      </view>
      <view class="content-item">
        <view class="content-item-img"></view>
        <view class="content-item-number">订单编号:Tb1234567</view>
        <view class="content-item-title">护肤品一套</view>
        <view class="content-item-status">待收货</view>
        <view class="content-item-pay">
          <view class="content-item-score">积分 10,</view>
          <view class="content-item-realtext">实付款</view>
          <view class="content-item-cash">¥20.0</view>
        </view>

        <view class="content-item-bottom">
          <view class="content-item-logistics">查看物流</view>
          <view class="content-item-confirm">确认收货</view>
          <view class="content-item-contact">联系商家</view>
        </view>
      </view>
      <view class="no-order">
        <image class="no-order-img" :src="baseImgUrl + '/shop/img_scdd.png' "></image>
        <view class="no-order-text">啊哦,您还没有相关订单信息~</view>
      </view>
      
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';
import { AtInput, AtForm } from 'taro-ui-vue'
import tabview from '../../components/tabview'
import './index.scss'
definePageConfig({
  navigationBarTitleText: '我的订单'
})
export default {
  components: { AtInput, tabview },
  data() {
    return {
        baseImgUrl,
      value: '',
      tabCode: 0,
      tabList: [
        { code: 0, name: '全部' },
        { code: 1, name: '待付款' },
        { code: 2, name: '待发货' },
        { code: 3, name: '已完成' }
      ]
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }
  },
  methods: {
    handleChange(e) {
      console.log(e)
      this.value = e.detail.value
    },
    changeTabCode(code) {
      this.tabCode = code
    }
  }
}
</script>
