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
        
        <view class="content">
            <textarea class="text" name="" id="" cols="30" rows="10" placeholder="结束当前任务，需要提交证明材料"></textarea>
            <view class="image">
                <image src=""></image>
            </view>
        </view>

        <button class="button btn">提交反馈</button>
    </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '任务反馈'
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
