<template>
  <div class='list'>
    <div class="tittle">{{this.tittle}}</div>
    <div class="recomments" v-for = 'item in recommentlist'>
      <div class="top">
        <span class="iconfont"> &#xe600;</span>
        {{item.topdesc}}
      </div>
      <div class="bottom">
        <div class="left">
          <span class="price">{{item.price}}</span>
          <span class="yuan">{{item.yuan}}</span>
          <span class="sellprice">{{item.sellprice}}</span>
          <span class="sell">{{item.sell}}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommends',
    props:{
      recommentlist:Array,
      tittle:String
    }
  }

</script>
<style lang='less' scoped>
  @import '../../../assets/styles/mixins.less';
  @import '../../../assets/styles/varibles.less';

  .list {
    background: #fff;
    padding-left: .2rem;
    box-sizing: border-box;

    .tittle {
      .commontittle;
    }

    .recomments {
      .top {
        font-size: 0.3rem;
        color: #666;
        text-overflow: ellipsis;
        line-height:1rem;
        .iconfont{
          color:@bgColor;
        }
      }
      .bottom{
        padding-left:.5rem;
        font-size:.28rem;
        position: relative;
        .price, .yuan{
          color:@bgColor;
        }
        .price{
          font-size:.38rem;
        }
        .sell{
          position:absolute;
          right:.3rem;
        }
      }
    }
  }
</style>