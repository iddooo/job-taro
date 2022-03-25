<template>
    <view class="index">
        <view class="head">
            <view class="qi">
                <image :src="baseImgUrl + '/index/qy@1x.png' "></image>
            </view>
            <view>
                <view class="title">招聘书法老师</view>
                <view class="des">30元/小时</view>
            </view>
            <image class="arrow-icon" :src="baseImgUrl + '/message/arrow.png' "></image>
        </view>
        
        <view class="content">
            <textarea class="text" name="" id="" placeholder-class="plchd" placeholder="结束当前任务，需要提交证明材料"></textarea>
            <view class="image">
                <image src=" "></image>
            </view>
        </view>

        <button class="button-primary btn">提交反馈</button>
    </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'
import { baseImgUrl } from '../../common/const';

definePageConfig({
  navigationBarTitleText: '任务反馈'
})

export default {
    data () {
        return {
            baseImgUrl
        }
    },
    methods: {
    },
}
</script>
