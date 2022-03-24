<template>
<view class="index">
    <view class="ctr">
        <view class="font-38 mb16">张三</view>
        <view class="font-24 mb13">3年工作经验/27岁/本科</view>
        <image class="avater" src="https://img.langcms.com/login/avater.png"></image>

        <view class="part part-b">
            <view class="font-32">求职期望</view>
            <view class="font-30">全职工作 |  北京 | UI | 界面设计 8-12k</view>
        </view>

        <view class="part part-b">
            <view class="font-32">个人描述</view>
            <view class="font-24 grey">三年经验，软件设计毕业。</view>
        </view>

        <view class="part">
            <view class="font-32">工作经历</view>
            <view class="flex-ct-btw">
                <view class="font-28">公司名称</view>
                <view class="font-24 grey">2020.11—至今</view>
            </view>
            <view class="font-24 mb16">UI设计师 •技术部</view>
            <view class="font-24">这是一段关于工作内容的描述</view>
        </view>
        <view class="part">
            <view class="flex-ct-btw">
                <view class="font-28">公司名称</view>
                <view class="font-24 grey">2020.11—至今</view>
            </view>
            <view class="font-24 mb16">UI设计师 •技术部</view>
            <view class="font-24">这是一段关于工作内容的描述</view>
        </view>

        <view class="part part-last">
            <view class="font-32">教育经历</view>
            <view class="flex-ct-btw">
                <view class="font-28">大学名称</view>
                <view class="font-24 grey">2020.11—至今</view>
            </view>
            <view class="font-24">本科 •软件设计</view>
        </view>

    </view>
    <view class="info">
        <image src="https://img.langcms.com/resume/xx@2x.png"></image>
        <text>word、pdf等上传，请在电脑上操作</text>
    </view>

    <view class="btns">
        <button class="button-grey btn">在电脑填写</button>
        <button class="button-primary btn" @tap="goMyResume">保存</button>
    </view>
      

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "在线简历"
});
export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods:{
  }
  
  
};
</script>
