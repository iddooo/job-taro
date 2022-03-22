<template>
  <view class="index">我的订单</view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import './index.scss'
definePageConfig({
  navigationBarTitleText: '我的订单'
})
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
