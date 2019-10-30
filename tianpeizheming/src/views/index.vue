<template>
  <div id="index">
    <!-- 头 -->
    <commonHeader :num="num" />
    <!-- 内容 -->
    <div class="section">
      <!-- 轮播 -->
      <div>
        <el-carousel height="600px" :interval="2000">
          <el-carousel-item v-for="(banner, index) in bannerList" :key="index">
            <img :src="banner" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 产品展示 -->
      <div class="product-display">
        <div class="container">
          <div class="title-box cf">
            <div class="left fl">
              <p>产品展示</p>
              <span>Product display</span>
            </div>
            <div class="right fr" @click="productCenter()">更多→</div>
          </div>
          <div class="content cf">
            <div class="left fl">
              <ul>
                <li
                  class="pointer"
                  :class="{active: productMenu.isActive}"
                  v-for="(productMenu, index) in productMenuList"
                  :key="index"
                  @click="selectProductMenu(index)"
                >{{productMenu.name}}</li>
              </ul>
            </div>
            <div class="right fr">
              <div
                class="block fl pointer"
                v-for="(product, index) in productList"
                :key="index"
                @click="productDetails(product.id)"
              >
                <img :src="product.img" alt />
                <p>{{product.name1}}</p>
                <p>{{product.name2}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 工程案例 -->
      <div class="engineering-case">
        <div class="container">
          <div class="title-box cf">
            <div class="left fl">
              <p>工程案例</p>
              <span>Engineering case</span>
            </div>
            <div class="right fr" @click="caseShows()">更多→</div>
          </div>
          <div class="content cf">
            <div
              class="block fl pointer"
              :class="{margin: index%3 === 1}"
              v-for="(engineering, index) in engineeringList"
              :key="index"
              @click="caseDetails(index)"
            >
              <img :src="engineering.img" alt />
              <p>{{engineering.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 荣誉资质 -->
      <div class="honorary-certificate">
        <div class="container">
          <div class="title-box cf">
            <div class="left fl">
              <p>荣誉资质</p>
              <span>Honorary certificate</span>
            </div>
          </div>
          <div class="content">
            <div id="demo">
              <div id="indemo">
                <div id="demo1">
                  <ul class="product_list1 roll_product clearfix">
                    <li
                      class="pointer"
                      v-for="(honoraryImg, index) in honoraryImgList"
                      :key="index"
                    >
                      <a :title="honoraryImg.name" class="img">
                        <img :src="honoraryImg.img" :alt="honoraryImg.name" />
                      </a>
                      <p>{{honoraryImg.name}}</p>
                    </li>
                  </ul>
                </div>
                <div id="demo2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 公司简介 -->
      <div class="company-profile">
        <div class="container">
          <div class="title-box cf">
            <div class="left fl">
              <p>公司简介</p>
              <span>Company profile</span>
            </div>
            <div class="right fr">更多→</div>
          </div>
          <div class="content">
            <img src="../assets/img/img_1.png" alt />
            <p>湖北天沛哲明，中国现代防水材料创新型企业！</p>
            <span>湖北，九省通衢，经济高速发展。湖北荆州，中国防水材料生产基地，湖北省五大区域性中心城市之一。湖北公安经济开发区青吉工业园，湖北首批9个省级开发区之一，湖北天沛哲明建设工程有限公司坐落于此。公司始终坚持“诚信、务实、卓越、创新”的企业理念，致力于系统解决防水问题的探索和研究，现已发展成为一家专业从事防水产品研发、制造、销售及施工服务于一体的现代化防水企业。经过十余年的砥砺奋进，湖北天沛哲明已拥有荆楚源知名品牌，并成功通过ISO9001质量管理体系认证，在防水堵漏等方面积累了大量实践经验和施工方案，公司成为湖北省建筑防水协会副会长单位，公司先后被湖北省建筑防水协会评为优秀会员单位、优秀生产企业、最具发展力企业。</span>
            <div>
              <a href>查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 尾 -->
    <commonFooter />
  </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue";
import commonFooter from "@/components/commonFooter.vue";

export default {
  name: "index",
  components: { commonHeader, commonFooter },
  data() {
    return {
      num: 0,
      bannerList: [
        require("../assets/img/banner_1.png"),
        require("../assets/img/banner_2.png")
      ],
      engineeringList: [
        {
          name: "西湖文体中心",
          img: require("../assets/img/engineering_1.png")
        },
        {
          name: "首开金茂府",
          img: require("../assets/img/engineering_2.png")
        },
        {
          name: "汇高柏悦中心",
          img: require("../assets/img/engineering_3.png")
        },
        {
          name: "汇高柏悦府",
          img: require("../assets/img/engineering_4.png")
        },
        {
          name: "凤起钱潮",
          img: require("../assets/img/engineering_5.png")
        },
        {
          name: "杭十四中",
          img: require("../assets/img/engineering_6.png")
        }
      ],
      productMenuList: [
        { name: "防水卷材", isActive: true },
        { name: "防水涂料", isActive: false }
      ],
      productList: [],
      productList1: [
        {
          id: 1,
          name1: "TPZM-001",
          name2: "自粘聚合物改性沥青防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          id: 2,
          name1: "TPZM-002",
          name2: "预铺/湿铺防水卷材",
          img: require("../assets/img/product_2.png")
        },
        {
          id: 3,
          name1: "TPZM-003",
          name2: "SBS弹性体改性沥青防水卷材",
          img: require("../assets/img/product_3.png")
        },
        {
          id: 4,
          name1: "TPZM-004",
          name2: "耐根穿刺弹性体(SBS)改性沥青防水卷材",
          img: require("../assets/img/product_4.png")
        },
        {
          id: 5,
          name1: "TPZM-005",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_5.png")
        },
        {
          id: 6,
          name1: "TPZM-006",
          name2: "改性沥青聚烯胎耐根穿刺防水卷材",
          img: require("../assets/img/product_6.png")
        },
        {
          id: 7,
          name1: "TPZM-007",
          name2: " 强力交叉叠压膜高分子耐久反应粘 防水卷材",
          img: require("../assets/img/product_7.png")
        },
        {
          id: 8,
          name1: "TPZM-008",
          name2: "强力膜高分子反应型自粘防水卷材",
          img: require("../assets/img/product_8.png")
        },
        {
          id: 9,
          name1: "TPZM-009",
          name2: "高分子片材自粘胶膜防水卷材",
          img: require("../assets/img/product_9.png")
        },
        {
          id: 10,
          name1: "TPZM-010",
          name2: "高分子自粘胶膜防水卷材(非沥青基)",
          img: require("../assets/img/product_10.png")
        },
        {
          id: 11,
          name1: "TPZM-011",
          name2: "聚乙烯丙(涤)纶高分子复合防水卷材",
          img: require("../assets/img/product_11.png")
        },
        {
          id: 12,
          name1: "TPZM-012",
          name2: "聚氯乙烯( PVC )防水卷材",
          img: require("../assets/img/product_12.png")
        }
      ],
      productList2: [
        {
          id: 16,
          name1: "SPU-301",
          name2: "单组分聚氨酯防水涂料",
          img: require("../assets/img/product_16.png")
        },
        {
          id: 17,
          name1: "JSA-101",
          name2: "聚合物水泥防水涂料",
          img: require("../assets/img/product_17.png")
        },
        // {
        //   name1: "TPZM-018",
        //   name2: "水性聚氨酯防水涂料",
        //   img: require("../assets/img/product_3.png")
        // },
        // {
        //   name1: "TPZM-019",
        //   name2: "非固化橡胶沥青防水涂料",
        //   img: require("../assets/img/product_4.png")
        // },
        // {
        //   name1: "TPZM-020",
        //   name2: "水性非固化橡胶沥青防水涂料",
        //   img: require("../assets/img/product_5.png")
        // },
        // {
        //   name1: "TPZM-021",
        //   name2: "聚合物水泥基环保型防水涂料（K11）",
        //   img: require("../assets/img/product_6.png")
        // },
        // {
        //   name1: "TPZM-022",
        //   name2: "水泥基渗透结晶型环保防水材料",
        //   img: require("../assets/img/product_7.png")
        // },
        // {
        //   name1: "TPZM-023",
        //   name2: "液体橡胶沥青防水卷材",
        //   img: require("../assets/img/product_8.png")
        // },
        // {
        //   name1: "TPZM-024",
        //   name2: "高聚物橡胶沥青防水涂料",
        //   img: require("../assets/img/product_9.png")
        // },
        // {
        //   name1: "TPZM-025",
        //   name2: "喷涂速凝橡胶沥青防水涂料",
        //   img: require("../assets/img/product_10.png")
        // },
        // {
        //   name1: "TPZM-026",
        //   name2: "道（路）桥专用聚合物改性沥青防水涂料",
        //   img: require("../assets/img/product_11.png")
        // }
      ],
      honoraryImgList: [
        {
          name: "3A级证书",
          img: require("../assets/img/honorary_1.jpg")
        },
        {
          name: "安全生产许可证",
          img: require("../assets/img/honorary_2.jpg")
        },
        {
          name: "建筑业企业资质",
          img: require("../assets/img/honorary_3.jpg")
        },
        {
          name: "开户许可证",
          img: require("../assets/img/honorary_4.jpg")
        },
        {
          name: "营业执照",
          img: require("../assets/img/honorary_5.jpg")
        },
        {
          name: "营业执照",
          img: require("../assets/img/honorary_6.jpg")
        },
        {
          name: "质量管理体系认证证书",
          img: require("../assets/img/honorary_7.jpg")
        }
      ],
      swiper: ""
    };
  },
  mounted() {
    this.productList = this.productList1;
    this.scroll();
  },
  methods: {
    //滚动
    scroll() {
      //产品滚动
      var speed = 30; //数字越大速度越慢
      var tab = document.getElementById("demo");
      var tab1 = document.getElementById("demo1");
      var tab2 = document.getElementById("demo2");
      var liwidth = tab1.getElementsByTagName("li");
      var liwidths = liwidth[0].offsetWidth;
      var length = this.honoraryImgList.length;
      var mleft = 0;
      var mright = 25;
      var totalwidth = (liwidths + mleft + mright) * length * 2 + 300;
      document.getElementById("indemo").style.width = totalwidth;
      tab2.innerHTML = tab1.innerHTML;
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0)
          tab.scrollLeft -= tab1.offsetWidth;
        else {
          tab.scrollLeft++;
        }
      }
      var MyMar = setInterval(Marquee, speed);

      tab.onmouseover = function() {
        clearInterval(MyMar);
      };
      tab.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
      };
    },
    selectProductMenu(index) {
      index === 0
        ? (this.productList = this.productList1)
        : (this.productList = this.productList2);
      this.productMenuList.forEach((v, e) => {
        if (index === e) {
          this.productMenuList[e].isActive = true;
        } else {
          this.productMenuList[e].isActive = false;
        }
      });
    },
    productCenter() {
      this.$router.push({ name: "productCenter" });
    },
    productDetails(index) {
      this.$router.push({ name: "productDetails", query: { id: index } });
    },
    caseShows() {
      this.$router.push({ name: "caseShows" });
    },
    caseDetails(index) {
      this.$router.push({ name: "caseDetails", query: { id: index } });
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";

#index {
  .swiper-slide {
    width: 272px !important;
    transition-timing-function: linear;
  }

  /deep/ .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .container {
    .title-box {
      height: 55px;
      border-bottom: 1px solid @borderIndex;

      .left {
        width: 177px;
        height: 55px;
        border-bottom: 1px solid @borderIndexActive;
        background-image: url("../assets/img/P.png");
        background-position: 6px 0;
        background-repeat: no-repeat;
        padding: 4px 0 0 15px;

        p {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: @fontColorActive;
          line-height: 25px;
        }

        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor9B;
          line-height: 18px;
        }
      }

      .right {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontcolor68;
        line-height: 15px;
        margin-top: 35px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .product-display {
    padding-top: 46px;

    .content {
      padding: 34px 0 60px;

      .left {
        width: 135px;
        // height: 751px;

        li {
          line-height: 44px;
          text-align: center;
          border: 1px solid @borderE5;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: @fontColor4D;
          position: relative;
          z-index: 1;
          right: -1px;
        }

        li.active {
          border-right: 1px solid @borderff;
        }
      }

      .right {
        width: 1065px;
        padding: 15px 3px 0 23px;
        border: 1px solid @borderE5;
        border-radius: 10px;
        border-top-left-radius: 0;

        .block {
          width: 243px;
          height: 229px;
          margin: 0 16px 26px 0;

          img {
            width: 100%;
            display: block;
            border: 1px solid @borderE5;
            margin-bottom: 9px;
          }

          p {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor4D;
            line-height: 18px;
          }

          &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }

  .engineering-case {
    padding-top: 54px;
    background: @bgColorF7;

    .title-box {
      .left {
        background-image: url("../assets/img/E.png");
      }
    }

    .content {
      padding-top: 42px;

      .block {
        width: 357px;
        // height: 264px;
        position: relative;
        overflow: hidden;
        margin-bottom: 35px;

        img {
          width: 100%;
          display: block;
        }

        p {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          line-height: 39px;
          padding-left: 13px;
          background: @bgColor00;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.31);
          opacity: 0.7;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColorff;
        }

        &:hover p {
          background: rgba(21, 79, 162, 0.9);
        }
      }
      .margin {
        margin: 0 63px;
      }
    }
  }

  .honorary-certificate {
    padding-top: 52px;
    height: 472px;
    background: url("../assets/img/bg_1.png") center center no-repeat;

    .title-box {
      border-bottom: 1px solid @border7E;
      .left {
        border-bottom: 1px solid @bgColorFF;
        background-image: url("../assets/img/H.png");

        p {
          color: @fontColorff;
        }

        span {
          color: @fontColorB0;
        }
      }
    }

    .content {
      padding-top: 65px;

      /*滚动*/
      #demo {
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
      }
      #indemo {
        float: left;
        width: 800%;
      }
      #demo1 {
        float: left;
      }
      #demo2 {
        float: left;
      }
      .product_list1 li {
        float: left;
        margin-left: 15px;
        margin-right: 15px;
        _display: inline;
        position: relative;
      }
      .product_list1 li a.img img {
        width: 272px;
        height: 186px;
      }
      .product_list1 li p {
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        line-height: 16px;
        height: 39px;
        padding-top: 15px;
        background: @bgColor00;
        opacity: 0.7;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        width: 100%;
        color: @fontColorff;
      }
      .product_list1 li:hover p {
        background: rgba(21, 79, 162, 0.9);
      }
      .roll_product {
        float: left;
      }

      /deep/ .el-carousel__item {
        width: 30%;
      }
    }
  }

  .company-profile {
    padding-top: 49px;
    .title-box {
      .left {
        background-image: url("../assets/img/C.png");
      }
    }
    .content {
      padding-top: 29px;

      img {
        width: 100%;
        display: block;
      }

      p {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColor00;
        line-height: 16px;
        margin-top: 34px;
        margin-bottom: 16px;
      }

      span {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontcolor3C;
        line-height: 30px;
      }

      div {
        margin-top: 42px;
        text-align: center;

        a {
          width: 154px;
          display: inline-block;
          line-height: 44px;
          border: 1px solid @borderIndexActive;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColorActive;
        }
      }
      margin-bottom: 57px;
    }
  }
}
</style>
