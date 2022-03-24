<template>
  <view class="index">
        <filterpicker
        onlyRead="仅看现金"
        :selectorList="selectorList"
        :selectorData="selectorData"
        @change="change"
        @changeRadio="changeRadio"
        />
        <view class="total">
            收入：现金 ￥760.00    平台币345.00
        </view>

        <view class="list">
            <view class="list-item">
                <view class="list-item-title">【推广】搓澡巾三件套</view>
                <view class="list-item-time">2021-07-27 02:36</view>
                <view class="count">
                    <view class="money">0.0</view>
                    <view class="coin">+10币</view>
                </view>
            </view>
            <view class="list-item">
                <view class="list-item-title">【推广】搓澡巾三件套</view>
                <view class="list-item-time">2021-07-27 02:36</view>
                <view class="count">
                    <view class="money">0.0</view>
                    <view class="coin">+10币</view>
                </view>
            </view>
        </view>

  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'
import filterpicker from '../../components/filterpicker'

definePageConfig({
  navigationBarTitleText: '工资明细'
})

export default {
  components: {
      filterpicker
  },
  data() {
    return {
        selectorList: [
            { selector: ['2021年7月', '2021年6月', '2021年5月'], key: 'sort' },
            { selector: ['类型', '推广', '兼职','全职'], key: 'score' },
        ],
        selectorData: {
            sort: '0',
            score: '0',
            cash: '0'
        },
      onlyTask: false,
    }
  },
  methods: {
    change({ key, value }) {
        this.selectorData[key] = value
    },
    changeRadio(flag) {
        this.onlyTask = flag
    },
  }
}
</script>
