<template>
  <view class="index">
    <view class="tabs">
      <view class="tab-item active">验证码登录</view>
      <view class="tab-item">密码登录</view>
    </view>

    <view class="form">
      <view class="form-item">
        <view class="form-label">+86</view>
        <view class="form-ipt">
          <input type="text">
        </view>
      </view>
      <view class="form-item">
        <view class="form-label">
          <image
            class="form-label-icon"
            src="https://img.langcms.com/login/lock.png"
          ></image>
        </view>
        <view class="form-ipt">
          <input type="text">
          <text class="tips green">获取验证码</text>
          <!-- <text class="tips disabled">重新发送59秒</text> -->
          <!-- <text class="tips">忘记密码</text> -->
        </view>
      </view>

      <button
        class="button btn disabled"
        @tap="goPrefer"
      >登录</button>
    </view>

    <view class="other">
      <view>其他登录方式</view>
      <button
        openType="getPhoneNumber"
        @getPhoneNumber="getPhoneNumber"
      >
        <image
          class="wechat-icon"
          src="https://img.langcms.com/login/wechat.png"
        ></image>
      </button>

    </view>

    <view class="agreement">
      <view class="circle active"></view>
      <view>登录并同意<text
          class="underline"
          @tap="goAgreement"
        >牛犊梦用户协议、隐私协议</text>｜ 我不同意</view>
    </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from '@tarojs/taro';
import { post, setToken } from '../../api/index';
import { isNew } from '../../common/const';
import './index.scss';
definePageConfig({
  navigationBarTitleText: '登录',
});
export default {
  components: {},
  data() {
    return {
      isNew,
    };
  },
  created() {},
  methods: {
    goPrefer() {
      Taro.navigateTo({
        url: '/login/prefer/index',
      });
    },
    goAgreement() {
      Taro.navigateTo({
        url: '/login/agreement/index',
      });
    },
    async getPhoneNumber(res) {
      if (res) {
        const mobile = JSON.stringify(Taro.getSystemInfoSync());
        const { encryptedData, iv, code } = res.detail;
        const phoneNumberCode = code; // 获取手机号的code
        const loginRes = await Taro.login();
        const loginCode = loginRes.code; // 获取登录的code
        const apiLoginRes = await post({
          url: 'api/wechat/token.html',
          data: {
            jscode: loginCode,
            mobile,
          },
        });
        const token = apiLoginRes.token;
        setToken(token);
        const privateData = await post({
          url: 'api/wechat/mobile.html',
          data: { encryptedData, iv, jscode: phoneNumberCode },
        });
        const userInfo = await post({
          url: 'api/wechat/userinfo.html',
          data: { encryptedData, iv },
        });
      }
    },
  },
};
</script>
