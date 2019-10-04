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
    data() {
      return {
        list: [{
          "id": "0001",
          "class": "#fd9d21",
          "desc": "美食"
        },
        {
          "id": "0002",
          "class": "#ff6767",
          "desc": "猫眼电影"
        },
        {
          "id": "0003",
          "class": "#8a90fa",
          "desc": "酒店"
        },
        {
          "id": "0004",
          "class": "#fed030",
          "desc": "休闲娱乐"
        },
        {
          id: '0005',
          class: '#fd9d21',
          desc: '外卖'
        },
        {
          id: '0006',
          class: '#fed030',
          desc: 'KTV'
        },
        {
          id: '0007',
          class: '#4dc6ee',
          desc: '周边游'
        },
        {
          id: '0008',
          class: '#ff80c2',
          desc: '丽人'
        }
        ]
      }
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
        /* background-color: ; */
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