<template>
  <div class="header">
    <div class="header-nav">
      <router-link to='/' tag='div'>
      <div class="nav-left">
          <i class="el-icon-arrow-left"></i>
      </div>
    </router-link>
      <div class="nav-middle">团购详情</div>
      <div class="nav-right">
        <i class="el-icon-star-off"></i>
        <i class="el-icon-s-operation"></i>
      </div>
    </div>
    <div class="imgs">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
  }

</script>
<style lang='less' scoped>
  .header-nav{
    height: 1.02rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #06c1ae;
    font-size: 0.40rem;
    padding-right:.2rem;
    color:#fff;
    font-weight: 600;
  }
  .imgs{
      /* overflow: hidden; */
      width: 100%;
      /* height: 0; */
      /* padding-bottom: 29%; */
      /* background: #ccc; */
      .img{
        /* width: 7.5rem; */
        height: 2.2rem;
        background: url("//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@7732de7");
        background-size: contain;
      }

  }
</style>