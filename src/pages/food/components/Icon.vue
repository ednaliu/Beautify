<template>
  <div class="food-icon">
    <div class='whole'>
      <div class="iconall" v-for='item in list' :key='item.id'>
        <div class="icon" :style='{backgroundColor:item.class}'>
          <span class="iconfont icon-img">&#xe601;</span>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoodIcon',
    props:{
      list:Array
    }
  }

</script>
<style lang='less' scoped>
  .whole {
    display: flex;
    flex-wrap: wrap;
    height: 3.57rem;
    background: #fff;
    
    .iconall {
      margin-top:.3rem;
      width: 1.87rem;
      height: 1.33rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon {
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        width: .9rem;
        border-radius: .45rem;
        margin-bottom: .25rem;
      }

      .icon-desc {
        color: #666;
      }
    }
  }
</style>