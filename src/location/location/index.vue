<template>
  <view class="location">
    <view class="content">
      <view class="content-body">
        <view class="content-item" v-for="item in list" :key="item.id">
          <view class="one-line">
            <view class="name">{{item.userName}}</view>
            <view class="phone">{{item.mobile}}</view>
          </view>
          <view class="address">{{item.address}}</view>
          <view class="tag" v-if="item.isDefault">默认地址</view>
        </view>
      </view>
    </view>
    <view class="bottom">
      <button class="admin">管理</button>
      <button class="add">新增地址</button>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import './index.scss'
import { post } from '../../api'
definePageConfig({
  navigationBarTitleText: '地址',
  navigationBarBackgroundColor: '#F5F6FA'
})
Taro.setBackgroundColor({
  backgroundColorTop: '#F5F6FA' // 顶部窗口的背景色为红
})
export default {
  components: {},
  data() {
    return {
      list: []
    }
  },
  created() {
    post({ url: 'api/user/addresslist.html', data: {} }).then(res => {
      this.list = res
    })
  }
}
</script>
