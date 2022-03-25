<template>
  <view v-show="show">
    <view class="model"></view>
    <view class="dailog">
      <view class="dailog-title">联系商家</view>
      <view class="cancel">取消</view>
      <view class="d-content">
        <view class="l-item flex-ct-btw">
          <view class="flex-ct">
            <image
              :src="baseImgUrl + '/index/sj@2x.png'"
              mode="aspectFit"
            ></image>
            电话：18823458854
          </view>
          <view class="content-btn">
            <button class="button-plain">拨打电话</button>
          </view>
        </view>
        <view class="l-item flex-ct-btw">
          <view class="flex-ct">
            <image
              :src="baseImgUrl + '/index/wx@2x.png'"
              mode="aspectFit"
            ></image>
            微信：18823458854
          </view>
          <view class="content-btn">
            <button class="button-plain">拨打电话</button>
          </view>
        </view>
        <view class="l-item flex-ct-btw">
          <view class="flex-ct">
            <image
              :src="baseImgUrl + '/index/zxgt@2x.png'"
              mode="aspectFit"
            ></image>
            在线沟通
          </view>
          <view class="content-btn">
            <button class="button-plain">拨打电话</button>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { baseImgUrl } from '../../common/const';
import './index.scss';
export default {
  props: ['show'],
  data() {
    return {
      baseImgUrl,
    };
  },
  methods: {},
};
</script>
