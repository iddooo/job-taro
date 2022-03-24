<template>
    <view v-show="show">
        <view class="model"></view>
        <view class="dailog">
            <view class="dailog-title">选择发送简历</view>
            <view class="cancel">取消</view>
            <view class="d-content">
                <view class="resume-item">
                    <view class="name">2021教育老师-李雷-3年简历</view>
                    <view class="des flex-ct">23KB  2021.03.05  14.36完成<view class="state">在线简历</view></view>
                </view>
                <view class="resume-item">
                    <view class="name">2021教育老师-李雷-3年简历</view>
                    <view class="des flex-ct">23KB  2021.03.05  14.36完成</view>
                </view>
            </view>
        </view>
        
    </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
export default {
    props:['show'],
    data () {
        return {
        }
    },
    methods: {
    },
}
</script>
