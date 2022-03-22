<template>
  <view class="index">
      <view class="card card-pd1">
          <image class="img" src="https://img.langcms.com/mine/qd.png"></image>
          <view class="font">您今日未签到</view>
          <view class="count red">+10</view>
      </view>

      <view class="card card-pd2 flex-ct-btw">
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">1天</view>
          </view>
          <view class="item today">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/check-fill@2x.png"></image>
                    </view>
              </view>
              <view class="font day">2天</view>
          </view>
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">3天</view>
          </view>
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">4天</view>
          </view>
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">5天</view>
          </view>
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">6天</view>
          </view>
          <view class="item">
              <view class="box">
                  <view class="font">+2
                    </view>
                    <view class="image">
                        <image src="https://img.langcms.com/mine/jb@2x.png"></image>
                    </view>
              </view>
              <view class="font day">7天</view>
          </view>
      </view>

      <button class="btn button" type="primary">立即签到</button>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
definePageConfig({
  navigationBarTitleText: '签到'
})

export default {
    components: {
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
    }
</script>
