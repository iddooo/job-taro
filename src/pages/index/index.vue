<template>
  <view class="index">
      <!-- 导航栏 -->
      <view class="nav-box">
          <view class="loc-box">
              <image class="loc-icon" :src="baseImgUrl + '/index/zb@1x.png' "></image>
              <view>北京</view>
          </view>
          <view class="ipt-box">
              <image class="search-icon" :src="baseImgUrl + '/index/ss@1x.png' "></image>
              <input class="ipt" type="text" placeholder-class="plchd" placeholder="职务" />
          </view>
          <image @tap="navigateTo('/mine/sign/index')" class="sign-box" :src="baseImgUrl + '/index/sign@1x.png' "></image>
      </view>

    <!-- 轮播图 -->
    <view class="swiper-container">
        <swiper
            class='swiper'
            :autoplay="true"
            >
            <swiper-item>
                <image class="banner-img" :src="baseImgUrl + '/index/banner.png' "></image>
            </swiper-item>
        </swiper>
    </view>

    <!-- 筛选 -->
    <view class="filter-box">
        <view class="flex-ct">
            <view :class="['r-item',{'active':type==item.type}]"
                v-for="item in types" :key="item.type"
                @tap="type=item.type">
                <view>{{item.name}}</view>
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
        <view class="job-content">
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        </view>
    </view>


    <!-- 岗位 -->
    <view v-show="isShowPost">
        <view class="model"></view>
        <view class="dailog dailog-post">
            <view class="dailog-title">选择岗位类型</view>
            <view class="cancel" @tap="isShowPost = false">取消</view>
            <view class="dailog-content">
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
        <view class="dailog dailog-filter">
            <view class="dailog-title">筛选</view>
            <view class="cancel" @tap="isShowFilters = false">取消</view>
            <view class="dailog-content">
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
                        <image :src="baseImgUrl + '/index/cz@1x.png' "></image>重置
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
import JobCard from '../../components/JobCard/index.vue'
import tabview from '../../components/tabview'
import { baseImgUrl } from '../../common/const';
import Taro from '@tarojs/taro'

export default {
    components: {
        JobCard,
        tabview
  },
  data () {
    return {
        baseImgUrl,
        isShowPost:false, //岗位
        isShowFilters:false, //筛选

        type:1,
        types:[
            {name:'推荐',type:1},
            {name:'在家做',type:2},
            {name:'在本地',type:3},
            {name:'大牌名企',type:4}
        ]
    }
  },
  methods: {
    handleClick () {
      e.stopPropagation() // 阻止冒泡
    },
    navigateTo(url) {
        Taro.navigateTo({
            url: url
        })
    },

    
  },
    }
</script>
