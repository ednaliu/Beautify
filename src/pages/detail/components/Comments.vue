<template>
  <div>
    <div class="comments">
      <div class="header">
        <div class="left">
          <span class="iconfont star">&#xe632;</span>
          <span class="iconfont star">&#xe632;</span>
          <span class="iconfont star">&#xe632;</span>
          <span class="iconfont star">&#xe632;</span>
          <span class="iconfont star">&#xe632;</span>
          <span class="iconfont commenticon">4.1</span>
        </div>
        <div class="right">
          <span class='comment-nums'>12942人评价</span>
          <span class="iconfont right-arr">&#xe637;</span>
        </div>
      </div>
      <div class="comments-detail">
        <span v-for='item in list' :key='item.id' class='item' :class='item.weight?"wight":""'>
           {{item.desc}}
        </span>
      </div>
      <div class="seller">
        <div class="seller-tittle">商家信息</div>
        <div class="detail">
          <div class="shopname">好伦哥（永定路店）</div>
          <div class="location">海淀区复兴路甲36号百朗园东北角（永定路口）
              <span class="iconfont star">&#xe88b;</span>
          </div>
        </div>
        <div class="distance">
            <span class="iconfont star">&#xe686;</span>
            离我最近
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailComment',
    props: {
      list: Array
    }
  }

</script>
<style lang='less' scoped>
  .iconfont{
    color:#fa952f;
    margin: -0.08rem;
  }
  .commenticon{
    margin: 0;

  }
  .comments{
    height: 3.66rem;
    margin-top:.2rem;
    .header{
    background: #fff;

    display:flex;
    justify-content:space-between;
    align-items:center;
    height: .94rem;
    border-bottom: 1px solid #ddd8ce;
    padding-right:.2rem;
    color:#999;
    .left{
      margin-left:.2rem;
    }
    .right{
      display: flex;
      .comment-nums{
        padding-right:.1rem;
      }
      .right-arr{
    color:#999;
      }
    }
   }
   .comments-detail{
      /* display: flex; */
      /* white-space: nowrap; */
      background: #fff;
      border-bottom: 1px solid #ddd8ce;
      width:100%;
      .item{
        word-break: keep-all;
        display: inline-block;
        height:.6rem;
        line-height:.6rem;
        border: .02rem solid #ACACAC;
        padding: 0 .1rem;
        margin: .1rem;
        border-radius: .06rem;
      }
      .wight{
        border:.02rem solid #FDB338;
        color: #FDB338;
      }
   }
   .seller{
     margin-left:.2rem;
     margin-top:.3rem;
     background: #fff;
     div{
       margin-bottom:.1rem;
     }

   }

  }
</style>