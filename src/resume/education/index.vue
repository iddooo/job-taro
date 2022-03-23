<template>
  <view class="index">
      <view class="form">
          <view class="form-item">
              <view class="form-label">学校</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="张三">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">学历</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector1" @change="change">
                        <view class="picker">本科</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">在校时间</view>
              <view class="form-ipt">
                    <view class="picker-range">
                        <picker mode="date"  @change="change" value="">
                            <view class="picker grey">入学时间</view>
                        </picker>
                        <view class="range">-</view>
                        <picker mode="date"  @change="change" value="">
                            <view class="picker grey">毕业时间</view>
                        </picker>
                    </view>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">专业</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector2" @change="change">
                        <view class="picker grey">软件开发</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
              </view>
          </view>
      </view>


      <button class="button-primary save">保存</button>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "教育经历"
});
export default {
  components: {
  },
  data() {
    return {
        selector1:['博士','硕士','专科','高中/职高/技校'],
        selector2:['软件行业']
    };
  },
  methods:{
      change(e){
          console.log('e :>> ', e);
      },
  }
  
  
};
</script>
