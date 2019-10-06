<template>
  <div class="detail-list"  >
    <button-list :class='classpos' @handlefixed = 'handleClick(el)'></button-list>
    <!-- <div class="detail">
      <div class="header">
        全部类目
        <div class="iconfont city">&#xe631;</div>
      </div>
      <div class="header">
        附近商家
        <span class="iconfont city">&#xe631;</span>
      </div>
      <div class="header">
        附近商家
        <span class="iconfont city">&#xe631;</span>
      </div>
      <div class="header">
        附近商家
        <span class="iconfont city">&#xe631;</span>
      </div>
    </div> -->
    <div class="list" v-for='item in list' :key='item.id' ref='item' @click='handleClick' 
    >
      <div class="list-item">
        <div class="top">
          <div class="left">
            <img class='left-img'
              :src="item.imgUrl" alt="">
          </div>
          <div class="right">
            <div class="right-header">{{item.title}}</div>
            <div class="right-price">
              <div class="price-star">
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="iconfont star">&#xe632;</span>
                <span class="price">{{item.price}}</span>
              </div>
              <div class="location">{{item.location}}</div>
            </div>
            <div class="tag">
              <div class="category">{{item.category}}</div>
                <div class='tagone'>{{item.tagone}}</div>
                <div class='tagtwo'>{{item.tagtwo}}</div>
                <div class='tagthree'>{{item.tagthree}}</div>
                <!-- <div class='tagfour'>{{item.tagfour}}</div> -->
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
    data(){
      return {
        classpos:''
      }
    },
    components:{
      ButtonList
    },
    props:{
      list:Array,
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop 
        if(top>250){
          this.classpos = 'fixed'
        }else{
          this.classpos = ''
        }
      },
      handleClick(el){
        console.log('clicked' + el)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destoryed() {
      window.removeEventListener('scroll', this.handleScroll)
    }     
    
  }

</script>
<style lang='less' scoped>
  .fixed{
    position: fixed;
    top:1rem;
    /* background: red; */
  }
  .detail-list {
    background: #fff;
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
      background: #fff;

      .list-item {
        display: flex;
        flex-direction: column;
        background: #fff;
        ;

        .top {
          display: flex;
          margin-top: .2rem;

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
            flex-direction: column;
            justify-content: center;

            /* align-items: center; */
            .right-header {
              font-size: 0.34rem;
              font-weight: 500;
              margin-bottom: .1rem;
            }

            .right-price {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: .2rem;
              .star{
                color:#fa952f;
                margin:-0.08rem;
              }
              .location{
                margin-right:.7rem;
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
              margin-right:.2rem;
              div:not(.category){
                margin-left:.08rem;
                font-size: .22rem;
                color:#be9e4d;
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
          div{
            margin-left:.2rem;
          }
          .left{
            border: 1px solid #ff8226;
            border-radius: 0.045rem;
            color: #ff8226;
            letter-spacing: 0.17px;
            padding: 0.08rem;
            max-width: 1.6rem;
          }
          .img{
            img{
              width: .3rem;
              height: .3rem;
            }
          }
          .right{
            flex:1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>