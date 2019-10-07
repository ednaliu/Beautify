<template>
  <div>
    <city-header></city-header>
    <city-content :cities='cities' :hotCities='hotCities'></city-content>
  </div>
</template>

<script>
  import CityHeader from './components/Header.vue'
  import CityContent from './components/Content.vue'
  import axios from 'axios'
  export default {
    name:'City',
    components:{
      CityHeader,
      CityContent
    },
    data(){
      return{
        cities:{},
        hotCities:[]
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/api/city.json')
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
</style>