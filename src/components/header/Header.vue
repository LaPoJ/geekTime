<template>
  <div class="header">
    <div class="header-search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="header-swiper">
      <van-swipe :autoplay="3000" indicator-color="white" :height="200">
        <van-swipe-item>
          <img :src="imageUrl"/>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="imageUrl"/>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="imageUrl"/>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="imageUrl"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      imageUrl: 'https://xuecdn2.aliyunedu.net/img_ee1672651bdbd2ce1accc587e4337f77.jpg'
    }
  },
  components: {

  }
}
</script>

<style scoped>
.header{
  width: 100%;
}
.header-swiper{
  width: 100%;
  /* background-color: red; */
}

</style>
