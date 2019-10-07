<template>
  <div class="background">
    <detail-header></detail-header>
    <detail-image></detail-image>
    <detail-comment :list='commentslist'></detail-comment>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'
  import DetailImage from './components/Image'
  import DetailComment from './components/Comments'
  import axios from 'axios'
  export default {
    name: 'Detail',
    components: {
      DetailHeader,
      DetailImage,
      DetailComment
    },
    data(){
      return{
        commentslist:[]
      }
    },
    methods:{
      getDetailList(){
        axios.get('/api/detail.json')
        .then((res)=>{
          let data = res.data.data
          console.log(data)
          if(res.data.ret && data){
          this.commentslist = data.commentslist
          }
        })
      }
    },
    mounted(){
      this.getDetailList()
    }
  }

</script>
<style lang='less' scoped>
  .background{
    background:#f0f0f0;
  }
</style>