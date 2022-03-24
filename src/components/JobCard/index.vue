<template>
     <view class="job-card" @tap="goJobDetail">
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
            <image class="d-icon" src="https://img.langcms.com/index/dt@1x.png"></image>
            <view class="outer">3.11km</view>&nbsp;|&nbsp;
            <view>海淀区</view>
        </view>
        <view class="company flex-ct-btw">
            <view class="flex-ct">
                <image class="c-icon" src="https://img.langcms.com/index/dt@1x.png"></image>
                <view>北京有限公司</view>
            </view>
            <view class="r-btn">投递简历</view>
        </view>
    </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
import Taro from '@tarojs/taro'

export default {
    data () {
        return {
        }
    },
    methods: {
        goJobDetail(){
            Taro.navigateTo({
                url: '/job/jobDetail/index'
            })
        }
    },
}
</script>
