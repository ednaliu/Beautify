<template>
  <div>
    <div class='all'>
      <swiper :options="swiperOption">
        <swiper-slide v-for='(page, index) in pages' :key='index'>
          <div class='whole'>
            <div v-for='item in page' :key='item.id' class="icon-item">
              <router-link :to='/food/+item.id' tag='div'>
                <div class="iconall">
                  <div class="icon" :style='{backgroundColor:item.class}'>
                    <span class="iconfont icon-img">&#xe604;</span>
                  </div>
                  <p class="icon-desc">{{item.desc}}</p>
                </div>
              </router-link>
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
          }
        }
      }
    },
    props: {
      lists: Array
    },
    computed: {
      pages() {
        const pages = [];
        this.lists.forEach((item, index) => {
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

  .swiper-pagination {
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
      align-items: center;

      .icon-item {
        flex: 0 0 20%;
      }

      .iconall {
        margin: auto;
        width: 1.5rem;
        height: 1.62rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          height: .8rem;
          line-height: .8rem;
          text-align: center;
          width: .8rem;
          border-radius: .4rem;
          margin-bottom: .15rem;
        }

        .icon-desc {
          color: #666;
          text-align: center
        }
      }
    }

  }
</style>