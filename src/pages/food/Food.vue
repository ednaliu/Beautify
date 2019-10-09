<template>
  <div class="food">
    <food-header></food-header>
    <food-icon :list='iconlist'></food-icon>
    <food-detail :list='foodList'></food-detail>
    <common-footer class='self-color'></common-footer>

  </div>
</template>

<script>
  import FoodHeader from './components/Header.vue'
  import FoodIcon from './components/Icon.vue'
  import FoodDetail from './components/Detail.vue'
  import CommonFooter from '@/common/Footer.vue'

  import axios from 'axios'
  export default {
    name: 'Food',
    components: {
      FoodHeader,
      FoodIcon,
      FoodDetail,
      CommonFooter
    },
    data() {
      return {
        foodList: [],
        iconlist: []
      }
    },
    methods: {
      requestFoodList() {
        let url = '/api/food.json'
        if (process.env.NODE_ENV === 'production') {
          url = '/static/mock/food.json'
        }

        axios.get(url) ////在config里面的index proxyTable进行了配置
          .then((res) => {
            let data = res.data.data
            if (res.data.ret && data) {
              this.foodList = data.foodList
              this.iconlist = data.list
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    mounted() {
      this.requestFoodList()
    }
  }

</script>
<style lang='less' scoped>
  .food {
    /* overflow: hidden; */


    .footer {
      text-align: center;
      margin-top: 0.2rem;
      text-align: center;
      margin-left: .3rem;
      margin-right: .36rem;
      padding-right: .2rem;
      over-flow: hidden;
    }
  }
</style>