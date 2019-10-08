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
        <div class="seller-margin">
          <div class="seller-tittle tittle">商家信息</div>
          <div class="detail">
            <div class="shopname">好伦哥（永定路店）</div>
            <div class="location">
              <span>海淀区复兴路甲36号百朗园东北角（永定路口）</span>
              <span class="iconfont star">&#xe88b;</span>
            </div>
          </div>
          <div class="distance">
            <span class="iconfont icon">&#xe686;</span>
            离我最近
          </div>
        </div>
      </div>
      <div class="group-buy">
        <div class="group">
          <div class="tittle">套餐</div>
          <div class="oneself tittle">
            <div>单人自助餐</div>
            <div>一位</div>
            <div>69元</div>
          </div>
        </div>

      </div>
      <div class="notice">备注</div>
      <div class="notice-detail">
        <div class="detail">
          <div class="ul">
            <ul>
              <li class="firstline line">单人自助餐：11:00-15:00,17:00-21:30</li>
              <li class='line secondline'>平日：午餐11:00至15:00、晚餐17:00至21:30，周六日全天营业</li>
            </ul>
          </div>
          <div class="tittle">
            查看图文详情
            <span class="iconfont arr-right">&#xe637;</span>
          </div>
        </div>
      </div>
      <div class="before-buy">
        <div class="buy">
          <div class="tittle">购买须知</div>
        </div>
        <div class="buydetail">
          <div class="validity-period detail">有效期</div>
          <div class="descriptiion">2014.3.1 至 2019.10.20 23:59（周末、法定节假日通用）</div>
          <div class="detail">使用规则</div>
          <div class="list">
            <ul>
              <li v-for='(item, index) in liList' :key='index'>{{item}}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DetailComment',
    props: {
      list: Array,
      liList: Array
    }
  }

</script>
<style lang='less' scoped>
  @import '../../../assets/styles/mixins.less';

  .iconfont {
    color: #fa952f;
    margin: -0.08rem;
  }

  .tittle {
    font-size: .34rem;
    height: .88rem;
    line-height: .88rem;
    border-bottom: 1px solid #ddd8ce;
    margin-bottom: .2rem;
  }

  .commenticon {
    margin: 0;

  }

  .comments {
    /* height: 3.66rem; */
    margin-top: .2rem;
    padding-bottom: .3rem;

    .header {
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: .94rem;
      border-bottom: 1px solid #ddd8ce;
      padding-right: .2rem;
      color: #999;

      .left {
        margin-left: .2rem;
      }

      .right {
        display: flex;

        .comment-nums {
          padding-right: .1rem;
        }

        .right-arr {
          color: #999;
        }
      }
    }

    .comments-detail {
      /* display: flex; */
      /* white-space: nowrap; */
      background: #fff;
      border-bottom: 1px solid #ddd8ce;
      width: 100%;

      .item {
        word-break: keep-all;
        display: inline-block;
        height: .6rem;
        line-height: .6rem;
        border: .02rem solid #ACACAC;
        padding: 0 .1rem;
        margin: .1rem;
        border-radius: .06rem;
      }

      .wight {
        border: .02rem solid #FDB338;
        color: #FDB338;
      }
    }

    .seller {
      margin-top: .3rem;
      margin-bottom: .3rem;
      background: #fff;
      color: #333;

      .seller-margin {
        margin-left: .2rem;

        .detail {
          display: inline-block;
          margin-top: .1rem;

          .shopname {
            margin-bottom: 0.2rem;
            font-size: 0.32rem;
            color: #000;
            font-weight: bold;
          }

          .location {
            margin-top: .1rem;
            display: flex;
            align-items: center;
            margin-bottom: 0.2rem;

            span {
              flex: 0 0 50%;
              /* text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden; */
              .ellipsis;
              margin-right: 1.2rem;
              height: .42rem;
              line-height: .42rem;
            }

            span:last-child {
              /* width: 4.69rem; */
              color: #06c1ae;
              font-size: .5rem;

            }

          }
        }

        .distance {
          color: #fa952f;
          padding-bottom: .2rem;

          .icon {
            color: #666;
            margin-right: .2rem;
          }

        }
      }


    }

    .group-buy {
      background: #fff;

      .group {
        margin-left: .2rem;
        margin-right: .2rem;

        .oneself {
          display: flex;
          justify-content: space-between;
          border-bottom: none;
          font-size: .3rem;
          margin-bottom: none;
          line-height: .55rem;
          height: .55rem;
        }
      }

    }

    .notice {
      text-align: center;
      color: #000;
      line-height: .55rem;
      height: .55rem;
    }

    .notice-detail {
      background: #fff;
      height: 2.72rem;
      border-top: 1px solid #ddd8ce;

      .detail {
        padding-top: .2rem;
        padding-right: .2rem;
        list-style-type: initial;
        margin-left: 0.3rem;
        line-height: .45rem;
        
        .ul {
          padding-left: .3rem;
          border-bottom: .5px solid #ddd8ce;
          margin-top: .2rem;
          padding-bottom: .1rem;
        }

        .tittle {
          margin-left: .1rem;
          color: #06c1ae;
          border: none;
          font-size: .3rem;

          span {
            margin-left: 4rem;
            color: #06c1ae;
          }
        }
      }
    }

    .before-buy {
      background: #fff;
      margin-top: .2rem;
      color: #333;
      max-height: 9999rem;
      padding-bottom: .3rem;

      .buydetail,
      .buy {
        margin-left: .2rem;
        margin-right: .2rem;
      }

      .detail {
        font-size: 0.3rem;
        color: #f90;
        line-height: 1rem;
      }

      .list {
        line-height: .45rem;
        list-style-type: initial;
        margin-left: 0.4rem;
        font-size: .3rem;
      }
    }

  }
</style>