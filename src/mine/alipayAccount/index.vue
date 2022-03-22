<template>
  <view class="index">
      <view class="form">
          <view class="form-item flex-ct">
              <view class="form-label">支付宝账户</view>
              <view class="form-ipt">
                  <input type="text">
              </view>
          </view>
          <view class="form-item flex-ct">
              <view class="form-label">真实姓名</view>
              <view class="form-ipt flex-ct">
                  <input type="text">
                  <view class="question" @tap="isShowTips=true">?</view>
                  <!-- <image class="tips" src="https://img.langcms.com/index/" @tap="isShowTips=true"></image> -->
              </view>
          </view>

      </view>

    <button class="button btn disabled">确认</button>

    <view v-show="isShowTips">
        <view class="model"></view>
        <view class="tixing">
            <view class="tx-title">说明</view>
            <view class="tx-content">为了确保账户和资金的安全，同时遵循国家相关实名法规规定，牛犊梦账户一经实名认证通过，提现的账户信息就必须与牛犊梦账户信息完全一致才能互相绑定。</view>
            <button class="button cfm" @tap="isShowTips=false">我已了解</button>
        </view>
    </view>

  </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '绑定支付宝'
})

export default {
    components: {
  },
  data () {
    return {
        isShowTips:false,
    }
  },
  methods: {
    goAlipay(){
        Taro.navigateTo({
            url: '/mine/alipayAccount/index'
        })
    }
  },
    }
</script>
