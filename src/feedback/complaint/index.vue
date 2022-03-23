<template>
    <view class="index">
        <view class="title">分类标签</view>

        <view class="tags">
            <view class="tag-item active">薪资投诉</view>
            <view class="tag-item">实际工作描述不符</view>
            <view class="tag-item">诈骗投诉</view>
            <view class="tag-item">额外收费</view>
            <view class="tag-item">态度投诉</view>
        </view>

        <view class="title">问题说明</view>
        <view class="content">
            <textarea class="text" name="" id="" cols="30" rows="10" placeholder="请详细描述您的投诉内容，提供完整的证据链截图，便于我们为您快速处理（至少20字以上）"></textarea>
            <view class="image">
                <image src=""></image>
            </view>
        </view>

        <view class="title">商家联系方式</view>
        <input class="ipt-box" type="text" placeholder="输入联系方式（电话/微信/QQ/邮箱）">


        <view class="title">我的联系方式</view>
        <input class="ipt-box" type="text" placeholder="输入联系方式（电话/微信/QQ/邮箱）">


        <button class="button-primary btn">提交评价</button>
        <button class="button-grey" @tap="goMyFdbkList">
            <image src="https://img.langcms.com/index/feed@2x.png"></image>我的申诉反馈
        </button>



        


    </view>
</template>

<script>
import './index.scss' 
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '投诉反馈'
})

export default {
    data () {
        return {
            
        }
    },
    methods: {
        goMyFdbkList(){
            Taro.navigateTo({
                url: '/feedback/myFdbkList/index'
            })
        }
    },
}
</script>
