<template>
  <view class="mycent">
    <view class="banner"></view>
    <filterpicker
      :selectorList="selectorList"
      :selectorData="selectorData"
      @change="change"
      @changeRadio="changeRadio"
    />
    <view class="content">
      <view class="content-item">
        <view class="content-item-title">搓澡巾三件套</view>
        <view class="content-item-date">2021-07-27 02:36</view>
        <view class="content-item-count">-10币</view>
      </view>
      <view class="content-item">
        <view class="content-item-title">搓澡巾三件套</view>
        <view class="content-item-date">2021-07-27 02:36</view>
        <view class="content-item-count income">+110币</view>
      </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import filterpicker from '../../components/filterpicker'
import './index.scss'
definePageConfig({
  navigationBarTitleText: '我的平台币'
})
export default {
  components: { filterpicker },
  data() {
    return {
      selectorData: {
        sort: '0',
        score: '1',
        cash: '3'
      },
      onlyTask: false,
      selectorList: [
        { selector: ['2021年7月', '2021年6月', '2021年5月'], key: 'time' },
        { selector: ['类型', '类型1', '类型2'], key: 'type' }
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
      console.log(url)
      Taro.navigateTo({
        url: '/shop/' + url
      })
    }
  }
}
</script>
