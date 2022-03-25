<template>
  <view class="index">
      <view class="container">
          <view class="line" @tap="goOnlineResume">
            <view>在线简历</view>
            <view class="line-right orange">
                待完善<image :src="baseImgUrl + '/message/arrow.png' "></image>
            </view>
        </view>
      </view>

      <view class="container">
          <view class="line border-btm">
            <view>附件简历</view>
            <view class="line-right">
                电脑上传<image :src="baseImgUrl + '/message/arrow.png' "></image>
            </view>
        </view>
        <view class="list">
            <view class="list-left" @tap="show=true">
                <image :src="baseImgUrl + '/resume/bz@1x.png' "></image>
                xx-岗位-2020简历.pdf
            </view>
            <view class="list-right">...</view>
        </view>
        <view class="list">
            <view class="list-left">
                <image :src="baseImgUrl + '/resume/bz@1x.png' "></image>
                xx-岗位-2020简历.pdf
            </view>
            <view class="list-right">...</view>
        </view>
      </view>

      <view class="container">
          <view class="line">
            <view>选择默投简历</view>
            <view class="line-right">
                在线简历/附件简历<image :src="baseImgUrl + '/message/arrow.png' "></image>
            </view>
        </view>
      </view>

      <view class="button-primary">保存</view>

      <view >
            <view :class="['slide',{'slide-up':show}]">
                <view>删除附件</view>
                <view class="cancel" @tap="show=false">取消</view>
            </view>
            <view v-show="show" class="model"></view>
      </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "我的简历"
});
export default {
  components: {
  },
  data() {
    return {
        show:false,
        baseImgUrl
    };
  },
  methods:{
      goOnlineResume(){
          Taro.navigateTo({
              url:'/resume/onlineResume/index'
          })
      }
  }
  
  
};
</script>
