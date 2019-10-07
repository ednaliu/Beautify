<template>
  <div class="detail-list">
    <button-list></button-list>
    <div class="list" v-for='item in list' :key='item.id' ref='item'>
      <div class="list-item">
        <div class="top">
          <div class="left">
            <img class='left-img' :src="item.imgUrl" alt="">
          </div>
          <div class="right">
            <div class="right-header">{{item.title}}</div>
            <div class="right-price">
              <span class="price-star">
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="price">{{item.price}}</span>
              </span>
              <span class="location">{{item.location}}</span>
            </div>
            <div class="tag">
              <span class="category">{{item.category}}</span>
              <span class='tagone'>{{item.tagone}}</span>
              <span class='tagtwo'>{{item.tagtwo}}</span>
              <span class='tagthree'>{{item.tagthree}}</span>
              <span class='tagfour'>{{item.tagfour}}</span>
              <span class='tagfour'>{{item.tagfour}}</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">{{item.left}}</div>
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="right"><span class="content">{{item.right}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonList from './ButtonList.vue'
  export default {
    name: 'FoodDeatil',
    components: {
      ButtonList
    },
    props: {
      list: Array,
    }
  }

</script>
<style lang='less' scoped>
  .detail-list {
    background: #fff;
    width: 100%;

    .detail {
      background: #fff;
      margin-top: .2rem;
      height: .84rem;
      color: #666;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #DDD8CE;

      .header {
        display: flex;
        height: .84rem;
        align-items: center;

        .iconfont {
          font-size: .19rem;
          color: #ccc;
        }
      }
    }

    .list {
      height: 2.82rem;
      margin-left: .2rem;
      /* color: #666; */
      font-size: .24rem;
      width: 100%;
      background: #fff;
      margin-right: .3rem;

      .list-item {
        display: flex;
        flex-direction: column;
        background: #fff;

        .top {
          display: flex;
          margin-top: .2rem;
          width: 100%;

          /* flex-direction: column; */
          .left {
            .left-img {
              width: 1.6rem;
              height: 1.6rem;
            }
          }

          .right {
            margin-left: .3rem;
            display: flex;
            /* width:0; */
            flex-direction: column;
            justify-content: center;
            max-width: 5.3rem;
            padding-right: .2rem;
            /* flex:1; */
            /* width: 546rem; */

            /* align-items: center; */
            .right-header {
              font-size: 0.34rem;
              font-weight: 500;
              margin-bottom: .1rem;
            }

            .right-price {
              /* 使用flex布局会导致右边一部分内容不可见*/
              /* display: flex;
              align-items: center;
              justify-content: space-between; */
              position: relative;
              margin-bottom: .2rem;

              .star {
                color: #fa952f;
                margin: -0.08rem;
              }

              .location {
                position: absolute;
                right: 0;
                line-height: .5rem;
              }

            }

            .tag {
              display: flex;
              font-size: .24rem;
              height: .33rem;
              line-height: .33rem;
              vertical-align: baseline;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;

              span:not(.category) {
                margin-left: .08rem;
                font-size: .22rem;
                color: #be9e4d;
              }

              .right {
                flex: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }

        .bottom {
          display: flex;
          margin-left: .8rem;
          margin-top: .12rem;
          margin-right: .2rem;
          height: .8rem;
          /* justify-content: space-around; */
          align-items: center;

          div {
            margin-left: .2rem;
          }

          .left {
            border: 1px solid #ff8226;
            border-radius: 0.045rem;
            color: #ff8226;
            letter-spacing: 0.17px;
            padding: 0.08rem;
            max-width: 1.6rem;
          }

          .img {
            img {
              width: .3rem;
              height: .3rem;
            }
          }

          .right {
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>