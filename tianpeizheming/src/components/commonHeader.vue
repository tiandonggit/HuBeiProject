<template>
  <div id="commonHeader">
    <div class="header-box cf">
      <div class="left fl pointer">
        <img src="../assets/img/logo_1.png" alt />
        <div>
          <p>湖北天沛哲明建设工程有限公司</p>
          <span>Hubei tianpei zheming construction engineering co. LTD</span>
        </div>
      </div>
      <div class="right fr">
        <span>联系电话：</span>
        <p>0716- 5208678</p>
      </div>
    </div>
    <div class="menu">
      <ul class="container">
        <li
          class="pointer"
          :class="{active: menu.isActive}"
          v-for="(menu, index) in menuList"
          :key="index"
          @click="selectMenu(index)"
        >{{menu.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  props: {
    msg: String
  },
  data() {
    return {
      menuList: [
        { name: "首页", isActive: true },
        { name: "关于我们", isActive: false },
        { name: "荣誉资质", isActive: false },
        { name: "产品中心", isActive: false },
        { name: "案例展示", isActive: false },
        { name: "联系我们", isActive: false }
      ]
    };
  },
  methods: {
    selectMenu(index) {
      this.menuList.forEach((v, e) => {
        if (index === e) {
          this.menuList[e].isActive = true;
        } else {
          this.menuList[e].isActive = false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/cssCommon";
#commonHeader {
  .header-box {
    width: 1200px;
    height: 108px;
    margin: 0 auto;
    padding: 23px 0 20px;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 73px;
        height: 65px;
        display: inline-block;
      }

      div {
        height: 65px;
        display: inline-block;
        margin-left: 18px;

        p {
          font-size: 30px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: @fontColor31;
          margin: 7px 0 12px;
          line-height: 29px;
        }

        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor28;
        }
      }
    }

    .right {
      padding-top: 15px;

      span {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColor00;
        line-height: 25px;
      }
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColor00;
        line-height: 25px;
      }
    }
  }

  .menu {
    background: @bgMenu;

    ul {
      height: 49px;

      li {
        float: left;
        width: 200px;
        text-align: center;
        line-height: 49px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColorff;

        &:hover {
          background: @bgMenuActive;
        }
      }
      li.active {
        background: @bgMenuActive;
      }
    }
  }
}
</style>
