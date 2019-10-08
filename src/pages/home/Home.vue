<template>
  <div>
      <home-header></home-header>
      <home-icon :lists='homeiconList'></home-icon>
      <home-recommend :list='list'></home-recommend>
      <home-footer></home-footer>
  </div>
</template>
<script>
  import HomeHeader from './components/Header.vue'
  import HomeIcon from './components/Icon.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeFooter from './components/Footer.vue'
  import axios from 'axios'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeIcon,
      HomeRecommend,
      HomeFooter
    },
    data(){
      return {
        list:[],
        homeiconList:[]
      }
    },
    methods:{
      getHomeInfo(){
        let url = '/api/index.json'
        if (process.env.NODE_ENV === 'production') {
          url = '/static/mock/index.json'
        }
        axios.get(url) ////在config里面的index proxyTable进行了配置
        .then((res)=>{
          let data = res.data.data
          if(res.data.ret && data){
            this.list = data.recommendList
            this.homeiconList = data.list
          }
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.getHomeInfo()
    }
  
  }
</script>
<style >
</style>