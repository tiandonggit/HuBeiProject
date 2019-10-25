<template>
  <div id="honoraryCertificate">
    <commonHeader :num="num" />

    <div class="section">
      <commonTop :BgImg="BgImg" :ChName="ChName" :EnName="EnName" />

      <div class="content container cf">
        <div
          class="block fl"
          :class="{margin: index%4 === 3}"
          v-for="(honoraryImg, index) in honoraryImgList"
          :key="index"
        >
          <img :src="honoraryImg.img" alt />
          <p>{{honoraryImg.name}}</p>
        </div>
      </div>

      <div class="pagination-box container">
        <el-pagination
          background
          :page-size="8"
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
  name: "honoraryCertificate",
  components: { commonHeader, commonFooter, commonTop },
  data() {
    return {
      num: 2,
      BgImg: require("../assets/img/honorary_bg.png"),
      ChName: "荣誉资质",
      EnName: "Honorary certificate",
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
      total: 100 // 数据总条数
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#honoraryCertificate {
  .section {
    .content {
      padding-top: 42px;
      .block {
        width: 272px;
        height: 214px;
        margin: 0 36px 40px 0;

        img {
          width: 100%;
        }

        p {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor1D;
          line-height: 16px;
          margin-top: 12px;
          text-align: center;
        }
      }
      .margin {
        margin-right: 0;
      }
    }
  }
}
</style>