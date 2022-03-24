<template>
  <view class="myextension">
    <tabview
      color="green"
      :tabCode="tabCode"
      :tabList="tabList"
      @changeTabCode="changeTabCode"
    />
    <view class="content">
      <view class="content-body">
        <view class="content-item">
          <view class="content-item-title">
            <view class="content-item-status">待录取</view>
            护肤品一套
          </view>
          <view class="content-item-info">商品推广 | 不限参与次数</view>
          <view class="content-item-price">
            30元<text  class="content-item-price-unit">/单</text>
          </view>
          <view class="content-item-bottom">
            <view class="store-name">北京有限公司</view>
            <button class="content-item-cotact">联系商家</button>
          </view>
        </view>
        <view class="content-item">
          <view class="content-item-title">
            <view class="content-item-status done">已完成</view>
            护肤品一套
          </view>
          <view class="content-item-info">商品推广 | 不限参与次数</view>
          <view class="content-item-price">
            30元<text  class="content-item-price-unit">/单</text>
          </view>
          <view class="content-item-bottom">
            <view class="store-name">北京有限公司</view>
            <button class="content-item-cotact">联系商家</button>
          </view>
        </view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
        <view class="content-item"></view>
      </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';
import './index.scss';
import tabview from '../../components/tabview';
definePageConfig({
  navigationBarTitleText: '我的推广',
});
export default {
  components: {
    tabview,
  },
  data() {
    return {
      tabCode: 0,
      tabList: [
        { code: 0, name: '全部' },
        { code: 1, name: '已报名' },
        { code: 2, name: '已支付' },
        { code: 3, name: '已完成' },
      ],
    };
  },
  methods: {
    changeTabCode(code) {
      this.tabCode = code;
    },
  },
};
</script>
