<template>
  <div id="caseShows">
    <commonHeader :num="num" />

    <div class="section">
      <commonTop :BgImg="BgImg" :ChName="ChName" :EnName="EnName" />

      <div class="content container cf">
        <div
          class="block fl pointer"
          :class="{margin: index%3 === 2}"
          v-for="(item, index) in caseList"
          :key="index"
          @click="details(index)"
        >
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </div>
      </div>

      <div class="pagination-box container">
        <el-pagination
          background
          :page-size="6"
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
  name: "caseShows",
  components: { commonHeader, commonFooter, commonTop },
  data() {
    return {
      num: 4,
      BgImg: require("../assets/img/case_bg.png"),
      ChName: "案例展示",
      EnName: "case shows",
      caseList: [
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
      total: 100 // 数据总数量
    };
  },
  methods: {
    details(index) {
      this.$router.push({ name: "caseDetails", query: { id: index } });
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#caseShows {
  .section {
    .content {
      padding-top: 46px;

      .block {
        width: 367px;
        height: 265px;
        margin: 0 49px 47px 0;

        img {
          width: 100%;
        }

        p {
          text-align: center;
          margin-top: 11px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: @fontColor1D;
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