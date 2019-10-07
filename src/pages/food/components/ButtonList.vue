<template>
  <div class="details-list" @click='handleBlank' :class='classVar'>
    <div style="height: 80%; overflow:scroll">
      <!-- <div class="detail" :class='classpos'> -->
      <div class="detail" :class='classpos'>
        <div class="header" :class="show[0]?'actived':''" v-on:click.stop='handleClick("0")'>
          全部类目
          <div class="iconfont city">&#xe631;</div>
        </div>
        <div class="header" :class="show[1]?'actived':''" v-on:click.stop='handleClick("1")'>
          附近商家
          <span class="iconfont city">&#xe631;</span>
        </div>
        <div class="header" :class="show[2]?'actived':''" v-on:click.stop='handleClick("2")'>
          智能排序
          <span class="iconfont city">&#xe631;</span>
        </div>
        <div class="header" :class="show[3]?'actived':''" v-on:click.stop='handleClick("3")'>
          筛选
          <span class="iconfont city">&#xe631;</span>
        </div>
      </div>
      <div class="list">
        <div class="buttons">
          <div class="buttonone button" v-show='show[0]'>
            <div>
              <span class="iconfont city">&#xe63b;</span>全部美食
            </div>
            <div>小吃快餐</div>
            <div>火锅</div>
            <div>其他美食</div>
            <div>烧烤烤肉</div>
            <div>面包甜点</div>
            <div>川湘菜</div>
            <div>北京菜</div>
            <div>聚餐宴请</div>
            <div>小吃快餐</div>
            <div>火锅</div>
            <div>面包甜点</div>
            <div>川湘菜</div>
            <div>北京菜</div>
            <div>聚餐宴请</div>
            <div>小吃快餐</div>
            <div>火锅</div>
            <div>其他美食</div>
          </div>
          <div class="buttontwo button" v-show='show[1]'>
            <div>
              <span class="iconfont city">&#xe63b;</span>全城
            </div>
            <div>海淀区</div>
            <div>朝阳区</div>
            <div>石景山区</div>
            <div>西城区</div>
            <div>东城区</div>
            <div>昌平区</div>
            <div>通州区</div>
            <div>大兴区</div>
            <div>顺义区</div>
          </div>
          <div class="buttonthree button" v-show='show[2]'>
            <div>
              <span class="iconfont city">&#xe63b;</span>全城
            </div>
            <div>离我最近</div>
            <div>好评优先</div>
            <div>人气最高</div>
          </div>
          <div class="buttonfour button" v-show='show[3]'>
            <div>
              <span class="iconfont city">&#xe63b;</span>全城
            </div>
            <div>昌平区</div>
            <div>通州区</div>
            <div>大兴区</div>
            <div>顺义区</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'
  export default {
    name: 'ButtonList',
    data() {
      return {
        show: [0, 0, 0, 0],
        classVar: '',
        classpos:''
      }
    },
    methods: {
      ...mapMutations(['changecolor']),
      handleClick(id) {
        this.show = [0, 0, 0, 0]
        this.show[id] = 1
        this.classVar = 'divfixed'
        this.changecolor({ classcolor: 'color', changebackground: 'background' })
      },
      handleBlank() {
        this.classVar = ''
        this.show = [0, 0, 0, 0]
        this.changecolor({})
      },
      handleScroll() {
        const top = document.documentElement.scrollTop 
        if(top>250){
          this.classpos = 'fixed'
        }else{
          this.classpos = ''
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
  .actived {
    color: #06c1ae;
  }
  /* 点击fix */
  .divfixed {
    position: fixed;
    top: .68rem;
    width: 100%;
    height: 100%;
    background-color: #000000b3;
    overflow-y: scroll;
    z-index: 100;
  }
/* 滑动fix */
  .fixed {
    position: fixed;
    top: .68rem;
    width: 100%;
    z-index: 99;
  }

  .detail {
    background: #fff;
    margin-top: .2rem;
    height: .84rem;
    color: #666;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #DDD8CE;

    .header {
      display: flex;
      height: .84rem;
      align-items: center;

      .iconfont {
        font-size: .19rem;
        color: #ccc;
      }

    }
  }

  .list {
    .buttons {
      background: #fff;
      /* margin-left:.6rem; */
      display: flex;
      flex-direction: column;
      font-size: 0.28rem;
      color: #333;

      .button {
        div {
          padding-left: 1rem;
          border-bottom: 1px solid #DDD8CE;
          height: .84rem;
          line-height: .84rem;

        }
        div:first-child {
          padding-left: .6rem;
          color: #06c1ae;

          iconfont {
            margin-right: .2rem;
          }

        }
      }
    }
  }
</style>