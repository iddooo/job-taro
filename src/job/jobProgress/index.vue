<template>
  <view class="index">
      <view class="job-info" @tap="navigateTo('/job/jobDetail/index')">
          <view class="job-title">招聘书法老师</view>
          <view class="job-des">30元/小时</view>
          <view class="job-company">
              <view class="job-c-icon">
                  <image :src="baseImgUrl + '/index/qy@2x.png' "></image>
              </view>
              <view class="job-c-name">教育有限公司  B轮  150-500人</view>
              <view class="feedback" @tap="navigateTo('/feedback/complaint/index')">
                  <image :src="baseImgUrl + '/index/tsfk@2x.png' "></image>
                  <text>投诉反馈</text>
              </view>
          </view>
          <view class="arrow-icon">
                  <image :src="baseImgUrl + '/message/arrow.png' "></image>
          </view>
      </view>

      <view class="ctr-progress">
          <view class="status">待录取</view>
          <view class="tips" >主动联系商家，录取概率更高哦，
              <view class="call">点我联系商家 > </view>
          </view>

          <view class="progress">
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image v-if="state==1" :src="baseImgUrl + '/index/status/bm-on@2x.png' "></image>
                      <image v-else :src="baseImgUrl + '/index/status/bm@2x.png' "></image>
                  </view>
                  <view class="progress-item-name">报名</view>
              </view>
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image v-if="state==2" :src="baseImgUrl + '/index/status/lq-on@2x.png' "></image>
                      <image v-else :src="baseImgUrl + '/index/status/lq@2x.png' "></image>
                  </view>
                  <view class="progress-item-name">录取</view>
              </view>
              <view class="progress-item">
                  <view class="progress-item-icon">
                      <image v-if="state==3" :src="baseImgUrl + '/index/status/fk-on@2x.png' "></image>
                      <image v-else :src="baseImgUrl + '/index/status/fk@2x.png' "></image>
                  </view>
                  <view class="progress-item-name">反馈</view>
              </view>
              <view class="progress-item active">
                  <view class="progress-item-icon">
                      <image v-if="state==4" :src="baseImgUrl + '/index/status/fx-on@2x.png' "></image>
                      <image v-else :src="baseImgUrl + '/index/status/fx@2x.png' "></image>
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

      <view class="state-tips">
          <image :src="baseImgUrl + '/resume/xx@2x.png' "></image>
          <text>任务完成，需按要求提交多张照片及描述。</text>
      </view>

        <!--  报名 -->
        <!-- <view class="btns">
            <view class="btn-column">
                <image :src="baseImgUrl + '/index/qxbm@2x.png' "></image>
                <view>取消报名</view>
            </view>
            <button class="button-primary w455" @tap="isShowResume=true">
                投递简历
            </button>
        </view> -->


        <!-- 录取/反馈 -->
        <!-- <view class="btns">
            <view class="button-grey w298" @tap="navigateTo('/feedback/feedback/index')">
                <image :src="baseImgUrl + '/index/rwfk@2x.png' "></image>
                <view>任务反馈</view>
            </view>
            <view class="button-primary w380" @tap="isShowContact=true">
                联系商家
            </view>
        </view> -->

        <!-- 发薪 -->
        <view class="btns">
            <view class="button-grey w189" @tap="navigateTo('/feedback/comment/index')">
                <image :src="baseImgUrl + '/index/cmt@2x.png' "></image>
                <view>评价</view>
            </view>
            <view class="button-grey w189" @tap="navigateTo('/feedback/complaint/index')">
                <image :src="baseImgUrl + '/index/feed@2x.png' "></image>
                <view>申诉</view>
            </view>
            <view class="button-primary plain w280" @tap="isShowContact=true">
                联系商家
            </view>
        </view> 

        <!-- 选择简历 -->
        <Resumes :show="isShowResume"></Resumes>

        <!-- 联系商家 -->
        <Contacts :show="isShowContact"></Contacts>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
import Resumes from '../../components/Resumes/index'
import Contacts from '../../components/Contacts/index'
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

definePageConfig({
  navigationBarTitleText: '报名详情'
})

export default {
    components: {
      Resumes,
      Contacts
    },
    data () {
        return {
            isShowResume:false,
            isShowContact:false,
            state:1, //1 报名 2 录取 3 反馈 4 发薪
            baseImgUrl
        }
    },
    methods: {
        navigateTo(url) {
            Taro.navigateTo({
                url: url
            })
        }
    },
}
</script>
