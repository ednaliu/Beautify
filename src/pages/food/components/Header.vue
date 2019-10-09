<template>
  <div class="food">
    <div class="header-search" :class='background'>
      <div class="header-left">
        <router-link to='/' tag='div'>
          <span class="iconfont city" :class='color'>&#xe667;</span>
        </router-link>
      </div>
      <div class="header-input">
        <div class="iconfont inputicon">&#xe615;</div>
        <div class="input">请输入商家名，品类，或者商圈...
        </div>
      </div>
      <div class="header-right">
        <div class="iconfont" :class='color'>&#xe63a;</div>
      </div>
    </div>
    <div class="header" ref='header'>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'FoodHeader',
    data() {
      return {
        classcolor: '', //将头部字体图标颜色改变。
        changebackground: '' //将头部背景色改变
      }
    },
    computed: {
      ...mapState(['color', 'background'])
    },
    methods: {
      ...mapMutations(['changecolor']),
      handleScroll() {
        const top = document.body.scrollTop || document.documentElement.scrollTop
        if (top > 110) {
          this.changecolor({ classcolor: 'color', changebackground: 'background' })
          //classcolor 将头部字体图标颜色改变。
          // changebackground 将头部背景色改变
        } else {
          this.changecolor({})
        }
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
  .iconfont {
    color: #ccc;
    font-size: .4rem;
    font-weight: 700;

  }

  .color {
    color: #06c1ae;
  }

  .changecolor {
    color: #06c1ae;
  }

  .background {
    background: #fff;
  }

  .inputicon {
    color: black;
    padding: .1rem;
  }

  .food {
    background: url("//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@7732de7");

    /* .header { */
       height: 2.2rem;
      /* width: 7.5rem;  */
      background-size: contain;
      /* background-repeat: repeat; */
      border-bottom: 1px solid #DDD8CE;
      /* } */

      .header-search {
        height: .9rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 999;

        .header-left {}

        .header-input {
          display: flex;
          flex: 0 0 75%;
          align-items: center;
          background-color: #ebeced;
          padding: .1rem;
          box-sizing: border-box;
          border-radius: 11.3rem;
        }

        .header-right {
          .header-right-img {
            height: .47rem;
          }
        }
      }

    }
</style>