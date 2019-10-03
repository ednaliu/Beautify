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
        <div class="city row">上海</div>
      </div>
      <div class="visited">
        <h4 class="latestevisited title">热门城市</h4>
        <div class="hotcity table">
          <div class="rows">
            <div>北京</div>
            <div>上海</div>
            <div>广州</div>
            <div>深圳</div>
            <div>天津</div>
            <div>重庆</div>
            <div>西安</div>
            <div>杭州</div>
            <div>南京</div>
            <div>武汉</div>
            <div>成都</div>
          </div>
        </div>
      </div>
      <div class="allcity">
        <div class="alphabet">
          <div class="row">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name :'CityContend',
    props:{
      cities:Array
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
    height: 100rem;

    .content {
      color: #333;
      margin-left: .3rem;
      margin-right: .4rem;
      display: flex;
      flex-direction: column;
      justity-content: space-between;

      /* align-items: center; */
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
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .rows {
          width: 100%;
          display: flex;
          /* flex-direction:row; */
          flex-wrap: wrap;
          justify-content: flex-start;
          /* align-items: center; */

          div {
            height: .8rem;
            line-height:.8rem;
            box-sizing: border-box;
            flex: 0 0 25%;
            /* border: 1px solid red; */
            text-align: center;
          }
        }
      }
    }
  }
</style>