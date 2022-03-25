<template>
  <view class="index">
    <view class="cash-out-title">平台币：80000，已提现650</view>

    <view class="cash-list">
        <view class="cash-item flex-ct-btw">
            <view>160.00</view>
            <view class="flex-ct-end right">
                2021-07-28 02:36
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
            </view>
        </view>
        <view class="cash-item flex-ct-btw">
            <view>160.00</view>
            <view class="flex-ct-end right">
                2021-07-28 02:36
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
            </view>
        </view>
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
        url: '/mine/alipayAccount/index'
      })
    },
    goSalaryDetails(){
        Taro.navigateTo({
            url: '/mine/salaryDetails/index'
        })
    }
  }
}
</script>
