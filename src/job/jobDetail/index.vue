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
            <image class="shield" :src="baseImgUrl + '/index/aq@1x.png' "></image>
            <view class="font-grey green">安全保障</view>
            <view class="font-grey">放心投递 安全无忧</view>
            <image class="right-arrow" :src="baseImgUrl + '/index/arrow.png' "></image>
        </view>

        <view class="content">
            <view class="line">
                <image class="icon" :src="baseImgUrl + '/index/gzrq@2x.png' "></image>
                <view class="font-title">工作日期</view>
                <view class="font-grey">工作日</view>
            </view>
            <view class="line">
                <image class="icon" :src="baseImgUrl + '/index/gzsd@2x.png' "></image>
                <view class="font-title">工作时段</view>
                <view class="font-grey">08:30～18:00</view>
            </view>
            <view class="line">
                <image class="icon" :src="baseImgUrl + '/index/gzdz@2x.png' "></image>
                <view class="font-title">北京市朝阳区马连坡街道东适口街万达影视商产业园</view>
                <view class="font-grey"></view>
            </view>
            <view class="line">
                <image class="icon" :src="baseImgUrl + '/index/gwyq@2x.png' "></image>
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
                <image class="com-icon" :src="baseImgUrl + '/index/qy@1x.png' "></image>
                <view class="font-com">教育机构</view>
                <view class="font-sub font24">教育有限公司  B轮  150-500人</view>
                <image class="right-arrow" :src="baseImgUrl + '/message/arrow.png' "></image>
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
        <JobCard></JobCard>
        <JobCard></JobCard>
        <!-- JobCard end-->


        <view class="btns flex-ct-btw">
            <view class="btn1">
                <image :src="baseImgUrl + '/index/zxgt@1x.png' "></image>
                <view>在线沟通</view>
            </view>
            <view class="btn2 flex-ct-ct"  @tap="isShowResume = true">
                投递简历
            </view>
        </view>

        <!-- 选择简历 -->
        <Resumes :show="isShowResume"></Resumes>

    </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro'
import JobCard from '../../components/JobCard/index'
import Resumes from '../../components/Resumes/index'
import { baseImgUrl } from '../../common/const';

definePageConfig({
  navigationBarTitleText: "岗位详情"
});
import './index.scss' 

export default {
  components: {
      JobCard,
      Resumes
  },
  data() {
    return {
        isShowResume:false,
        baseImgUrl
    };
  },
  methods: {
        goCompany(){
            Taro.navigateTo({
                url: '/job/company/index'
            })
        },
  }
};
</script>
