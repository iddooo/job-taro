<template>
  <view class="index">
    <view class="content">
      <view class="des">余额 (元)</view>
      <view class="count">0.00</view>
      <button class="button btn">微信提现</button>
      <view class="other-way" @tap="goAlipayAccount">其他方式提现</view>
    </view>

    <view class="detail">
        全部工资明细
        <image class="arrow-icon" src=""></image>
    </view>
  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '账户余额'
})

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    goAlipayAccount() {
      Taro.navigateTo({
        url: 'mine/alipayAccount/index'
      })
    }
  }
}
</script>
