<template>
  <view class="index">
      <view class="head">
          <view class="avater">
              <image src="https://img.langcms.com/index/login/avater.png"></image>
          </view>
          <view class="green">更换头像</view>
      </view>

      <view class="tips flex-ct-btw">
          <view>基本信息（必填）</view>
          <view class="tips-outer">输入真实姓名能提高录取率</view>
      </view>

      <view class="form">
          <view class="form-item">
              <view class="form-label">姓名</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="张三">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">性别</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker">性别</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">生日</view>
              <view class="form-ipt">
                    <picker mode="date"  @change="change" value="1991-04-04">
                        <view class="picker">1991-04-04</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">职业</view>
              <view class="form-ipt">
                    <picker mode="selector" :range="selector" @change="change">
                        <view class="picker">学生党/上班族/待就业</view>
                    </picker>
                <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">电话</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="199****5566">
              </view>
          </view>
      </view>

      <view class="tips flex-ct-btw">
          <view>基本信息（必填）</view>
      </view>

      <view class="form">
          <view class="form-item">
              <view class="form-label">微信</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="请输入你的微信">
              </view>
          </view>
          <view class="form-item">
              <view class="form-label">QQ</view>
              <view class="form-ipt">
                  <input type="text" placeholder-class="plchd" placeholder="请输入你的QQ">
              </view>
          </view>
      </view>

      <view class="tips flex-ct-btw">
          <view>教育经历（必填）</view>
      </view>

      <view class="add flex-ct-ct" @tap="goEducation">+添加</view>


      <view class="tips flex-ct-btw">
          <view>工作经历</view>
      </view>

      <view class="add flex-ct-ct" @tap="goExperience">+添加</view>



      <view class="tips flex-ct-btw">
          <view>自我描述</view>
      </view>

      <view class="add flex-ct-ct" @tap="goDescription">+添加</view>

        <view class="info">
            <image src="https://img.langcms.com/resume/xx@2x.png"></image>
            <text>word、pdf等上传，请在电脑上操作</text>
        </view>

        <view class="btns">
            <button class="button-grey btn">在电脑填写</button>
            <button class="button-primary btn">保存</button>
        </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

import "./index.scss";
definePageConfig({
  navigationBarTitleText: "基本信息"
});
export default {
  components: {
  },
  data() {
    return {
        selector:['男','女']
    };
  },
  methods:{
      change(e){
          console.log('e :>> ', e);
      },
      goEducation(){
            Taro.navigateTo({
                url: '/resume/education/index'
            })
      },
      goExperience(){
            Taro.navigateTo({
                url: '/resume/experience/index'
            })
      },
      goDescription(){
            Taro.navigateTo({
                url: '/resume/description/index'
            })
      },
    },
      

}
  
</script>
