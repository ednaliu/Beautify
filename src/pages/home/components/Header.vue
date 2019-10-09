<template>
  <div>
    <div class="header">
      <div class="header-left">
        <router-link to='/city' tag='div'>
          {{this.city}}
          <span class="iconfont city">&#xe63b;</span>
        </router-link>
      </div>
      <div class="header-input">
        <div class="input">
          <span class="iconfont">&#xe615;</span>
          请输入商家名，品类，或者商圈...
        </div>
      </div>
      <div class="header-right">
        <img class='headerimg' src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt="">
      </div>
    </div>
    <div class="banner">
      <div class="img">
        <img class='imgone' src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt="">
      </div>
      <div class="midd">
        <div>省钱利器 购物超划算</div>
        <div class='midd-bot'>吃喝玩乐尽在美团</div>
      </div>
      <div class="right">
        <div class="rightone">去App</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: 'HomeHeader',
    computed:{
        ...mapState({
          city:'city'
        })
      },
  }
</script>
<style lang='less' scoped>
  @import '../../../assets/styles/varibles.less';

  .header {
    display: flex;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    display: flex;
    height: @headerHeight;
    line-height: @headerHeight;
    color: #fff;

    .header-left {
      width: 1.2rem;
      height: 1.01rem;
      line-height: 1.01rem;
      color: #222;
      text-align: center;
    }

    .header-input {
      flex: 1;
      color: #999;
      font-size: .26rem;
      display: flex;
      align-items: center;
      .input {
        flex: 1;
        background: #fff;
        border-radius: .2rem;
      line-height: .64rem;
        .iconfont {
          margin-left: .2rem;
        }
      }
    }
    .header-right {
      width: .94rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .headerimg {
        height: .48rem;
        width: .48rem;
      }
    }
  }

  .banner {
    background-color: #000;
    height: 1rem;
    position: relative;
    color: #fff;

    .img {
      height: 100%;
      position: absolute;
      left: .18rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .imgone {
        width: .72rem;
        height: .72rem;
      }
    }

    .midd {
      position: absolute;
      left: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 1rem;

      .midd-bot {
        font-size: .22rem;
        margin-top: .1rem;
        color: gray;
      }
    }

    .right {
      height: 100%;
      position: absolute;
      right: .3rem;
      display: flex;
      line-height: .6rem;
      align-items: center;

      .rightone {
        background-color: @bgColor;
        height: 0.6rem;
        padding: 0 .2rem;
        border-radius: .1rem;
      }
    }
  }
</style>