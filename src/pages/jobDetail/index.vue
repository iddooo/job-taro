<template>
  <view class="index">
    <view class="font-h1">招聘书法老师</view>
    <view class="money">30元/小时</view>
    <view class="tags flex-ct">
      <view class="tag-item">日结</view>
      <view class="tag-item">时薪 </view>
      <view class="tag-item">女生</view>
    </view>

    <view class="baoz flex-ct">
      <image class="shield" src=""></image>
      <view class="font-grey green">安全保障</view>
      <view class="font-grey">放心投递 安全无忧</view>
      <image class="right-arrow" src=""></image>
    </view>

    <view class="content">
      <view class="line">
        <image class="icon" src=""></image>
        <view class="font-title">工作日期</view>
        <view class="font-grey">工作日</view>
      </view>
      <view class="line">
        <image class="icon" src=""></image>
        <view class="font-title">工作时段</view>
        <view class="font-grey">08:30～18:00</view>
      </view>
      <view class="line">
        <image class="icon" src=""></image>
        <view class="font-title">北京市朝阳区马连坡街道东适口街万达影视商产业园</view>
        <view class="font-grey"></view>
      </view>
      <view class="line">
        <image class="icon" src=""></image>
        <view class="font-title">岗位要求</view>
        <view class="font-grey">书法等级证书｜限大专以上</view>
      </view>
    </view>

    <view class="font-h2">岗位详情</view>

    <view class="content">
        <view class="font-sub">兼职书法老师岗位职责：</view>
        <view class="font-sub">1、负责学生的书法教学</view>
        <view class="font-sub mb46">2、对学生进行课后辅导</view>
        <view class="font-sub">任职要求：</view>
        <view class="font-sub">1、大学本科学历</view>
        <view class="font-sub mb46">2、对书法有了解或者热爱书法</view>
    </view>

    <!-- 公司 -->
    <view class="font-h2">发布企业</view>

    <view class="content">
        <view class="company" @tap="goCompany">
            <image class="com-icon" src=""></image>
            <view class="font-com">教育机构</view>
            <view class="font-sub font24">教育有限公司  B轮  150-500人</view>
            <image class="right-arrow" src=""></image>
        </view>
        <view class="map-ctr">
            <map
                id="map"
                style="width: 100%; height: 100%"
                longitude="113.324520"
                latitude="23.099994"
                scale="14"/>
        </view>
    </view>

    <view class="font-h2 mb24 active">相似职位推荐</view>
    
    <!-- JobCard start-->
    <view class="job-card">
        <view class="flex-ct-btw">
            <view class="title">招运营专员</view>
            <view class="flex-btm red">
                <view class="price">30元</view>
                <view class="unit">/小时</view>
            </view>
        </view>
        <view class="tags flex-ct">
            <view class="tag-item">日结</view>
            <view class="tag-item">时薪 </view>
            <view class="tag-item">女生</view>
        </view>
        <view class="distance flex-ct">
            <image class="d-icon" src=""></image>
            <view class="outer">3.11km</view>&nbsp;|&nbsp;
            <view>海淀区</view>
        </view>
        <view class="company flex-ct-btw">
            <view class="flex-ct">
                <image class="c-icon" src=""></image>
                <view>北京有限公司</view>
            </view>
            <view class="r-btn">投递简历</view>
        </view>

    </view>

    <view class="job-card">
        <view class="flex-ct-btw">
            <view class="title">兼职书法老师</view>
            <view class="flex-btm red">
                <view class="price">30元</view>
                <view class="unit">/小时</view>
            </view>
        </view>
        <view class="tags flex-ct">
            <view class="tag-item">北京·四惠</view>
            <view class="tag-item">时薪 </view>
            <view class="tag-item">经验不限</view>
        </view>
        <view class="distance flex-ct">
            <image class="d-icon" src=""></image>
            <view class="outer">3.11km</view>&nbsp;|&nbsp;
            <view>海淀区</view>
        </view>
        <view class="company flex-ct-btw">
            <view class="flex-ct">
                <image class="c-icon" src=""></image>
                <view>教育有限公司  B轮  150-500人</view>
            </view>
            <view class="r-btn">投递简历</view>
        </view>

    </view>
    <!-- JobCard end-->


    <view class="btns flex-ct-btw">
        <view class="btn1">
            <image src=""></image>
            <view>在线沟通</view>
        </view>
        <view class="btn2 flex-ct-ct"  @tap="isShowResume = true">
            投递简历
        </view>
    </view>

    <view v-show="isShowResume">
        <view class="model"></view>
        <view class="dailog">
            <view class="dailog-title">筛选</view>
            <view class="cancel" @tap="isShowFilters = false">取消</view>
            <view class="d-content">
                <view class="r-item">
                    <view class="name">2021教育老师-李雷-3年简历</view>
                    <view class="des flex-ct">23KB  2021.03.05  14.36完成<view class="state">在线简历</view></view>
                </view>
                <view class="r-item">
                    <view class="name">2021教育老师-李雷-3年简历</view>
                    <view class="des flex-ct">23KB  2021.03.05  14.36完成</view>
                </view>
            </view>
        </view>
    </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: "岗位详情"
});
import './index.scss' 

export default {
  components: {
  },
  data() {
    return {
        isShowResume:false,
        
    };
  },
  methods: {
      goCompany(){
            Taro.navigateTo({
            url: '/pages/company/index'
        })
        }
  }
};
</script>
