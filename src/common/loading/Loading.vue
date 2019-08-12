<template>
  <div class="loading" v-show="$store.state.isLoading">
    <van-loading color="#1989fa" class="van-laoding" type="spinner" />
  </div>
</template>

<script>
import { Loading } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    'van-loading': Loading
  }
}
</script>

<style scope>
.loading{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color:#E6E6E6;
  opacity: 0.7;
}
.van-loading{
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
}

</style>
