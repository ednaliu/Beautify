<template>
  <div>
      <home-header></home-header>
      <home-icon></home-icon>
  </div>
</template>
<script>
  import HomeHeader from './components/Header.vue'
  import HomeIcon from './components/Icon.vue'
  import axios from 'axios'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeIcon
    }
  
  }
</script>
<style></style>