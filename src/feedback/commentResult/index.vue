<template>
    <view class="index">
        <image src="https://img.langcms.com/index/wrong@1x.png"></image>
        <view class="font-res">评价失败</view>
        <view class="font-sub">再次尝试！</view>

        <button class="button-primary btn">重新评价</button>
        <view class="other">查看其他职务</view>

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
