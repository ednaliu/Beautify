<template>
  <div>
    <food-header></food-header>
  </div>
</template>

<script>
  import FoodHeader from './components/Header.vue'
  export default {
    name :'Food',
    components:{
      FoodHeader
    },
    mounted(){
      // console.log(this.$route.params.id)
    }
  }

</script>
<style lang='less' scoped>
</style>