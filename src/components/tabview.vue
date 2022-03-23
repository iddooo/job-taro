<template>
  <view class="tab">
    <view
      @tap="change(item.code)"
      v-for="item in tabList"
      :key="item.code"
      :class="{active:item.code === tabCode,green:color === 'green'}"
      class="tab-common"
    >{{item.name}}</view>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
export default {
  components: {},
  props: ['tabList', 'tabCode', 'color'],
  data() {
    return {
      labelMap: {},
      onlyTask: false
    }
  },
  created() {
    if (this.color) {
    }
  },
  methods: {
    change(code) {
      this.$emit('changeTabCode', code)
    }
  }
}
</script>
<style lang="scss">
.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab-common {
  text-align: center;
  height: 95px;
  line-height: 95px;
  position: relative;
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9c9c;

  &.active {
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #3d3d3d;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 7px;
      background: #fa5555;
      border-radius: 4px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &.green::before {
      background: #00cc88;
    }
  }
}
</style>