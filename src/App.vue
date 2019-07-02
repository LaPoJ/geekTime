<template>
  <div id="app">
    <Tabbar />
    <router-view/>
  </div>
</template>

<script>
import Tabbar from '@components/navbar/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
