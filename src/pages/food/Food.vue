<template>
  <div>
    <food-header></food-header>
    <food-icon></food-icon>
  </div>
</template>

<script>
  import FoodHeader from './components/Header.vue'
  import FoodIcon from './components/Icon.vue'
  export default {
    name :'Food',
    components:{
      FoodHeader,
      FoodIcon
    },
    mounted(){
      // console.log(this.$route.params.id)
    }
  }

</script>
<style lang='less' scoped>
</style>