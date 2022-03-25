<template>
  <view class="index">
      <view class="form">
          <view class="form-item">
              <view class="form-label">公司名称</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="xx公司">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">行业</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker grey">请选择</view>
                    </picker>
                <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">在职时间</view>
              <view class="form-ipt">
                    <view class="picker-range">
                        <picker mode="date"  @change="change" value="">
                            <view class="picker grey">入职时间</view>
                        </picker>
                        <view class="range">-</view>
                        <picker mode="date"  @change="change" value="">
                            <view class="picker">至今</view>
                        </picker>
                    </view>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">职位类型</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker grey">请选择</view>
                    </picker>
                <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">所属部门</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="请填写">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">工作内容</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="请填写">
              </view>
          </view>
      </view>

      <view class="radio">
          <radio :checked="true" color="#00CC88">默认屏蔽该公司</radio>
      </view>

      <button class="button save">保存</button>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "工作经历"
});
export default {
  components: {
  },
  data() {
    return {
        selector:['男','女'],
        baseImgUrl,
    };
  },
  methods:{
      change(e){
          console.log('e :>> ', e);
      },
  }
  
  
};
</script>
