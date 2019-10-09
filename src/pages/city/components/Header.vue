<template>
  <div class="header">
    <div class="header-all">
      <div class="arr">
        <router-link to='/' tag='div'>
          <span class="iconfont icon">&#xe667;</span>
        </router-link>
      </div>
      <div class="city">选择城市</div>
      <div class="house">
        <span class="iconfont icon">&#xe63d;</span>
        <span class="iconfont icon">&#xe615;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }

</script>
<style lang='less' scoped>
  @import '../../../assets/styles/varibles.less';

  .header {
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);

    .header-all {
      height: 1.01rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: .1rem;
      margin-right: .4rem;
      color: #222;

      .icon {
        font-size: .5rem;
      }

      .city {
        font-size: .30rem;
      }
    }
  }
</style>