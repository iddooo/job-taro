<template>
  <view class="filter">
    <picker
      class="picker"
      v-for="(item) in selectorList"
      :key="item.key"
      :range="item.selector"
      @change="change($event,item)"
    >{{labelMap[item.key]}}</picker>
    <view
      class="radio"
      @tap="onlyTask = !onlyTask;$emit('changeRadio',onlyTask)"
    >
      <view class="radio-box"></view>{{!onlyRead ? '仅看积分兑换' : onlyRead}}
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';

export default {
  components: {},
  props: ['selectorList', 'selectorData', 'onlyRead'],
  data() {
    return {
      labelMap: {},
      onlyTask: false,
    };
  },
  created() {
    this.selectorList.forEach((element) => {
      this.labelMap[element.key] = element.selector[0];
    });
  },
  methods: {
    change(e, item) {
      const value = e.detail.value;
      const key = item.key;
      this.labelMap[key] = item.selector[value];
      this.labelMap = { ...this.labelMap };
      this.$emit('change', {
        key,
        value,
      });
    },
  },
};
</script>
<style lang="scss">
@import '../app.scss';
.filter {
  height: 94px;
  background: #ffffff;
  line-height: 94px;
  padding-left: 32px;

  .picker {
    height: 94px;
    margin-right: 49px;
    float: left;
    font-size: 27px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #414141;
    padding-right: 22px;
    background: url(#{$baseImgUrl}shop/sanjiao.png) no-repeat right center;
    background-size: 18px 9px;
  }

  .radio {
    height: 94px;
    line-height: 94px;
    margin-right: 30px;
    float: right;
    font-size: 27px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #414141;
    position: relative;

    .radio-box {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      border: 1px solid #cccccc;
      position: absolute;
      top: 31px;
      left: -40px;
    }
  }
}
</style>