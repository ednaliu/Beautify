<template>
  <div class="whole">
    <div class="guall">
      <div class="guess">猜你喜欢</div>
      <div class="left-right" v-for='item in list' :key='item.id'>
        <div class="left">
          <div>
            <img class="img" :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="right">
          <div class="name">{{item.title}}</div>
          <div class="choose">{{item.choose}}</div>
          <div class="bott">
            <div>
              <span class="price"> {{item.price}}</span>
              <span class="yuna">元</span>
              <span class="pricede">{{item.pricede}}</span>
            </div>
            <div>
              <span class="count">{{item.count}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    }
  }
</script>
<style lang='less' scoped>
  .whole {
    margin-top: .2rem;
    background-color: #fff;

    .guall {
      margin-left: .2rem;

      .guess {
        height: .83rem;
        line-height: .83rem;
        color: #333;
        font-size: .34rem;
        border-bottom: 1px solid #DDD8CE;
      }

      .left-right {
        margin-top: .2rem;
        height: 1.64rem;
        border-bottom: 1px solid #DDD8CE;
        padding-bottom: .24rem;
        display: flex;
        flex-direction: row;

        .left {
          .img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        .right {
          margin-left: .15rem;
          flex:1;
          margin-right:.2rem;

          .name {
            font-weight: 400;
            font-size: .3rem;
            margin-bottom: .12rem;
          }

          .choose {
            font-size: .24rem;
            height: .68rem;
            margin-bottom: .16rem;
            color: #666;
          }

          .bott {
            font-size: .24rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;

            .price {
              color: #f60;
              font-size: .36rem;
            }

            .count {
              /* padding-left:1rem; */
            
            }
          }

        }
      }
    }
  }
</style>