<template>
  <div class="wrapper" ref='letterwrapper'>
    <div>
      <div class="allallp title">全部城市</div>
      <div class="content">
        <div class="row">
          <div class="everyallp item" v-for='(itemlist,key) in cities' :key='key' @click='handleLetterClick'>
            <div>{{key}}</div>
          </div>
        </div>
        <div ref='letterwrapper'>
          <div>
            <div class="detail" v-for='(itemlist,key) in cities' :ref='key'>
              <div class="alphabet">{{key}}</div>
              <div class="cities" v-for='item in itemlist' :key='item.id' @click='handleCityClick(item.name)'>
                <div>{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      cities: Object
    },
    data() {
      return {
        letters: ''//定义letters，在点击AB字母的时候再赋值。
      }
    },
    methods: {
      ...mapMutations(['changecity']),
      handleCityClick(city) {
        this.$router.push('/')
        this.changecity(city)
      },
      handleLetterClick(e) {
        //父组件监听letterchange，获取letter的值，然后再watch，但这种方法太复杂。
        // this.$emit('letterchange', e.target.innerText)
        this.letters = e.target.innerText
      }
    },
    watch: {
      letters() {
        const element = this.$refs[this.letters][0]//dom元素
        // console.log(element.offsetTop + 'offsetTop')
        // console.log(element.offsetHeight +'offsetHeight')
        // console.log(element.scrollHeight +'scrollHeight')
        // console.log(element.scrollTop +'scrollTop')
        //  TODO: 跳转无效，需要研究B-Scroll使用原理方法
        // const element = this.$refs[this.letters][0]//dom元素
        // this.scroll.scrollToElement(element)
        // 暂定解决方法
        // 不用B-Scoll，也可实现。
        document.documentElement.scrollTop = element.offsetTop
        // console.log(document.body.scrollTop)
      }
    },
    mounted() {
      // this.scroll = new BScroll(this.$refs.letterwrapper,{
      //   click:true//不设置的话，使用better-scroll里面的click事件不可点击
      // })//创建滑动功能
    }
  }

</script>
<style lang='less' scoped>
  .title {
    font-size: .3rem;
    font-weight: 600;
    margin-bottom: .2rem;
    margin-left: .3rem;
    margin-top: .3rem;

  }

  .content {
    background: #fff;
    /* height: 100rem; */
    margin-left: .3rem;
    margin-right: .4rem;

    .row {
      /* height: 2.4rem; */
      border-radius: .06rem;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      color: #FE8C00;

      .item {
        flex: 0 0 20%;
        height: .8rem;
        line-height: .8rem;
        box-sizing: border-box;
        text-align: center;

      }
    }

    .detail {
      display: flex;
      flex-wrap: wrap;
      color: #333;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;

      /* align-items: flex-start; */
      .alphabet {
        height: 1.6rem;
        line-height: 1.6rem;
        flex: 0 0 25%;
        color: #B7B7B7;
        font-size: 1rem;
      }

      .cities {
        height: .8rem;
        line-height: .8rem;
        flex: 0 0 25%;
        box-sizing: border-box;
      }

    }
  }
</style>