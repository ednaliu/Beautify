<template>
  <div class="food">
    <food-header></food-header>
    <food-icon></food-icon>
    <food-detail :list='foodList' ></food-detail>
  </div>
</template>

<script>
  import FoodHeader from './components/Header.vue'
  import FoodIcon from './components/Icon.vue'
  import FoodDetail from './components/Detail.vue'
  import axios from 'axios'
  export default {
    name :'Food',
    components:{
      FoodHeader,
      FoodIcon,
      FoodDetail
    },
    data(){
      return{
        foodList:[],
        
      }
    },
    methods:{
      requestFoodList(){
        axios.get('/api/food.json') ////在config里面的index proxyTable进行了配置
        .then((res)=>{
          // console.log(res.data.data)
          let data = res.data.data
          if(res.data.ret && data){
            this.foodList = data.foodList
          }
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      // console.log('food')
      this.requestFoodList()
    }
  }

</script>
<style lang='less' scoped>
  .food{
    /* background:red; */
    overflow: hidden;
  }

</style>