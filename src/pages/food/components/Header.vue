<template>
  <div class="food">
    <div class="header">
      <div class="header-search">
        <div class="header-left">
          <router-link to='/' tag='div'>
            <span class="iconfont city">&#xe667;</span>
          </router-link>
        </div>
        <div class="header-input">
          <div class="iconfont inputicon">&#xe615;</div>
          <div class="input">请输入商家名，品类，或者商圈...
          </div>
        </div>
        <div class="header-right">
          <div class="iconfont">&#xe63a;</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'FoodHeader'
  }

</script>
<style lang='less' scoped>
  .iconfont {
    color: #fff;
    font-size: .4rem;
    font-weight: 700;
  }

  .inputicon {
    color: black;
    padding: .1rem;
  }

  .food {
    .header {
      height: 2.2rem;
      width: 7.5rem;
      background: url("//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@7732de7") repeat-x;
      background-size: cover;
      background-repeat: repeat;
      border-bottom: 1px solid #DDD8CE;

      .header-search {
        height: .9rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: .015rem;

        .header-left {
          width: 1.05rem;
        }

        .header-input {
          display: flex;
          flex: 1;
          align-items: center;
          background-color: #fff;
          padding: .1rem;
          border-radius: .3rem;
        }

        .header-right {
          width: 1.05rem;
          margin-left: .2rem;
          color: red;

          .header-right-img {
            height: .47rem;
          }
        }
      }
    }

  }
</style>