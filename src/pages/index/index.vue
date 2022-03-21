<template>
  <view class="index">
      <!-- 导航栏 -->
      <view class="nav-box">
          <view class="loc-box">
              <image class="loc-icon" src=""></image>
              <view>北京</view>
          </view>
          <view class="ipt-box">
              <image class="search-icon" src=""></image>
              <input class="ipt" type="text" placeholder="职务" />
          </view>
          <image class="sign-box" src=""></image>
      </view>

    <!-- 轮播图 -->
    <view class="swiper-container">
        <swiper
            class='swiper'
            :autoplay="true"
            >
            <swiper-item>
                <image class="banner-img" src=""></image>
            </swiper-item>
        </swiper>
    </view>

    <!-- 筛选 -->
    <view class="filter-box">
        <view class="flex-ct">
            <view class="r-item active">
                <view>推荐</view>
                <image class="active-icon" src=""></image>
            </view>
            <view class="r-item">
                <view>在家做</view>
            </view>
            <view class="r-item">
                <view>在本地</view>
            </view>
            <view class="r-item">
                <view>大牌名企</view>
            </view>
        </view>
        <view class="default">
            <view class="d-left">
                <view class="d-item active">默认</view>
                <view class="d-item">附近</view>
                <view class="d-item">最新</view>
            </view>
            <view class="d-right">
                <view class="r-item active" @tap="isShowPost = true">岗位</view>
                <view class="r-item" @tap="isShowFilters = true">筛选</view>
            </view>

        </view>
    </view>

    <!-- JobCard -->
    <view class="job-box">
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
                <image class="d-icon" src=""></image>
                <view class="outer">3.11km</view>&nbsp;|&nbsp;
                <view>海淀区</view>
            </view>
            <view class="company flex-ct-btw">
                <view class="flex-ct">
                    <image class="c-icon" src=""></image>
                    <view>北京有限公司</view>
                </view>
                <view class="r-btn">投递简历</view>
            </view>

        </view>

        <view class="job-card">
            <view class="flex-ct-btw">
                <view class="title">兼职书法老师</view>
                <view class="flex-btm red">
                    <view class="price">30元</view>
                    <view class="unit">/小时</view>
                </view>
            </view>
            <view class="tags flex-ct">
                <view class="tag-item">北京·四惠</view>
                <view class="tag-item">时薪 </view>
                <view class="tag-item">经验不限</view>
            </view>
            <view class="distance flex-ct">
                <image class="d-icon" src=""></image>
                <view class="outer">3.11km</view>&nbsp;|&nbsp;
                <view>海淀区</view>
            </view>
            <view class="company flex-ct-btw">
                <view class="flex-ct">
                    <image class="c-icon" src=""></image>
                    <view>教育有限公司  B轮  150-500人</view>
                </view>
                <view class="r-btn">投递简历</view>
            </view>

        </view>
    </view>


    <!-- 岗位 -->
    <view v-show="isShowPost">
        <view class="model"></view>
        <view class="dailog post">
            <view class="dailog-title">选择岗位类型</view>
            <view class="cancel" @tap="isShowPost = false">取消</view>
            <view class="content">
                <scroll-view :scroll-y="true" class="left-box" @tap="handleClick">
                    <view class="item active">全部类型</view>
                    <view class="item">餐饮服务</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                    <view class="item">超市零售</view>
                </scroll-view>
                <scroll-view :scroll-y="true" class="right-box" @tap="handleClick">
                    <view class="item active">全部</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                    <view class="item">分拣员</view>
                </scroll-view>
            </view>
        </view>
    </view>
    
    <!-- 筛选 -->
    <view v-show="isShowFilters">
        <view class="model"></view>
        <view class="dailog filter">
            <view class="dailog-title">筛选</view>
            <view class="cancel" @tap="isShowFilters = false">取消</view>
            <view class="content">
                <scroll-view :scroll-y="true"  class="types" @tap="handleClick">
                    <view class="type-box">
                        <view class="item-title">结算方式</view>
                        <view class="flex-ct-wrap">
                            <view class="item active">不限</view>
                            <view class="item">日结</view>
                            <view class="item">周结</view>
                            <view class="item">月结</view>
                            <view class="item">完工结算</view>
                        </view>
                    </view>
                    <view class="type-box">
                        <view class="item-title">性别要求</view>
                        <view class="flex-ct-wrap">
                            <view class="item active">不限</view>
                            <view class="item">男生可做</view>
                            <view class="item">女生可做</view>
                        </view>
                    </view>
                    <view class="type-box">
                        <view class="item-title">身份要求</view>
                        <view class="flex-ct-wrap">
                            <view class="item active">不限</view>
                            <view class="item">学生可做</view>
                            <view class="item">非学生可做</view>
                        </view>
                    </view>
                    <view class="type-box">
                        <view class="item-title">职务要求</view>
                        <view class="flex-ct-wrap">
                            <view class="item active">不限</view>
                            <view class="item">兼职</view>
                            <view class="item">全职</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="btns flex-ct-btw">
                    <view class="btn1 flex-ct-ct">
                        <image src=""></image>重置
                    </view>
                    <view class="btn2 flex-ct-ct">确定</view>
                </view>
            </view>
            
        
            
        </view>
    </view>

  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
import Taro from '@tarojs/taro'
import { AtButton} from "taro-ui-vue";
import "taro-ui-vue/dist/style/components/button.scss";

export default {
    components: {
        AtButton
  },
  data () {
    return {
        isShowPost:false, //岗位
        isShowFilters:false, //筛选
    }
  },
  methods: {
    handleClick () {
      e.stopPropagation() // 阻止冒泡
    },
    goJobDetail(){
        Taro.navigateTo({
            url: '/pages/jobDetail/index'
        })
    }
  },
    }
</script>
