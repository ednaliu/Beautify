<template>
  <div class="contents">
    <div class="content">
      <div class="location row">
        <div class="city">定位城市：</div>
        <div class="iconfont icon">&#xe686;</div>
        <div class="cityclear">北京</div>
      </div>
      <div class="visited">
        <h4 class="latestevisited title">最近访问</h4>
        <div class="city row">{{this.city}}</div>
      </div>
      <div class="visited">
        <h4 class="latestevisited title">热门城市</h4>
        <div class="hotcity table">
          <div class="rows" v-for='item in hotCities' :id=item.id
          @click='handleCityClick(item.name)'>
            <div class="item">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <city-list :cities='cities'  ></city-list>
  </div>
</template>

<script>
  import CityList from './List.vue'
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: 'CityContend',
    props: {
      cities: Object,
      hotCities: Array
    },
    components:{
      CityList
    },
    computed:{
        ...mapState({
          city:'city'
        })
      },
    methods:{
      ...mapMutations(['changecity']), 
      handleCityClick(city){
        this.$router.push('/')
        this.changecity(city)
      },
    }
  }

</script>
<style lang='less' scoped>
  .row {
    border-radius: .06rem;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    padding-left: .2rem;
    height: .86rem;
    margin-top: .2rem;
    display: flex;
    align-items: center;
    font-size: .28rem;
    color: #222;
    margin-bottom: .3rem;
  }

  .title {
    font-size: .3rem;
    font-weight: 600;
    margin-bottom: .2rem;
  }

  .contents {
    background: #cccccc05;
    /* height: 100rem; */

    .content {
      color: #333;
      margin-left: .3rem;
      margin-right: .4rem;
      display: flex;
      flex-direction: column;
      justity-content: space-between;

      .location {
        .icon {
          color: #FE8C00;
        }

        .cityclear {
          font-size: weight;
          font-family: PingFangSC-Medium;
        }
      }

      .table {
        height: 2.4rem;
        border-radius: .06rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;

        .rows {
          height: .8rem;
          line-height: .8rem;
          box-sizing: border-box;
          flex: 0 0 25%;
          text-align: center;

          .item {
            border-bottom: .5px solid #ccc;
            border-right: .5px solid #ccc;

          }
        }
      }
    }
  }
</style>