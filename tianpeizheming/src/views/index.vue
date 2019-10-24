<template>
  <div id="index">
    <!-- 头 -->
    <commonHeader />
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
            <div class="right fr">更多→</div>
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
              <div class="block fl" v-for="(product, index) in productList" :key="index">
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
            <div class="right fr">更多→</div>
          </div>
          <div class="content cf">
            <div
              class="block fl"
              :class="{margin: index%3 === 1}"
              v-for="(engineering, index) in engineeringList"
              :key="index"
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
            <div class="swiper-container">
              <div class="swiper-wrapper">

                <div class="swiper-slide" v-for="(honoraryImg, index) in honoraryImgList" :key="index">
                  <div class="img-box">
                    <img :src="honoraryImg" :srcset="honoraryImg" class="swiper-lazy" />
                  </div>
                </div>
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
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import commonHeader from "@/components/commonHeader.vue";
import commonFooter from "@/components/commonFooter.vue";

export default {
  name: "index",
  components: { commonHeader, commonFooter },
  data() {
    return {
      bannerList: [
        require("../assets/img/banner_1.png"),
        require("../assets/img/banner_1.png"),
        require("../assets/img/banner_2.png")
      ],
      engineeringList: [
        {
          name: "1、西湖文体中心",
          img: require("../assets/img/engineering_1.jpg")
        },
        {
          name: "2、西湖文体中心",
          img: require("../assets/img/engineering_2.jpg")
        },
        {
          name: "3、西湖文体中心",
          img: require("../assets/img/engineering_3.jpg")
        },
        {
          name: "4、西湖文体中心",
          img: require("../assets/img/engineering_4.jpg")
        },
        {
          name: "5、西湖文体中心",
          img: require("../assets/img/engineering_5.jpg")
        },
        {
          name: "6、西湖文体中心",
          img: require("../assets/img/engineering_6.jpg")
        }
      ],
      productMenuList: [
        { name: "防水卷材", isActive: true },
        { name: "防水涂料", isActive: false }
      ],
      productList: [
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯合沥青自粘防合沥青自粘防合沥青自粘防卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯合沥青自粘防合沥青自粘防合沥青自粘防卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        },
        {
          name1: "TPZM-002",
          name2: "金属聚Z烯复合沥青自粘防水卷材",
          img: require("../assets/img/product_1.png")
        }
      ],
      honoraryImgList: [
        require("../assets/img/honorary_1.png"),
        require("../assets/img/honorary_2.png"),
        require("../assets/img/honorary_3.png"),
        require("../assets/img/honorary_2.png")
      ],
      swiper: ""
    };
  },
  mounted() {
      this.swiper = new Swiper('.swiper-container', {
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          loop: true,
          speed: 700,
          allowTouchMove: false,
          centeredSlides: true,
          spaceBetween: 25,
          slidesOffsetBefore: 40,
          slidesPerView: 'auto',
          on: {
              slideChangeTransitionEnd: function(){
                  this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
              },
              slideChangeTransitionStart: function(){
                  this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
              },
          },
      });
  },
  methods: {
    selectProductMenu(index) {
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
#index {
  .swiper-slide {
    width: 332px !important;
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
      }
    }
  }

  .product-display {
    padding-top: 46px;

    .content {
      padding: 34px 0 60px;

      .left {
        width: 135px;
        height: 751px;

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
          border-right: 1px solid #fff;
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
        height: 264px;
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
      padding-top: 50px;

      .img-box {
        width: 332px;
        height: 227px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
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
