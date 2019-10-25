<template>
  <div id="aboutUs">
    <commonHeader :num="num" />

    <div class="section">
      <commonTop :BgImg="BgImg" :ChName="ChName" :EnName="EnName" />

      <div class="content container cf">
        <img src="../assets/img/img_1.png" alt />
        <p>湖北天沛哲明，中国现代防水材料创新型企业！</p>
        <span>湖北，九省通衢，经济高速发展。湖北荆州，中国防水材料生产基地，湖北省五大区域性中心城市之一。湖北公安经济开发区青吉工业园，湖北首批9个省级开发区之一，湖北天沛哲明建设工程有限公司坐落于此。公司始终坚持“诚信、务实、卓越、创新”的企业理念，致力于系统解决防水问题的探索和研究，现已发展成为一家专业从事防水产品研发、制造、销售及施工服务于一体的现代化防水企业。经过十余年的砥砺奋进，湖北天沛哲明已拥有荆楚源知名品牌，并成功通过ISO9001质量管理体系认证，在防水堵漏等方面积累了大量实践经验和施工方案，公司成为湖北省建筑防水协会副会长单位，公司先后被湖北省建筑防水协会评为优秀会员单位、优秀生产企业、最具发展力企业。</span>
        <div class="block-box cf">
          <div class="block fl">诚信</div>
          <div class="block fl">务实</div>
          <div class="block fl">卓越</div>
          <div class="block fl">创新</div>
        </div>
      </div>
      <div class="menu">
        <div class="container cf">
          <div
            class="cell fl"
            :style="{backgroundImage: 'url(' + item.img + ')'}"
            v-for="(item, index) in menuList"
            :key="index"
          >
            <p>{{item.CName}}</p>
            <span>{{item.EName}}</span>
          </div>
        </div>
      </div>
    </div>

    <commonFooter />
  </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue";
import commonFooter from "@/components/commonFooter.vue";
import commonTop from "@/components/commonTop.vue";

export default {
  name: "aboutUs",
  components: { commonHeader, commonFooter, commonTop },
  data() {
    return {
      num: 1,
      BgImg: require("../assets/img/about_bg.png"),
      ChName: "关于我们",
      EnName: "About us",
      menuList: [
        {
          img: require("../assets/img/icon_1.png"),
          CName: "研发",
          EName: "research"
        },
        {
          img: require("../assets/img/icon_2.png"),
          CName: "制造",
          EName: "manufacturing"
        },
        {
          img: require("../assets/img/icon_3.png"),
          CName: "销售",
          EName: "sales"
        },
        {
          img: require("../assets/img/icon_4.png"),
          CName: "施工",
          EName: "road work"
        },
        {
          img: require("../assets/img/icon_5.png"),
          CName: "服务",
          EName: "service"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#aboutUs {
  .section {
    .content {
      padding-top: 39px;

      img {
        width: 100%;
        margin-bottom: 34px;
      }

      p {
        margin-bottom: 16px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColor00;
        line-height: 16px;
      }

      span {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontcolor3C;
        line-height: 30px;
      }

      .block-box {
        padding: 36px 0 59px;

        .block {
          width: 247px;
          height: 140px;
          background: url("../assets/img/about_1.png") center center no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 70px;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: @fontColorff;

          &:nth-child(2) {
            background: url("../assets/img/about_2.png") center center no-repeat;
          }

          &:nth-child(3) {
            background: url("../assets/img/about_3.png") center center no-repeat;
          }

          &:last-child {
            background: url("../assets/img/about_4.png") center center no-repeat;
            margin-right: 0;
          }
        }
      }
    }

    .menu {
      height: 75px;
      padding: 14px 0;
      background: @bgColorF0;

      .cell {
        width: 184px;
        height: 46px;
        margin-right: 70px;
        padding-left: 62px;
        border-right: 1px solid @borderB5;
        background-position: left center;
        background-repeat: no-repeat;

        &:last-child {
          margin-right: 0;
          border-right: 0;
        }

        p {
          margin: 5px 0 2px;
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: @fontColor5A;
          line-height: 19px;
        }

        span {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor5A;
          line-height: 12px;
        }
      }
    }
  }
}
</style>