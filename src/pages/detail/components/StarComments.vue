<template>
  <div>
    <div class="commentsall">
      <div class="commtents">
        <div class="comment">
          <div class="location">评价</div>
          <div class="price-star">
            <span class="iconfont star">&#xe632;</span>
            <span class="iconfont star">&#xe632;</span>
            <span class="iconfont star">&#xe632;</span>
            <span class="iconfont star">&#xe632;</span>
            <span class="iconfont star">&#xe632;</span>
            <span class="price">4.1</span>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="userwrapper" v-for='(item,key) in commonlist' :key='key'>
          <div class="userinfo">
            <div class="user-pic">
              <img class='user-img' :src="item.img" alt="">
            </div>
            <div class="right">
              <div class="tittle">{{item.title}}</div>
              <div class="stardate">
                <span class="stars">
                  <span class="iconfont star">&#xe632;</span>
                  <span class="iconfont star">&#xe632;</span>
                  <span class="iconfont star">&#xe632;</span>
                  <span class="iconfont star">&#xe632;</span>
                  <span class="iconfont star">&#xe632;</span>
                </span>
                <span class="date">{{item.date}}</span>
              </div>
            </div>
          </div>
          <div class="comments">{{item.comments}}</div>
          <div class="pics" v-for='item in commentsimgs'>
            <img class='comments-img' :src="item.src" alt="">
          </div>
          <div class="location">{{item.location}}</div>
        </div>
      </div>
      <div class="link">
          查看全部12944条评价
          <span class="iconfont arr-right">&#xe637;</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarComments',
    props: {
      commentsimgs: Array,
      commonlist: Array
    },
    mounted() {
    }
  }

</script>
<style lang='less' scoped>
  @import '../../../assets/styles/mixins.less';
  @import '../../../assets/styles/varibles.less';

  .star {
    .star;
  }

  .user-img {
    width: .73rem;
    height: .73rem;
    border-radius: 50%;
    .margin-top;
  }
  .pics{
    display: inline-block;
    padding:.08rem;
  }

  .comments-img {
    width: 1.1rem;
    height: 1.1rem;
    ;
  }

  .commentsall {
    background: @contentbackground;
    .margin-top;
    border-bottom: @border-bottom;

    .commtents {
      border-bottom: @border-bottom;

      .comment {
        display: flex;
        justify-content: space-between;
        height: .87rem;
        align-items: center;
        font-size: .34rem;
        .margin-left-right;
      }


    }

    .feedback {
      .margin;

      .userwrapper {
        .userinfo {
          display: flex;
          align-item: center;

          .user-pic {
            .margin-left-right;
            margin-bottom: .05rem;
          }
        }

        .comments {
          display: block;
          line-height: 1.41;
          text-align: justify;
          margin: -0.2em 0;
          word-break: break-all;
          color: #333;
          .margin-bottom;
        }

        .pics {
          margin-top: .2rem;
        }

        .location {
          .margin-top;
          line-height: 1rem;
        }
      }
    }
    .link{
      line-height: .8rem;
      height:.8rem;
      color:@bgColor;
      font-size:.28rem;
      padding-left:.2rem;
      span{
        position: absolute;
        right:.5rem;
      }
    }


  }
</style>