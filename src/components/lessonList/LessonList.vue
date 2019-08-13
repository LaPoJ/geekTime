<template>
  <div class="lesson-section">
    <div class="lesson-page" >
      <div class="lesson-section-header">
        <span class="section-name">{{ navTitle }}</span>
      </div>
      <div class="lesson-info" v-for="(lessonList ,index) in lessonLists" :key="index">
        <div class="lesson-left">
          <img :src="lessonList.column_cover_small" alt="">
        </div>
        <div class="lesson-right">
          <div class="lesson-title">
            <span >{{ lessonList.column_title }}</span>
          </div>
          <div class="author">
            <span class="author-name">{{ lessonList.author_name }}</span>
            <span class="author-intro">{{ lessonList.author_intro }}</span>
          </div>
          <div class="lesson-st">
            {{ lessonList.column_unit }} | {{ lessonList.sub_count }}人以学习
          </div>
          <div class="lesson-buy">
            <span class="column_price_sale">￥{{ lessonList.column_price_sale/100 }}</span>
            <span class="column_price_market" v-show="lessonList.column_price_sale === lessonList.column_price_market ? false : true">￥{{ lessonList.column_price_market/100 }} </span>
            <button class="lesson-read" @click="toIntro(lessonList.id)">{{ lessonList.had_sub ? '学习' : '试读' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonList',
  props: {
    lessonLists: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  computed: {
    navTitle () {
      if (this.lessonLists[0].column_type === 1) {
        return '专栏'
      }
      if (this.lessonLists[0].column_type === 3) {
        return '视频课程'
      }
      if (this.lessonLists[0].column_type === 2) {
        return '微课'
      }
    }
  },
  methods: {
    toIntro (id) {
      console.log(1)
      this.$router.push({
        name: 'Intro',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>
.lesson-section{
  width: 100%;
  margin-top: .266667rem;
}
.lesson-section-header{
  height: 2.133333rem;
}
.section-name{
  font-size: .586667rem;
  line-height: 2.133333rem;
  margin-left: .746667rem;
}
.lesson-info{
  width: 100%;
  display: flex;
  margin-bottom: .533333rem;
}
.lesson-left{
  flex: 1;
  margin-left: .746667rem;
}
.lesson-left img {
  border-radius: .133333rem;
  width: 2.186667rem;
}
.lesson-right{
  margin-left: .4rem;
  flex: 3;
  margin-right: 0;
}
.lesson-title span {
  font-size: .48rem;
  font-weight: 800;
}
.author{
  margin-top: .213333rem;
  display: flex;
}
.author-intro{
  max-width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.author-name, .author-intro{
  margin-right: .08rem;
  padding: 0 .08rem;
  background-color: #f1f1f1;
  border-radius: .053333rem;
  height: .48rem;
  white-space: nowrap;
  line-height: .48rem;
  font-size: .32rem;
  display: inline-block;
  font-weight: 400;
  color: #767676;
}
.lesson-st{
  margin-top: .266667rem;
  line-height: 12px;
  color: #767676;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
.lesson-buy{
  margin-top: .266667rem;
  height: .693333rem;
  margin-right: 6px;
  line-height: .533333rem;
  font-size: .426667rem;
  font-weight: 500;
  color: #fa8919;
}
.column_price_market{
  font-size: .32rem;
  color: #b2b2b2;
  text-decoration: line-through;
}
.lesson-read{
  outline: none;
  float: right;
  padding: 0 15px;
  background-color: #fbf5ee;
  border: none;
  border-radius: 15px;
  line-height: 27px;
  font-size: 15px;
  font-weight: 500;
  color: #fa8919;
  margin-right: .48rem;
}
</style>
