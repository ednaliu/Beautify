<template>
  <div class="background">
    <detail-header></detail-header>
    <detail-image :gallaryImgs='gallaryImgs'></detail-image>
    <detail-comment :list='commentslist' :liList='liList'></detail-comment>
    <detail-star-comments :commonlist='commonlist' :commentsimgs='commentsimgs'></detail-star-comments>
    <detail-recommends :tittle='tittle' :recommentlist = 'recommentlist'></detail-recommends>
    <common-footer class='self-color'></common-footer>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'
  import DetailImage from './components/Image'
  import DetailComment from './components/Comments'
  import DetailStarComments from './components/StarComments'
  import DetailRecommends from './components/Recommends'
  import CommonFooter from '@/common/Footer.vue'
  import axios from 'axios'
  export default {
    name: 'Detail',
    components: {
      DetailHeader,
      DetailImage,
      DetailComment,
      DetailStarComments,
      DetailRecommends,
      CommonFooter
    },
    data(){
      return{
        commentslist:[],
        gallaryImgs:[],
        liList:[],
        commonlist:[],
        commentsimgs:[],
        recommentlist:[],
        tittle:''
      }
    },
    methods:{
      getDetailList(){
        let url = '/api/detail.json'
          if(process.env.NODE_ENV === 'production'){
            url = '/static/mock/detail.json'
          }
        axios.get(url,{
          params:{
            id: this.$route.params.id
          }
        })
        .then((res)=>{
          let data = res.data.data
          // console.log(data.commentsimgs)
          if(res.data.ret && data){
          this.commentslist = data.commentslist,
          this.gallaryImgs = data.gallaryImgs,
          this.liList = data.liList
          this.commentsimgs = data.commentsimgs
          this.commonlist = data.commonlist
          this.recommentlist = data.recommentlist
          this.tittle = data.tittle
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
  html,body{overflow:hidden;overflow-y:auto;}
  .background{
    background:#f0f0f0;
    width:100%;
    /* height: 80rem; */
    /* overflow-x: scroll; */
    .self-color{
      /* color:red!important; */
      /* background:red; */
    }

  }
</style>