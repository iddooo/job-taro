<template>
  <view class="index">
      <view class="job-info">
          <view class="job-title">招聘书法老师</view>
          <view class="job-des">30元/小时</view>
          <view class="job-company">
              <view class="job-c-icon">
                  <image src=""></image>
              </view>
              <view class="job-c-name">教育有限公司  B轮  150-500人</view>
              <view class="feedback">
                  <image src=""></image>
                  <text>投诉反馈</text>
              </view>
          </view>
          <view class="arrow-icon">
                  <image src=""></image>
          </view>
      </view>

      <view class="ctr-progress">
          <view class="status">待录取</view>
          <view class="tips">主动联系商家，录取概率更高哦，
              <view class="call">点我联系商家 <image src=""></image></view>
          </view>

          <view class="progress">
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image src=""></image>
                  </view>
                  <view class="progress-item-name">报名</view>
              </view>
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image src=""></image>
                  </view>
                  <view class="progress-item-name">录取</view>
              </view>
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image src=""></image>
                  </view>
                  <view class="progress-item-name">反馈</view>
              </view>
              <view class="progress-item active">
                  <view class="progress-item-icon">
                      <image src=""></image>
                  </view>
                  <view class="progress-item-name">发薪</view>
              </view>
          </view>
          <view class="timeline">
              <view class="timeline-item active">
                  <view class="timeline-item-content">商家已发放薪酬</view>
                  <view class="timeline-item-time">2021-10-10 09:55:45</view>
              </view>
              <view class="timeline-item">
                  <view class="timeline-item-content">商家正在审核任务</view>
                  <view class="timeline-item-time">2021-10-10 09:55:45</view>
              </view>
              <view class="timeline-item">
                  <view class="timeline-item-content">您已被商家成功录取</view>
                  <view class="timeline-item-time">2021-10-10 09:55:45</view>
              </view>
              <view class="timeline-item">
                  <view class="timeline-item-content">您已经报名成功</view>
                  <view class="timeline-item-time">2021-10-10 09:55:45</view>
              </view>
          </view>
      </view>

        <view class="btns">
            <view class="btn-column">
                <image src=""></image>
                <view>取消报名</view>
            </view>
            <button class="button-primary w455">
                投递简历
            </button>
        </view>

        <!-- <view class="btns">
            <view class="button-grey w298">
                <image src=""></image>
                <view>任务反馈</view>
            </view>
            <view class="button-primary w380" >
                联系商家
            </view>
        </view>

        <view class="btns">
            <view class="button-grey w189">
                <image src=""></image>
                <view>评价</view>
            </view>
            <view class="button-grey w189">
                <image src=""></image>
                <view>申诉</view>
            </view>
            <view class="button-primary plain w280">
                联系商家
            </view>
        </view> -->

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
definePageConfig({
  navigationBarTitleText: '报名详情'
})

export default {
    components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>
