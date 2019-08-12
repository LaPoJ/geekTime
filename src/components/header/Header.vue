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
    <div class="header-nav">
      <div class="nav-item" v-for="(nav, index) in navList"  :key="index" @click="changeColumn(index)">
        <img :src="nav.icon" alt="">
        <div class="nav-title">
          <span>{{ nav.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
  name: 'Header',
  props: ['navList'],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (e) {
      console.log(e)
    },
    changeColumn (index) {
      const title = this.navList[index].name
      const id = this.navList[index].id
      this.$router.push({
        name: 'Lesson',
        params: {
          title,
          id
        }
      })
      this.$store.dispatch('changeShowTabbar', this)
    }
  },

  components: {
    'van-search': Search
  }
}
</script>

<style scoped>
.header{
  width: 100%;
}
.header-swiper{
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
}
.header-swiper img {
  width: 100%;
}
.header-nav{
  display: flex;
  width: 100%;
  margin-top: .533333rem;
}
.nav-item{
  flex: 1;
  text-align: center;
}
.nav-item img {
  width: .8rem;
}
.nav-title{
  margin-top: .133333rem;
  font-size: .373333rem;
}
</style>
