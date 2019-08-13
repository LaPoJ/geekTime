<template>
  <div class="intro-page">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickBack"
      @click-right="onShare"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  components: {
    'van-nav-bar': NavBar
  },
  methods: {
    onClickBack () {
      this.$router.go(-1)
    },
    onShare () {

    }
  }
}
</script>

<style>

</style>
