<template>
  <view class="myscore">
    <view class="head">
      <view class="score-bg">
        <view class="score-title">我的积分</view>
        <view class="score-count">10</view>
      </view>
      <tabview
        color="green"
        :tabCode="tabCode"
        :tabList="tabList"
        @changeTabCode="changeTabCode"
      />
    </view>
    <view class="content">
      <view class="content-body">
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
        <view class="content-item">
          <view class="content-item-title">搓澡巾三件套[兑换]</view>
          <view class="content-item-date">2021-07-28 02:36</view>
          <view class="content-item-amount">-10币</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';
import { AtInput, AtForm } from 'taro-ui-vue';
import tabview from '../../components/tabview';
import './index.scss';
definePageConfig({
  navigationBarTitleText: '我的积分',
});
export default {
  components: { AtInput, tabview },
  data() {
    return {
      value: '',
      tabCode: 0,
      tabList: [
        { code: 0, name: '全部' },
        { code: 1, name: '待付款' },
        { code: 2, name: '待发货' },
        { code: 3, name: '已完成' },
      ],
    };
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.value = e.detail.value;
    },
    changeTabCode(code) {
      this.tabCode = code;
    },
  },
};
</script>
