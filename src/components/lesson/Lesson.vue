<template>
  <div>
    <div class="nav-title">
      <van-nav-bar
        class="nav-bar-title"
        :title="title"
        left-arrow
        @click-left="onClickBack"
      />
    </div>
    <div class="changeColumnSort">
      <div class="sort-item">
        <button :class="active === 'new' ? 'selected': '' " @click="onColumnNew">上新</button>
      </div>
      <div class="sort-item">
        <button :class="active === 'order' ? 'selected': '' " @click="onColumnOrder">订阅数</button>
      </div>
      <div class="sort-item">
        <button :class="active === 'price' ? 'selected': '' " @click="onColumnPrice">价格</button>
      </div>
      <div class="sort-item">
        <button :class="active === 'activity' ? 'selected': '' " @click="onColumnActivity">活动</button>
      </div>
    </div>
    <ColumnLesson :newColumn="newColumn" v-if="newColumn"/>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import ColumnLesson from '@components/columnLesson/ColumnLesson'
export default {
  data () {
    return {
      title: '',
      id: 0,
      column: [],
      newColumn: [],
      active: 'new'
    }
  },
  created () {
    const title = this.$route.params.title
    const id = this.$route.params.id
    this.$http
      .post(`https://easy-mock.com/mock/5d1db3faf633eb38ae0614f5/jikeTime/column_type=${id}`)
      .then(res => {
        const _this = this
        this.column = res.data.column

        this.$nextTick(() => {
          _this.newColumn = _this.column
          if (_this.column) {
            _this.title = `${title}(${_this.column.length})`
          } else {
            _this.title = title
          }
        })
      })
  },

  components: {
    'van-nav-bar': NavBar,
    ColumnLesson
  },

  methods: {
    onClickBack () {
      // 返回上页
      this.$router.go(-1)
      this.$store.dispatch('changeShowTabbar')
      this.$store.dispatch('changeLoading')
    },
    onColumnNew () {
      this.active = 'new'
      const column = this.column.concat()
      this.newColumn = column
    },
    onColumnOrder () {
      this.active = 'order'
      const columnSort = this.column.concat()
      const newColumn = columnSort.sort((item1, item2) => item2.sub_count - item1.sub_count)
      this.newColumn = newColumn
    },
    onColumnPrice () {
      this.active = 'price'
      const columnSort = this.column.concat()
      const newColumn = columnSort.sort((item1, item2) => item1.column_price_sale - item2.column_price_sale)
      this.newColumn = newColumn
    },
    onColumnActivity () {
      this.active = 'activity'
      const columnSort = this.column.concat()
      const columnNoActivity = columnSort.filter((item) => item.column_price_market === item.column_price)
      const columnActivity = columnSort.filter((item) => item.column_price_market !== item.column_price)
      this.newColumn = columnActivity.concat(columnNoActivity)
    }
  }
}
</script>

<style scoped>
.nav-title{
  font-size: .48rem !important;
}
.nav-bar-title{
  font-size: 20px !important;
  font-weight: 400;
}
.changeColumnSort{
  display: flex;
  border-bottom: .013333rem solid #EDEDED;
}
.sort-item{
  flex: 1;
  text-align: center;
  height: 1.2rem;
  justify-content: center;
  display: flex;

}
.sort-item button {
  font-size: .4rem;
  align-items: center;
  align-items: center;
  display: inline;
  border: 0;
  background: transparent;
}
.selected{
  color: #FA8919;
}
</style>
