<template>
  <view class="index">
    <view class="coin-title">平台币提现至账户余额</view>

    <view class="coin-withdraw">
        <view class="input-box flex-ct">
            ￥<input type="number" placeholder="您最高可提现100" placeholder-class="plchd"/>
        </view>
        <view class="coin-tips">平台币兑换比例1：10，您有650平台币</view>
    </view>

    <view class="detail flex-ct-ct" @tap="goCashOut">
        提现记录
        <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
    </view>
  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '平台币提现'
})

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    goCashOut() {
      Taro.navigateTo({
        url: '/mine/cashOut/index'
      })
    },
  }
}
</script>
