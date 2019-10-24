<template>
  <div id="commonFooter">
    <div class="footer">
      <div class="top">
        <ul class="cf">
          <li
            class="fl pointer"
            v-for="(menu, index) in menuList"
            :key="index"
            @click="selectMenu(index)"
          >
            <span class="pointer">{{menu.name}}</span>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="container cf">
          <div class="left fl">
            <div class="logo-box">
              <img src="../assets/img/logo_2.png" alt />
            </div>
            <div class="info">
              <p class="name">湖北天沛哲明建设工程有限公司</p>
              <p>地址: 武汉市江汉区江兴路22号B栋3楼305室</p>
              <p>电话: 0716-5208678</p>
              <p>手机: 135 8840 7189</p>
            </div>
          </div>
          <div class="right fr">
            <img src="../assets/img/QRCode.png" alt />
            <p>扫描关注官方微信</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonFooter",
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
    selectMenu() {
      // 跳转相应路由
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#commonFooter {
  .footer {
    height: 231px;
    background: @bgMenu;

    .top {
      width: 960px;
      margin: 0 auto;
      padding: 22px 0 20px;

      ul {
        li {
          text-align: center;
          width: 160px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 16px;
          border-right: 1px solid @borderff;

          &:last-child {
            border: none;
          }
        }
        span {
          color: @fontColorff;

          &:hover {
            border-bottom: 1px solid @borderff;
          }
        }
      }
    }

    .bottom {
      border-top: 1px solid @borderFooter;
      padding-top: 33px;

      .left {
        display: flex;
        align-items: center;
        justify-content: center;

        .logo-box {
          padding-right: 111px;
          border-right: 1px solid @borderFooter;

          img {
            display: block;
            width: 107px;
          }
        }

        .info {
          margin-left: 111px;

          p {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColorC9;
            line-height: 21px;
          }

          p.name {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: @fontColorff;
            line-height: 18px;
            margin-bottom: 14px;
          }
        }
      }

      .right {
        img {
          width: 96px;
        }
        p {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColorff;
          line-height: 13px;
        }
      }
    }
  }
}
</style>
