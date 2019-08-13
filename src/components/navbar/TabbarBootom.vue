<template>
  <div class="navbar" v-show="$store.state.isShowTabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/index" icon="wap-home">讲堂</van-tabbar-item>
      <van-tabbar-item replace to="/learn" icon="label-o">学习</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'Tabbar',
  data () {
    return {
      active: 0
    }
  },
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  }
}
</script>

<style scoped>

</style>
