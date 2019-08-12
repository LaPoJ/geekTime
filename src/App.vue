<template>
  <div id="app">
    <TabbarBootom />
    <router-view/>
  </div>
</template>

<script>
import TabbarBootom from './components/navbar/TabbarBootom'
export default {
  name: 'App',
  components: {
    TabbarBootom
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
