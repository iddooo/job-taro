<template>
  <view class="index">
      <view class="menu">
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-name">账号与安全</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src="https://img.langcms.com/mine/Rectangle @1x.png"></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw" >
            <view class="flex-ct">
                <view class="menu-name">授权设置</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src="https://img.langcms.com/mine/Rectangle @1x.png"></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-name">意见反馈</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src="https://img.langcms.com/mine/Rectangle @1x.png"></image>
            </view>
        </view>
        <view class="menu-item flex-ct-btw">
            <view class="flex-ct">
                <view class="menu-name">隐私协议</view>
            </view>
            <view class="flex-ct-end">
                <image class="menu-arrow" src="https://img.langcms.com/mine/Rectangle @1x.png"></image>
            </view>
        </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';
import './index.scss';

definePageConfig({
  navigationBarTitleText: '用户设置',
});

export default {
  components: {},
  data() {
    return {
      isNew,
    };
  },
  created() {},
  methods: {
  },
};
</script>
