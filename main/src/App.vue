<template>
  <div id="app">
    <div id="app">
      <!--基座中可以放自己的路由-->
      <p>
        <router-link to='/'></router-link>
      </p>
      <!--引用其他子应用-->
      <p>
        <router-link to='/vue'>vue应用01</router-link>
      </p>
      <div>
        <router-view></router-view>
      </div>
    <div id="vue"></div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
