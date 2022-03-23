<template>
    <view class="index">
        <view class="head">
            <view class="qi">
                <image src="https://img.langcms.com/index/qy@1x.png"></image>
            </view>
            <view>
                <view class="title">招聘书法老师</view>
                <view class="des">30元/小时</view>
            </view>
            <image class="arrow-icon" src="https://img.langcms.com/message/arrow.png"></image>
        </view>

        <view class="stars">
            <image class="star-icon" src="https://img.langcms.com//index/star@2x.png"></image>
            <image class="star-icon" src="https://img.langcms.com/index/star@2x.png"></image>
            <image class="star-icon" src="https://img.langcms.com/index/star@2x.png"></image>
            <image class="star-icon" src="https://img.langcms.com/index/star@2x.png"></image>
            <image class="star-icon" src="https://img.langcms.com/index/start1@2x.png"></image>
        </view>
        <view class="level">比较满意！</view>

        <view class="content">
            <textarea class="text" name="" id="" cols="30" rows="10" placeholder="您的评价将对其他求职者有参考意义"></textarea>
            <view class="image">
                <image src=""></image>
            </view>
        </view>

        <button class="button-primary btn">提交评论</button>

    </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '评价'
})

export default {
    data () {
        return {
            
        }
    },
    methods: {
    },
}
</script>
