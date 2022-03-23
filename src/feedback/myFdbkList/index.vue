<template>
    <view class="index">
        <view class="content">
            <view class="item">
                <view class="type flex-ct-btw">
                    <view>薪资投诉</view>
                    <view class="time">10月10日 10:10</view>
                </view>
                <view class="des">商家克扣薪资待遇，与实际情况不符合。</view>
            </view>
            <view class="item">
                <view class="type">
                    <view>官方客服回复</view>
                </view>
                <view class="des">经过检测，发现所有并无问题。</view>
            </view>
        </view>

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
