<template>
  <view class="index">
    <view class="card-green">
        <view class="flex-ct">
            <view class="card-left">电话</view>
            <view>010-88888888</view>
        </view>
        <view class="flex-ct">
            <view class="card-left">工作时间：</view>
            <view>周一至周六9：:00-18：:00</view>
        </view>
    </view>

    <view class="card-info">
        <view class="card-info-title">关注问题</view>
        <view class="card-info-item flex-ct-btw">
            <view>举报中心 被骗诈骗</view>
            <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
        </view>
        <view class="card-info-item flex-ct-btw">
            <view>修改个人信息</view>
            <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
        </view>
    </view>

    <view class="btn flex-ct-ct">
        <button class="button-primary plain">在线咨询</button>
    </view>
  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '服务中心'
})

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
  }
}
</script>
