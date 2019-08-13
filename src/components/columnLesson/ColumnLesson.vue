<template>
  <div class="column-wapper">
    <div class="column" v-for="(column, index) in newColumn" :key="index" @click="toColumnDetail(index)">
      <div class="column-left">
        <div class="column-img">
          <img :src="column.column_cover_small" :width="82">
        </div>
      </div>
      <div class="column-right">
        <div class="column-info">
          <div class="column-info__box">
            <div class="column-title">
              <span>{{column.column_title}}</span>
            </div>
            <div class="column-desc">
              <span>{{ column.column_unit }} | {{ column.column_subtitle }}</span>
            </div>
            <div class="column-author">
              <span>{{ column.author_name}}</span>
              <span>{{ column.author_intro}}</span>
            </div>
          </div>
          <div class="column-detail">
            <van-icon class="column-detail-icon" name="arrow" color="#B6C5DE" size="16" />
          </div>
        </div>
        <div class="column-price">
          <span class="column-price-sale">￥{{ (column.column_price)/100 }}</span>
          <span class="column-price-market" v-if="column.column_price_market !== column.column_price">￥{{ column.column_price_market/100 }} </span>
          <span class="sub-count">{{ column.sub_count }}人以学习</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'ColumnLesson',
  props: {
    newColumn: {
      type: Array
    }
  },
  components: {
    'van-icon': Icon
  },
  data () {
    return {
      column: []
    }
  },
  watch: {
    newColumn (val) {
      this.column = val
      // console.log(this.column)
    }
  },
  methods: {
    toColumnDetail () {

    }
  }
}
</script>

<style scoped>
.column-wapper{
  width: 100%;
  height: 100%;
  /* box-sizing: border-box; */
  margin-bottom: 1.6rem;
}
.column{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  border-bottom: .013333rem solid #F6F6F6;
  padding: .48rem .586667rem .48rem .586667rem;
}
.column-img{
  border-radius: .133333rem;
}
.column-img img{
  border-radius: 5%;
}
.column-left{
  flex: 1;
}
.column-right{
  flex: 3;
  margin-left: .48rem;
  margin-top: .213333rem;
}
.column-info{
  display: flex;
}
.column-info__box{
  flex: 4;
  width: 5.066667rem;
}
.column-detail{
  flex: 1;
  text-align: center;
  align-items: center;
  position: relative;
}
.column-detail-icon{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.column-title, .column-desc, .column-author{
  max-width: 5.333333rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
}
.column-title span {
  line-height: 19px;
  font-size: 18px;
  font-weight: 700;
  color: #4c4c4c;
}
.column-desc{
  margin-top: .213333rem;
  font-size: .373333rem;
  line-height: .373333rem;
  color: #767676;
  font-weight: 200;
}
.column-author{
  margin-top: .213333rem;
}
.column-author span{
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
.column-price{
  margin-top: .266667rem;
}
.column-price-sale{
  height: .693333rem;
  margin-right: 6px;
  line-height: .533333rem;
  font-size: .426667rem;
  font-weight: 500;
  color: #fa8919;
}
.column-price-market{
  font-size: .32rem;
  color: #b2b2b2;
  text-decoration: line-through;
}
.sub-count{
  font-size: .32rem;
  height: .533333rem;
  line-height: .533333rem;
  color: #ababab;
  float: right;
  margin-right: .533333rem;
}
</style>
