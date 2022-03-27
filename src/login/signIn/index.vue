<template>
  <view class="index">
    <view class="tabs">
      <view
        @tap="tabActive = 1"
        :class="['tab-item', { active: tabActive == 1 }]"
        >验证码登录</view
      >
      <view
        @tap="tabActive = 2"
        :class="['tab-item', { active: tabActive == 2 }]"
        >密码登录</view
      >
    </view>

    <view class="form">
      <view class="form-item">
        <view class="form-label">+86</view>
        <view class="form-ipt">
          <input type="text" v-model="phone" />
        </view>
      </view>
      <view class="form-item">
        <view class="form-label">
          <image
            class="form-label-icon"
            :src="baseImgUrl + '/login/lock.png'"
          ></image>
        </view>
        <view class="form-ipt">
          <input type="text" v-model="password" />
          <view v-if="tabActive == 1">
            <text class="tips green">获取验证码</text>
            <!-- <text class="tips disabled">重新发送59秒</text> -->
          </view>
          <text v-if="tabActive == 2" class="tips">忘记密码</text>
        </view>
      </view>

      <button
        :class="['button', 'btn', { disabled: !phone || !password }]"
        @tap="navigateTo('/login/prefer/index')"
      >
        登录
      </button>
    </view>

    <view class="other">
      <view>其他登录方式</view>
      <button openType="getPhoneNumber" @getPhoneNumber="getPhoneNumber">
        <image
          class="wechat-icon"
          :src="baseImgUrl + '/login/wechat.png'"
        ></image>
      </button>
    </view>

    <view class="agreement">
      <view @tap="agree = !agree" class="flex-ct">
        <view :class="['circle', { active: agree }]"></view>
        <view>登录并同意</view>
      </view>
      <text class="underline" @tap="navigateTo('/login/agreement/index')"
        >牛犊梦用户协议、隐私协议</text
      >
      <view @tap="agree = false">｜ 我不同意</view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from "@tarojs/taro";
import { post, setToken } from "../../api/index";
import { isNew } from "../../common/const";
import "./index.scss";
import { baseImgUrl } from '../../common/const';

definePageConfig({
  navigationBarTitleText: "登录"
});
export default {
  components: {},
  data() {
    return {
      isNew,
      tabActive: 1,
      phone: undefined,
      password: undefined,
      agree: false,
      baseImgUrl
    };
  },
  created() {},
  methods: {
    navigateTo(url) {
      Taro.navigateTo({
        url: url
      });
    },
    async getPhoneNumber(res) {
      if (!this.agree) {
        wx.showToast({
          title: '请先同意用户条款',
          icon: 'error',
          duration: 2000
        })
        return
      }
      if (res) {
        const mobile = JSON.stringify(Taro.getSystemInfoSync());
        const { encryptedData, iv, code } = res.detail;
        const phoneNumberCode = code; // 获取手机号的code
        const loginRes = await Taro.login();
        const loginCode = loginRes.code; // 获取登录的code
        const apiLoginRes = await post({
          url: "api/wechat/token.html",
          data: {
            jscode: loginCode,
            mobile
          }
        });
        const token = apiLoginRes.token;
        setToken(token);
        const privateData = await post({
          url: "api/wechat/mobile.html",
          data: { encryptedData, iv, jscode: phoneNumberCode }
        });
        const userInfo = await post({
          url: "api/wechat/userinfo.html",
          data: { encryptedData, iv }
        });

        this.navigateTo('/login/prefer/index')
      }
    }
  }
};
</script>
