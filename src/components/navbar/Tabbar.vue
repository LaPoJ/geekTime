<template>
  <div class="navbar">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/index" icon="wap-home">发现</van-tabbar-item>
      <van-tabbar-item replace to="/course" icon="friends-o">讲堂</van-tabbar-item>
      <van-tabbar-item replace to="/learn" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
