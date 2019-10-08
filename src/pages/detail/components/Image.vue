<template>
  <div class='detail'>
    <div class="top" @click='handleimgsClick'>
      <div class="des">
        <div class="title">好伦哥</div>
        <div class="detail">永定路店单人自助餐1人次</div>
      </div>
    </div>
    <common-gallary :imgs='gallaryImgs' v-show='showgallary' @change='handlechange'></common-gallary>
    <div class="middle" :class='classvar' ref='middle'>
      <div class="left">
        <span class="price">67</span>
        <span class="yuan">元</span>
        <span class="pricesclear">门市价:69元</span>
      </div>
      <div class="right">立即抢购</div>
    </div>
    <div class="bottom">
      <div class="bott-top">
        <div>
          <span class="iconfont ">&#xe8b2;</span>
          支持随时退款
        </div>
        <div>
          <span class="iconfont ">&#xe770;</span>
          支持过期自动退
        </div>
      </div>
      <div class="bott-bott">
        <span class="iconfont ">&#xe622;</span>
        已售168337
      </div>
    </div>
    <div class="arr" v-show='showarror' @click='handletotop'>
      <span class="iconfont ">&#xe62b;</span>
    </div>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary.vue'
  export default {
    name: 'DetailImage',
    components: {
      CommonGallary
    },
    props: {
      gallaryImgs: Array
    },
    data() {
      return {
        showgallary: false,
        classvar: '',
        showarror: false
      }
    },
    methods: {
      handleimgsClick() {
        this.showgallary = true
      },
      handlechange() {
        this.showgallary = false
      },
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 355) {
          this.classvar = 'topfix';
        } else {
          this.classvar = '';
        }
        if (top > 1000) {
          this.showarror = true
        } else {
          this.showarror = false
        }
      },
      handletotop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
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
  .topfix {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .arr {
    position: fixed;
    bottom: .8rem;
    right: 0.2rem;
    heigth: .86rem;
    width: .86rem;
    text-align: center;
    line-height: .86rem;
    background: #06c1ae;
    border-radius: 50%;
    color: #fff;
  }

  .detail {
    .top {
      background: url("//p1.meituan.net/deal/dcd57da5ef098fcd42d4da61bfec924782325.jpg");
      width: 7.5rem;
      height: 3.9rem;
      background-size: cover;
      position: relative;

      .des {
        position: absolute;
        bottom: .25rem;
        left: 0;
        right: 0;
        z-index: 99;
        background: -webkit-linear-gradient(bottom, #00000094, #0000004d 64%, #0000);
        font-size: .28rem;
        color: #fff;
        margin-left: .2rem;

        .title {
          margin-bottom: .1rem;
          font-size: .38rem;
          font-weight: 600;
        }
      }

    }

    .middle {
      padding-left: .2rem;
      padding-right: .2rem;
      box-sizing: border-box;
      height: 1.23rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-bottom: 1px solid #ddd8ce;

      .left {
        color: #06c1ae;
        font-size: .28rem;

        .price {
          font-size: .66rem;
        }

        .pricesclear {
          color: #999;
        }
      }

      .right {
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
        padding: 0 .32rem;
        font-size: .4rem;
        text-align: center;
        background-color: #f90;
        color: #fff;
        border-radius: .08rem;
      }
    }

    .bottom {
      background: #fff;
      font-size: .28rem;
      height: 1.86rem;
      padding: .28rem .2rem;

      .bott-top {
        margin-left: .2rem;
        height: .56rem;
        display: flex;
        justify-content: space-between;
        color: #6bbd00;
        margin-right: .2rem;
      }

      .bott-bott {
        margin-left: .2rem;


      }

    }
  }
</style>