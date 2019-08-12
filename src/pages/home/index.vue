<template>
  <div class="home_page">
    <Loading />
    <Header :navList="navList" />
    <div v-for="(lessonList, index) in list"  :key="index">
      <LessonSection :lessonLists="lessonList"/>
    </div>
  </div>
</template>

<script>
import Header from '@components/header/Header'
import LessonSection from '@components/lessonList/LessonList'
import Loading from '@common/loading/Loading'
export default {
  name: 'Home',
  data () {
    return {
      list: [],
      navList: []
    }
  },
  components: {
    Header,
    LessonSection,
    Loading
  },
  created () {
    this.$http
      .post('https://easy-mock.com/mock/5d1db3faf633eb38ae0614f5/jikeTime/toplist')
      .then(res => {
        this.list = res.data.list
        this.navList = res.data.nav
        if (this.$store.state.isLoading) {
          this.$store.dispatch('changeLoading')
        }
      })
  }
}
</script>

<style scoped>
.home_page{
  margin-bottom: 1.6rem;
}
</style>
