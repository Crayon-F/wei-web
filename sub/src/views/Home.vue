<template>
  <div>
     <p>{{user.realName}}</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue项目1"/>
   
  </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  components:{
    HelloWorld
  },
  computed:{
     ...mapState('global', {
      user: state => state.user, // 获取父应用的user信息
    })
  }
}
</script>

