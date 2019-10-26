<template>
  <div id="productDetails">
    <commonHeader :num="num" />

    <div class="section">
      <div class="public-bg">
        <img src="../assets/img/product_bg.png" alt />
      </div>

      <div class="public-title container">
        <span>首页>{{ChName}}</span>
      </div>
      <div class="content container cf">
        <div class="left fl">
          <div class="top">
            <div class="product-classify">产品分类</div>
            <div class="product-menu">防水卷材</div>
            <div class="product-menu">防水涂料</div>
          </div>
          <div class="bottom">
            <div class="product-classify">产品分类</div>
            <div class="hot-product" :class="{active: hotProduct.isActive}" @click="hotPproduct(hotProduct.id)" v-for="(hotProduct, index) in hotProductList" :key="index">{{hotProduct.name}}</div>
          </div>
        </div>
        <div class="right fr">
          <div class="top cf">
            <div class="img-box fl">
              <img :src="productDetails.img" alt="">
            </div>
            <div class="info fr">
              <p class="title">{{productDetails.name1}} {{productDetails.name2}}</p>
              <p>所属分类：防水卷材</p>
              <p>点击次数：500</p>
              <p>上架时间：2019/10/23</p>
              <div class="btn pointer">立即询价</div>
            </div>
          </div>
          <div class="bottom">
            <div class="details">产品详情</div>
            <div class="text" v-html="productDetails.content"></div>
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

export default {
  name: "productDetails",
  components: { commonHeader, commonFooter },
  data() {
    return {
      num: 3,
      ChName: "产品中心",
      id: 0,
      hotProductList: [
          {name: "TPZM-001自粘聚合物改性沥青防水卷材", id: 0, isActive: false},
          {name: "TPZM-002 预铺/湿铺防水卷材", id: 1, isActive: false},
          {name: "TPZM-003 SBS弹性体改性沥青防水卷材", id: 2, isActive: false},
          {name: "TPZM-004 耐根穿刺弹性体(SBS)耐根穿刺弹性体", id: 3, isActive: false},
          {name: "TPZM-005 金属聚Z烯复合沥青自金属聚Z烯复合沥青自", id: 4, isActive: false},
          {name: "TPZM-006 改性沥青聚烯胎耐根穿改性沥青聚烯胎耐根穿……", id: 5, isActive: false},
          {name: "TPZM-007 强力交叉叠压膜高分子强力交叉叠压膜高分子……", id: 6, isActive: false},
          {name: "TPZM-008 强力膜高分子反应型自沥青聚烯胎耐根穿改性沥青聚烯胎耐根穿……", id: 7, isActive: false},
      ],
      productDetailsList: [
            {
                name1: "TPZM-001",
                name2: "自粘聚合物改性沥青防水卷材",
                img: require("../assets/img/product_1.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-002",
                name2: "预铺/湿铺防水卷材",
                img: require("../assets/img/product_2.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-003",
                name2: "SBS弹性体改性沥青防水卷材",
                img: require("../assets/img/product_3.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-004",
                name2: "耐根穿刺弹性体(SBS)改性沥青防水卷材",
                img: require("../assets/img/product_4.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-005",
                name2: "金属聚Z烯复合沥青自粘防水卷材",
                img: require("../assets/img/product_5.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-006",
                name2: "改性沥青聚烯胎耐根穿刺防水卷材",
                img: require("../assets/img/product_6.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-007",
                name2: " 强力交叉叠压膜高分子耐久反应粘 防水卷材",
                img: require("../assets/img/product_7.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-008",
                name2: "强力膜高分子反应型自粘防水卷材",
                img: require("../assets/img/product_8.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-009",
                name2: "高分子片材自粘胶膜防水卷材",
                img: require("../assets/img/product_9.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-010",
                name2: "高分子自粘胶膜防水卷材(非沥青基)",
                img: require("../assets/img/product_10.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-011",
                name2: "聚乙烯丙(涤)纶高分子复合防水卷材",
                img: require("../assets/img/product_11.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            },
            {
                name1: "TPZM-012",
                name2: "聚氯乙烯( PVC )防水卷材",
                img: require("../assets/img/product_12.png"),
                content: "111111",
                count: "500",
                time: "2019/10/26"
            }
        ],
      productDetails: "",
      total: 6
    };
  },
  watch: {
    $route(val) {
      this.id = val.query.id;
      this.getProductDetails();
    }
  },
  created() {
    this.id = this.$route.query.id ? this.$route.query.id : 0;
    this.productDetails = this.productDetailsList[this.id];
  },
  methods: {
    getProductDetails() {
        this.hotProductList.forEach((v, e) => {
            if(this.id === this.hotProductList[e].id) {
                this.hotProductList[e].isActive = true;
            } else {
                this.hotProductList[e].isActive = false;
            }
        });
      this.productDetails = this.productDetailsList[this.id];
    },
    hotPproduct(id) {
        this.$router.push({ name: "productDetails", query: { id: id } });
    },
    cut(num) {
      // 0: 上一篇； 1：下一篇
      if (num === 0) {
        if (this.id === 0) {
          return;
        }
        this.id--;
      } else {
        if (this.id === this.productDetailsList.length) {
          return;
        }
        this.id++;
      }
      this.$router.push({ name: "productDetails", query: { id: this.id } });
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#productDetails {
  .section {
    .public-title {
      .title {
        text-align: center;
        margin-top: 31px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColor00;
        line-height: 24px;
      }
    }

    .content {
      padding: 21px 0 41px;

      .left {
        width: 277px;

        .product-classify {
          height: 51px;
          background: @bgMenu;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColorff;
          line-height: 51px;
          text-align: center;
        }

        .top {
          margin-bottom: 21px;
          text-align: center;
          border: 1px solid @borderBF;
          border-top: none;

          .product-menu {
            height: 63px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor00;
            background: @bgColorF7;
            border-top: 1px solid @borderDC;
            line-height:63px;
            cursor: pointer;

            &:hover {
              background: @bgMenu;
              color: @fontColorff;
            }
          }
        }

        .bottom {
          border: 1px solid @borderBF;
          border-top: none;

          .hot-product {
            height: 45px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor50;
            background: @bgColorF7;
            border-top: 1px solid @borderDC;
            line-height: 45px;
            cursor: pointer;
            padding-left: 9px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:hover {
              background: @bgMenu;
              color: @fontColorff;
            }
          }

          .active {
            background: @bgMenu;
            color: @fontColorff;
          }
        }
      }

      .right {
        width: 888px;

        .top {
          .img-box {
            width: 348px;
            height: 243px;
            overflow: hidden;

            img {
              width: 100%;
            }
          }

          .info {
            width: 493px;

            p {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: @fontColor4D;
              line-height: 14px;
              padding-bottom: 8px;
              margin-bottom:13px;
              border-bottom: 1px solid @borderE5;
            }

            p.title {
              font-size: 20px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: @fontColor4D;
              line-height: 20px;
              margin-bottom: 25px;
              border-bottom: none;
            }

            .btn {
              margin-top: 43px;
              width:139px;
              height:45px;
              background:@bgMenu;
              border:1px solid @borderBF;
              color: @fontColorff;
              border-radius:10px;
              text-align: center;
              line-height: 45px;
            }
          }
        }

        .bottom {
          margin-top: 16px;

          .details {
            width:113px;
            height:43px;
            text-align: center;
            background: @bgColorDC;
            font-size:16px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color: @fontColor14;
            line-height:43px;
          }

          .text {
            padding: 22px 16px 30px;
            border: 1px solid @borderDC;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor14;
            line-height: 25px;
          }
        }
      }
    }
  }
}
</style>