<template>
  <div id="productCenter">
    <commonHeader :num="num" />

    <div class="section">
      <commonTop :BgImg="BgImg" :ChName="ChName" :EnName="EnName" />

      <div class="content container cf">
        <div class="tab-box cf">
          <div
            class="pointer fl"
            :class="{active: productMenu.isActive}"
            v-for="(productMenu, index) in productMenuList"
            :key="index"
            @click="select(index)"
          >
            <a>{{productMenu.name}}</a>
          </div>
        </div>
        <div
          class="block fl pointer"
          :class="{margin: index%4 === 3}"
          v-for="(item, index) in productList"
          :key="index"
          @click="details(index)"
        >
          <img :src="item.img" alt />
          <p>{{item.name1}}</p>
          <p>{{item.name2}}</p>
        </div>
      </div>

      <div class="pagination-box container">
        <el-pagination
          background
          :page-size="12"
          :pager-count="5"
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next"
          :hide-on-single-page="true"
          :total="total"
        ></el-pagination>
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
  name: "productCenter",
  components: { commonHeader, commonFooter, commonTop },
  data() {
    return {
      num: 3,
      BgImg: require("../assets/img/product_bg.png"),
      ChName: "产品中心",
      EnName: "Product center",
      productMenuList: [
        { name: "防水卷材", isActive: true },
        { name: "防水涂料", isActive: false }
      ],
      productList: [
        {
          name1: "TPZM-001",
          name2: "自粘聚合物改性沥青防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "预铺/湿铺防水卷材",
          img: require("../assets/img/product_2.png")
        },
        {
          name1: "TPZM-003",
          name2: "SBS弹性体改性沥青防水卷材",
          img: require("../assets/img/product_3.png")
        },
        {
          name1: "TPZM-004",
          name2: "耐根穿刺弹性体(SBS)改性沥青防水卷材",
          img: require("../assets/img/product_4.png")
        },
        {
          name1: "TPZM-005",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_5.png")
        },
        {
          name1: "TPZM-006",
          name2: "改性沥青聚烯胎耐根穿刺防水卷材",
          img: require("../assets/img/product_6.png")
        },
        {
          name1: "TPZM-007",
          name2: " 强力交叉叠压膜高分子耐久反应粘 防水卷材",
          img: require("../assets/img/product_7.png")
        },
        {
          name1: "TPZM-008",
          name2: "强力膜高分子反应型自粘防水卷材",
          img: require("../assets/img/product_8.png")
        },
        {
          name1: "TPZM-009",
          name2: "高分子片材自粘胶膜防水卷材",
          img: require("../assets/img/product_9.png")
        },
        {
          name1: "TPZM-010",
          name2: "高分子自粘胶膜防水卷材(非沥青基)",
          img: require("../assets/img/product_10.png")
        },
        {
          name1: "TPZM-011",
          name2: "聚乙烯丙(涤)纶高分子复合防水卷材",
          img: require("../assets/img/product_11.png")
        },
        {
          name1: "TPZM-012",
          name2: "聚氯乙烯( PVC )防水卷材",
          img: require("../assets/img/product_12.png")
        }
      ],
      total: 100
    };
  },
  methods: {
    details(index) {
      this.$router.push({ name: "productDetails", query: { id: index } });
    },
    select(index) {
      this.productMenuList.forEach((v, e) => {
        if (index === e) {
          this.productMenuList[e].isActive = true;
        } else {
          this.productMenuList[e].isActive = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#productCenter {
  .section {
    .content {
      padding-top: 50px;

      .tab-box {
        width: 381px;
        margin: 0 auto 35px;

        div {
          width: 165px;
          height: 44px;
          border: 1px solid @bgMenu;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:first-child {
            margin-right: 50px;
          }

          a {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: @bgMenu;
            line-height: 16px;
          }
        }

        div.active {
          background: @bgMenu;

          a {
            color: @fontColorff;
          }
        }
      }

      .block {
        width: 283px;
        height: 249px;
        margin: 0 21px 33px 0;
        padding: 14px;
        background: @bgColorF7;
        border: 1px solid @borderDC;

        img {
          width: 100%;
        }

        p {
          margin-top: 6px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor4D;
          line-height: 16px;
        }
      }
      .margin {
        margin-right: 0;
      }
    }
  }
}
</style>