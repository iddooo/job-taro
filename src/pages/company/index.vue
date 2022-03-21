<template>
  <view class="index">
      <view class="image">
          <image src=""></image>
      </view>

      <view class="box-1">
          <view class="b1-head">教育有限公司</view>
            <view class="box flex-ct">
                <image src=""></image>
                <view class="font1">公司认证</view>
                <view class="font2">｜ B轮  150-500人</view>
            </view>
          <image class="qi" src=""></image>
      </view>

      <view class="box-2">
          <view class="b2-head">企业基本信息</view>
          <view class="content">
            <view class="line">
                <view class="l">经营状态</view>
                <view class="r">存续</view>
            </view>
            <view class="line">
                <view class="l">成立日期</view>
                <view class="r">2021年10月10日</view>
            </view>
            <view class="line">
                <view class="l">注册地址</view>
                <view class="r">北京市海淀区北四环路283号科技楼1-5层</view>
            </view>
            <view class="line">
                <view class="l">统一信用代码</view>
                <view class="r">9113060M5566</view>
            </view>
            <view class="line">
                <view class="l">组织机构代码</view>
                <view class="r">MA0FPX</view>
            </view>
            <view class="line">
                <view class="l">经营范围</view>
                <view :class="['r', {'slide':fold}]">基础软件开发；企业管理咨询服务，教育咨询服务（培训、教育辅导），计算机网络技术开发、咨询、转让、推广服务、广告发布、代理服务，文化会展服务，基础软件开发；企业管理咨询服务，教育咨询服务（培训、教育辅导），计算机网络技术开发、咨询、转让、推广服务、广告发布、代理服务，文化会展服务，</view>
            </view>

            
            <view class="provide flex-ct-ct">
                    <view>以上信息由</view>
                    <image src=""></image>
                    <view>提供</view>
                </view>

            <view class="fold" @tap="toggle">展开全部</view>
          </view>
      </view>

      <view class="box-3">
          在招岗位 2
      </view>

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

  </view>
</template>

<script>
import "./index.scss";

definePageConfig({
  navigationBarTitleText: "公司主页"
});

export default {
  components: {
  },
  data() {
    return {
        fold:true
    };
  },
  methods: {
      toggle(){
          this.fold = !this.fold
      }
  }
};
</script>
