<template>
  <div>
    <div class='all'>
      <swiper :options="swiperOption">
        <swiper-slide v-for='(page, index) in pages' :key='index'>
          <div class='whole'>
            <div class="iconall" v-for='item in page' :key='item.id'>
              <!-- <div class="icon" :class='item.class'> -->
              <div class="icon" :style='{backgroundColor:item.class}'>
                <span class="iconfont icon-img">&#xe604;</span>
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcon',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
        },
        "list": [{
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
        },
        {
          id: '0009',
          class: '#A8DD99',
          desc: '小吃快餐'
        },
        {
          id: '0010',
          class: '#f82',
          desc: '生活服务'
        },
        {
          id: '0011',
          class: '#00d3be',
          desc: '今日新单'
        },

        ]
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 10);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang='less' scoped>
  .iconfont {
    width: .5rem;
    height: .45rem;
    color: #fff;
  }

  .swiper-pagination{
    position: static;
  }
  .swiper-pagination /deep/ .swiper-pagination-bullet-active {
    background-color: red;
    /* margin-top: .5rem; */
  }

  .all {
    overflow: hidden;
    height: 0;
    width: 100%;
    background-color: #fff;
    padding-bottom: 48%;

    .whole {
      display: flex;
      flex-wrap: wrap;

      .iconall {
        width: 1.5rem;
        height: 1.62rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          /* background-color: ; */
          height: .8rem;
          line-height: .8rem;
          text-align: center;
          width: .8rem;
          border-radius: .4rem;
          margin-bottom: .15rem;
        }
      }
    }

  }
</style>