<template>
  <div>
    <city-header></city-header>
    <city-content :cities='cities' :hotCities='hotCities'></city-content>
    <common-footer class='footer'></common-footer>

  </div>
</template>

<script>
  import CityHeader from './components/Header.vue'
  import CityContent from './components/Content.vue'
  import CommonFooter from '@/common/Footery.vue'

  import axios from 'axios'
  export default {
    name:'City',
    components:{
      CityHeader,
      CityContent,
      CommonFooter
    },
    data(){
      return{
        cities:{},
        hotCities:[]
      }
    },
    methods:{
      getCityInfo(){
        let url = '/api/city.json'
        if(process.env.NODE_ENV === 'production'){
          url = '/static/mock/city.json'
        }
        axios.get(url)
        .then((res) => {
          let data = res.data.data
          // console.log(res.data)
          if(res.data.ret && data){
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
      }
    },
    mounted(){
      this.getCityInfo()
    }
  }

</script>
<style lang='less' scoped>
  .footer{
    text-align:center;
    margin-top: 0.2rem;
    text-align: center;
    margin-left: .3rem;
    margin-right: .36rem;
    padding-right:.2rem;
    over-flow:hidden;
  }
</style>