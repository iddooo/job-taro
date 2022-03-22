<template>
  <view class="index">
      <!-- JobCard start-->
        <JobCard></JobCard>
        <JobCard></JobCard>
        <!-- JobCard end-->
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss' 
definePageConfig({
  navigationBarTitleText: '我的收藏'
})
import JobCard from '../../components/JobCard/index'


export default {
    components: {
        JobCard
    },
    data () {
        return {
        }
    },
    methods: {
        
    },
}
</script>
