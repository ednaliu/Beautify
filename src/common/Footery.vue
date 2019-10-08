<template>
  <div class="bottom">
    <div class="footer">
      <div class="category">
        <div class="check">查看全部团购</div>
        <div class="icon">
          <span class="iconfont city">&#xe637;</span>
        </div>
      </div>
      <div class="login-register-location">
        <div class="left">
          <div class="login">
            <button>登录</button>
          </div>
          <div class="register">
            <button>注册</button>
          </div>
        </div>
        <div class="location">
          <div class="city">城市：</div>
          <div class="citylocation">
            <span class="iconfont icon">&#xe686;</span>
            北京
          </div>
        </div>
      </div>
      <div class="footer-nav">
        <div class="home">首页</div>
        <div class="my">我的</div>
        <div class="download">美团下载</div>
        <div class="computer">电脑版</div>
        <div class="help">帮助</div>
      </div>
      <div class="links">
        <div class="movie">友情链接: 猫眼电影</div>
        <div class="comments">大众点评</div>
        <div>美团旅行</div>
        <div>榛果民宿</div>
      </div>
      <div class="downloadthing">
        <div>大众点评下载</div>
        <div>大众点评下载</div>
        <div>快驴进货商家合作</div>
      </div>
      <div class="resturant">美团点评餐饮学院</div>
      <div class="bottomline">
        <span class="line"></span>
        <span class="txt">©2019 美团网 &nbsp;京ICP证070791号</span>
        <span class="line"></span>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeFooter'
  }
</script>
<style lang='less' scoped>
  .bottom {
    background-color: #fff;

    .footer {
      margin-left: .2rem;
      display: flex;
      flex-direction: column;

      .category {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FE8C00;
        height: .8rem;
        border-bottom: 1px solid #DDD8CE;
        font-size: .30rem;
      }

      .login-register-location {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .84rem;

        .left {
          display: flex;
          justify-content: space-around;
          align-items: center;

          button {
            background: linear-gradient(135deg, #FFD000 0, #FFBD00 100%);
            width: 1.1rem;
            height: .54rem;
            border-radius: .08rem;
            margin-left: .5rem;
          }
        }

        .location {
          display: flex;
          align-items: center;
          margin-right: .2rem;

          .icon {
            color: #FFD000;
            font-weight: bold;
          }
        }

      }

      .footer-nav {
        margin-left: .3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FE8C00;
        height: .58rem;
        font-size: .22rem;

        div {
          border-right: 1px solid #333;
          padding-right: .4rem;
        }

        div:last-child {
          border: none;
        }

      }

      .links,
      .downloadthing {
        height: .2rem;
        margin-left: .3rem;
        margin-right: .2rem;
        margin-bottom: .3rem;
        display: flex;
        color: #646464;
        font-size: .18rem;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
      }

      .resturant {
        display: flex;
        justify-content: center;
        color: #646464;
        font-size: .18rem;
        margin-bottom: .4rem;
      }

      .bottomline {
        font-size: .22rem;
        text-align: center;
        color: #999;
        /* height: 60px;
        line-height: 60px; */
        margin-bottom: .5rem;

        .line {
          display: inline-block;
          width: 500x;
          border-top: 1px solid red;
        }

        .txt {
          vertical-align: -4px;
        }
      }
    }
  }
</style>