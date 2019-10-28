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
            <div class="product-menu" :class="{active: productDetails.id <= 15}">防水卷材</div>
            <div class="product-menu" :class="{active: productDetails.id > 15}">防水涂料</div>
          </div>
          <div class="bottom">
            <div class="product-classify">热门产品</div>
            <div
              class="hot-product"
              :class="{active: hotProduct.isActive}"
              @click="hotPproduct(hotProduct.id)"
              v-for="(hotProduct, index) in hotProductList"
              :key="index"
            >{{hotProduct.name}}</div>
          </div>
        </div>
        <div class="right fr">
          <div class="top cf">
            <div class="img-box fl">
              <img :src="productDetails.img" alt />
            </div>
            <div class="info fr">
              <p class="title">{{productDetails.name1}} {{productDetails.name2}}</p>
              <p>所属分类：{{productDetails.id > 12 ? "防水涂料" : "防水卷材"}}</p>
              <p>点击次数：{{productDetails.count}}</p>
              <p>上架时间：{{productDetails.time}}</p>
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
        { name: "TPZM-001自粘聚合物改性沥青防水卷材", id: 1, isActive: false },
        { name: "TPZM-002 预铺/湿铺防水卷材", id: 2, isActive: false },
        { name: "TPZM-003 SBS弹性体改性沥青防水卷材", id: 3, isActive: false },
        {
          name: "TPZM-004 耐根穿刺弹性体(SBS)耐根穿刺弹性体",
          id: 4,
          isActive: false
        },
        {
          name: "TPZM-005 金属聚Z烯复合沥青自金属聚Z烯复合沥青自",
          id: 5,
          isActive: false
        },
        {
          name: "TPZM-006 改性沥青聚烯胎耐根穿改性沥青聚烯胎耐根穿……",
          id: 6,
          isActive: false
        },
        {
          name: "TPZM-007 强力交叉叠压膜高分子强力交叉叠压膜高分子……",
          id: 7,
          isActive: false
        },
        {
          name:
            "TPZM-008 强力膜高分子反应型自沥青聚烯胎耐根穿改性沥青聚烯胎耐根穿……",
          id: 8,
          isActive: false
        }
      ],
      productDetailsList: [
        {
          id: 1,
          name1: "TPZM-001",
          name2: "自粘聚合物改性沥青防水卷材",
          img: require("../assets/img/product_1.png"),
          content:
            "自粘聚合物改性沥青防水卷材是以进口的热塑性聚烯烃弹性体、SBS、增粘剂等多种助剂改性的在常 温下可自粘的沥青为浸涂材料，采用无胎基或聚酯胎基增强，以聚乙烯膜或铝箔为表面材料或无膜双面自粘，并覆以隔离膜加工而成的增强自粘防水卷材。",
          count: "2.2w+",
          time: "2018/07/26"
        },
        {
          id: 2,
          name1: "TPZM-002",
          name2: "预铺/湿铺防水卷材",
          img: require("../assets/img/product_2.png"),
          content:
            "预铺/湿铺防水卷材，是结合国外优势产品和中国防水行业的实际情况研发能在潮湿基面上施工的防 水产品。该材料内含有特殊的活性物质能与水泥砂浆实现反应，使卷材能与混凝土粘为一体（长期浸水环 境下依然密不可分），有效控制窜水出现，真正达到了防水卷材与防水主体融为一体，与基面粘贴满粘密实的效果。产品无毒、无环境公害，施工方便，是新一代环保型防水材料。",
          count: "2.5w+",
          time: "2018/04/26"
        },
        {
          id: 3,
          name1: "TPZM-003",
          name2: "SBS弹性体改性沥青防水卷材",
          img: require("../assets/img/product_3.png"),
          content:
            "SBS弹性体改性沥青防水卷材以进口热塑性聚烯烃弹性体、热苯乙烯一丁二烯一苯乙烯( SBS)改性道路沥青为主原料，经特殊工艺配制成高聚物改性沥青材料，中置增强胎体、外覆盖PE膜或防粘隔离层材料共同构成。",
          count: "2.3w+",
          time: "2017/10/26"
        },
        {
          id: 4,
          name1: "TPZM-004",
          name2: "耐根穿刺弹性体(SBS)改性沥青防水卷材",
          img: require("../assets/img/product_4.png"),
          content:
            "耐根穿刺弹性体(SBS)改性沥青防水卷材是以长纤聚酯纤维毡或者复合铜胎基为卷材胎基，以添加进口化学阻根剂的SBS改性沥青为涂盖材料，两面覆以聚乙烯膜，细砂或矿物粒料为隔离材料制成的改性沥青防水卷材。",
          count: "2.7w+",
          time: "2018/10/26"
        },
        {
          id: 5,
          name1: "TPZM-005",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_5.png"),
          content:
            "金属聚乙烯复合沥青自粘防水卷材是采用高密度聚乙烯金属复合薄膜，以合成橡胶、优质沥青、增粘剂、抗老化剂为主材，同时表面做过特殊处理具有一定防穿刺效果的自粘防水卷材。",
          count: "2.3w+",
          time: "2018/04/26"
        },
        {
          id: 6,
          name1: "TPZM-006",
          name2: "改性沥青聚烯胎耐根穿刺防水卷材",
          img: require("../assets/img/product_6.png"),
          content:
            "改性沥青聚乙烯胎耐根穿刺防水卷材是以高密度聚乙烯膜为卷材胎基，以添加进口化学阻根剂的改性沥青为涂盖材料，两面覆以隔离材料制成的改性沥青防水卷材。",
          count: "2.1w+",
          time: "2018/02/26"
        },
        {
          id: 7,
          name1: "TPZM-007",
          name2: " 强力交叉叠压膜高分子耐久反应粘 防水卷材",
          img: require("../assets/img/product_7.png"),
          content:
            "强力交叉叠压膜高分子耐久反应粘防水卷材，是一种由进口交叉叠压高密度聚乙烯强力薄膜与优质的 沥青基强力反应粘胶料经特殊工艺复合而成的高性能、冷施工的反应粘复合膜防水卷材。该卷材具有优异的尺寸稳定性、超强粘接力、优异的双向耐撕裂性能、抗老化、抗紫外线性能。",
          count: "2.5w+",
          time: "2018/03/26"
        },
        {
          id: 8,
          name1: "TPZM-008",
          name2: "强力膜高分子反应型自粘防水卷材",
          img: require("../assets/img/product_8.png"),
          content:
            "强力膜高分子反应型自粘防水卷材是用进口高分子树脂制作成红芯、蓝芯、白芯片材的胎基，再与高分子自粘胶料复合而成的新一代具有双重防水效果的防水卷材。",
          count: "2.6w+",
          time: "2018/03/26"
        },
        {
          id: 9,
          name1: "TPZM-009",
          name2: "高分子片材自粘胶膜防水卷材",
          img: require("../assets/img/product_9.png"),
          content:
            "高分子片材自粘胶膜防水卷材是以EVA、PVC、TPO、HDPE等为基料，与改性自粘橡胶胶料、隔离 膜复合而成的一种新型防水材料。产品兼有高分子防水卷材和自粘防水卷材的特点，它既解决了高分子防 水片材在施工中的许多难点、弊病，同时又解决了改性自粘橡胶沥青防水卷材的一些性能弱点，从而实现了叠加防水功能的防水效果。",
          count: "2.7w+",
          time: "2018/04/25"
        },
        {
          id: 10,
          name1: "TPZM-010",
          name2: "高分子自粘胶膜防水卷材(非沥青基)",
          img: require("../assets/img/product_10.png"),
          content:
            "高分子自粘胶膜防水卷材（非沥青基）是性能优越的多层复合防水卷材，其结构是由不小于0.7mm厚的高密度聚乙烯（HDPE)膜，压敏性高分子胶粘层和独特配方的颗粒层等三种材料经特殊工艺 复合成而成。高分子自粘胶膜防水卷材与后浇混凝土形成连续永久的结合，防止水渗入防水卷材与结构层之间，造成窜水现象，可受基层微小的沉降和收缩移动。同时具有优异的抗植物穿刺性能。",
          count: "2.9w+",
          time: "2018/05/06"
        },
        {
          id: 11,
          name1: "TPZM-011",
          name2: "聚乙烯丙(涤)纶高分子复合防水卷材",
          img: require("../assets/img/product_11.png"),
          content:
            "聚乙烯丙（涤）纶高分子复合防水卷材是采用聚乙烯类合成高分子材料为主防水层，添加抗老化剂、增强增粘层与丙纶无纺布通过生产线一次复合加工制成的新型防水材料。",
          count: "3.0w+",
          time: "2017/10/29"
        },
        {
          id: 12,
          name1: "TPZM-012",
          name2: "聚氯乙烯( PVC )防水卷材",
          img: require("../assets/img/product_12.png"),
          content:
            "是以进口聚氯乙烯（PVC )树脂为主要原料，加入增塑剂、稳定剂、抗氧剂、抗老化剂和紫外线吸收剂等助剂，所制成的新型高分子防水卷材。",
          count: "2.6w+",
          time: "2018/06/16"
        },
        // {
        //   id: 13,
        //   name1: "TPZM-013",
        //   name2: "热塑性聚烯烃(TPO)防水卷材",
        //   img: require("../assets/img/product_11.png"),
        //   content:
        //     "TPO防水卷材是一种热塑性聚烯烃类防水卷材，是以采用先进的聚合共混技术将乙丙橡胶与聚丙烯结合在一起， 使之既具橡胶柔性，又具塑料可焊接性，并加入抗氧剂、防老剂、软化剂制成的新型防水卷材，是功能最为齐全的环境友好型屋面材料，具有优异综合性能的合成高分子卷材。因而成为欧美等发达国家都热衷的防水产品。",
        //   count: "3.0w+",
        //   time: "2017/10/29"
        // },
        // {
        //   id: 14,
        //   name1: "TPZM-014",
        //   name2: "KDS高级复合D型自粘防水卷材",
        //   img: require("../assets/img/product_12.png"),
        //   content:
        //     "KDS高级复合D型自粘防水卷材是一种高性能、冷施工，无污染的新型环保防水材料。它是由特殊的高性能的多层强力防穿透聚乙烯叠压复合薄膜和自粘胶料经特殊工艺复合而成。",
        //   count: "2.6w+",
        //   time: "2018/06/16"
        // },
        // {
        //   id: 15,
        //   name1: "TPZM-015",
        //   name2: "KDS高级复合D型耐根穿刺防水卷材",
        //   img: require("../assets/img/product_11.png"),
        //   content:
        //     "KDS高级复合D型耐根穿刺防水卷材中间层以进口的聚乙烯为原料制成的高强度耐穿刺的树脂胎体， 上、下两层为达到分子级粘结效果的自粘胶膜层，经特殊工艺复合而成，可与砂浆或混凝土基层实现完美 贴合，从而达到与基层结合牢固、紧密、不可逆的骨肉相连的粘结效果，达到多层防水效果的一种防水卷材。",
        //   count: "3.0w+",
        //   time: "2017/10/29"
        // },
        {
          id: 16,
          name1: "TPZM-016",
          name2: "单组份聚氨酯防水涂料",
          img: require("../assets/img/product_16.png"),
          content:
            "单组份聚氨酯防水涂料具有环保性、高弹性、 高强度、高耐磨性、高粘结力和良好的耐候性、耐酸、碱、盐等抗腐蚀性能。能在 潮湿的基面上施工，涂覆后能固化成无毒、无味、高弹性的防水胶膜，是新一代的环保型防水材料。",
          count: "2.6w+",
          time: "2018/06/16"
        },
        {
          id: 17,
          name1: "TPZM-017",
          name2: "双组份聚氨酯防水涂料",
          img: require("../assets/img/product_17.png"),
          content:
            "聚氨酯防水涂料（双组份）属于双组份化学反应固化型防水涂料。其中A组份是由聚醚树脂和二异氰酸脂等经聚合反应制成的预 聚物；B组份是由硫化剂、催化剂、树脂等多种助剂精制而成。A、 B组份按一定比例混合搅拌均匀，涂刮在基面上，经固化反应后形成整体而具橡胶状弹性的防水膜。",
          count: "3.0w+",
          time: "2017/10/29"
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
  mounted() {
    this.id = this.$route.query.id ? this.$route.query.id : 1;
    this.getProductDetails();
  },
  methods: {
    getProductDetails() {
      this.hotProductList.forEach((v, e) => {
        if (this.id == v.id) {
          this.hotProductList[e].isActive = true;
        } else {
          this.hotProductList[e].isActive = false;
        }
      });
      this.productDetailsList.forEach(v => {
        if (this.id == v.id) {
          this.productDetails = v;
        }
      });
    },
    hotPproduct(id) {
      this.$router.push({ name: "productDetails", query: { id: id } });
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
            line-height: 63px;

            // &:hover {
            //   background: @bgMenu;
            //   color: @fontColorff;
            // }
          }

          .active {
            background: @bgMenu;
            color: @fontColorff;
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
              margin-bottom: 13px;
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
              width: 139px;
              height: 45px;
              background: @bgMenu;
              border: 1px solid @borderBF;
              color: @fontColorff;
              border-radius: 10px;
              text-align: center;
              line-height: 45px;
            }
          }
        }

        .bottom {
          margin-top: 16px;

          .details {
            width: 113px;
            height: 43px;
            text-align: center;
            background: @bgColorDC;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor14;
            line-height: 43px;
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