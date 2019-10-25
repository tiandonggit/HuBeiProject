<template>
  <div id="caseDetails">
    <commonHeader :num="num" />

    <div class="section">
      <div class="public-bg">
        <img src="../assets/img/case_bg.png" alt />
      </div>

      <div class="public-title container">
        <span>首页>案例展示>{{caseDetails.name}}</span>
        <p class="title">{{caseDetails.name}}</p>
      </div>
      <div class="content container">
        <img :src="caseDetails.img" alt />
        <p class="prompt">案例介绍</p>
        <p class="text" v-html="caseDetails.content"></p>
        <p class="prev" @click="cut(0)">上一篇：{{caseDetails.prev ? caseDetails.prev : "没有了"}}</p>
        <p class="next" @click="cut(1)">下一篇：{{caseDetails.next ? caseDetails.next : "没有了"}}</p>
      </div>
    </div>

    <commonFooter />
  </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue";
import commonFooter from "@/components/commonFooter.vue";

export default {
  name: "caseDetails",
  components: { commonHeader, commonFooter },
  data() {
    return {
      num: 4,
      BgImg: require("../assets/img/case_bg.png"),
      ChName: "案例展示",
      EnName: "case shows",
      id: 0,
      caseDetailsList: [
        {
          name: "西湖文体中心",
          img: require("../assets/img/engineering_1@2x.png"),
          content:
            "杭州城西文化新地标——西湖区文体中心正式全面启用。西湖区文体中心坐落于西湖区晴川街217号，毗邻西溪国家湿地公园北门，总建筑面积12.6万平方米，地上建筑面积6.6万平方米，集会议中心、体育中心、青少年活动中心、办公区等多个功能于一体。<br>其中，体育中心有综合馆、羽毛球馆、游泳馆等体育场馆18个，会议中心有千人会场、报告厅等会议室6个。配套停车位900多个，可同时容纳5000人开展文化体育活动，单日最大接待量超过30000人次。",
          prev: "",
          next: "首开金茂府"
        },
        {
          name: "首开金茂府",
          img: require("../assets/img/engineering_2@2x.png"),
          content:
            "杭州首开金茂府，藏匿在“中央豪宅区”里的稀世墅居，以中国金茂府系TOP级的营造水准，以雍容华贵的法式叠墅，唤醒杭州人民亲切而珍贵的人居记忆。首开金茂府位居杭州中心豪宅区，交通及周边配套设施十分完善；而且它作为科技叠墅，无论是精工细节、智能人性亦或舒适尺度皆与当代人居完美贴合贴近，完美保证了“绿金品质”。",
          prev: "西湖文体中心",
          next: "汇高柏悦中心"
        },
        {
          name: "汇高柏悦中心",
          img: require("../assets/img/engineering_3@2x.png"),
          content:
            "栢悦中心，集安徽置地20载国匠造诣，以“栢悦系”顶级作品，为东杭州带来封面级城市综合体人居体验。 项目地处余杭区北沙西路与荷禹路交汇处，占地面积约5.6万方，建筑面积约28万方，容积率3.5，绿化率30%。规划为集都会华宅、五星级酒店、高端写字楼、商业于一体的城市综合体。 领踞千亿城市形象区轴心的栢悦中心，坐拥开发区配套大成。项目近揽万宝城商圈、沃尔玛商圈，东南面对望玖玖国际财富中心，繁华举步即达；双河景公园环伺，南临临平山公园，翠荫环抱，桃源深处独享静谧；周边育才实验小学、临平三小、临平五中环伺，琅琅书声里，构筑浓厚人文氛围；交通方面，规划“三快速路一环”直达市中心，更无缝对接地铁9号线（规划）北沙路站，30分钟轻松通达市心。 建面约90-160方城市华宅，承袭安徽置地城市华宅标杆作品之精粹，以高层与洋房的形态，坐落于栢悦中心之襟怀。玻璃天幕立面、中庭景观园林、人车分流、罕见大开间等匠心修为，定义当代都会生活范本。 园内规划一高度超150米的摩天大楼，其将以东杭州的第一高度，刷新城市天际线。该大楼拥有高端商务写字楼与五星级酒店两种业态，社交、居住、娱乐、会议、餐饮等星级酒店服务与商务办公，在此可实现无缝对接，同步国际商务时代。 栢悦中心，将以城中之城的恢弘姿态，迭代东杭州都会生活。",
          prev: "首开金茂府",
          next: "汇高柏悦府"
        },
        {
          name: "汇高柏悦府",
          img: require("../assets/img/engineering_4@2x.png"),
          content:
            "百悦府，25万方国际墅质住区，择址城南核心黄金十字——海昌路与江南大道交汇处，亦位于紫微初中东侧，距海宁银泰城仅300米，距海宁市政府仅5分钟车程，规划7幢现代主义风格高层、70席欧式联排低密度大宅，以及1.5万方城市商业街区，领创超越海宁现有人居水准的高品质生活方式。银泰城、名校、医疗机构、金融中心、行政机构等举步可至，醇熟生活氛围早已大成。",
          prev: "汇高柏悦中心",
          next: "凤起钱潮"
        },
        {
          name: "凤起钱潮",
          img: require("../assets/img/engineering_5@2x.png"),
          content:
            "凤起钱潮，坐标凤起路与钱潮路交汇口，距钱江新城核心区约1.5公里，快速到达市民中心、万象城等。项目周边生活氛围醇熟，杭州市钱江外国语实验学校、杭州国泰外语艺术学校、杭州景华小学、杭州景华中学、采荷第一小学教育集团（钱江苑校区）、采荷第二小学教育集团（景芳小学）等教育资源环伺，一路之隔即可到达温州医科大学附属眼视光医院，步行可达地铁4号线景芳站/2号线钱江路站，约1.5公里可至秋石快速路、艮山快速路。 凤起钱潮师法伦敦高端住品One Tower Bridge的营造理念与技艺，秉承“design for life,为高贵而设计”的价值观。规划融合高层、洋房、合院三类产品。通过手工质感的艺术美学将建筑融入城市肌理，打造纯粹大户型住区，承载考究生活对空间的高标准和高需求。 凤起钱潮项目邀请顶尖大师级设计团队：建筑由绿城GAD建筑设计院负责，景观邀请的是绿城环境设计，室内设计邀请的是世界顶尖室内设计公司BLD和连续三次获得室内设计奥斯卡奖——Andrew Martin的郑仕梁设计事务所，四大世界顶级设计团队联袂巨献，赋予凤起钱潮更生动的灵感美学，为杭州人居，呈现一个不一样的高端改善型居所。",
          prev: "汇高柏悦府",
          next: "杭十四中"
        },
        {
          name: "杭十四中",
          img: require("../assets/img/engineering_6@2x.png"),
          content:
            "杭州第十四中学是浙江省历史悠久的百年名校之一，创办于1904年，学校前身是省立女子中学，1978年被定为市重点中学，1981年列为浙江省重点中学，1996年被确认为省一级重点中学。学校坐落在浙江省杭州市下城区，西子湖畔。2014年增加位于运河之畔的康桥校区。<br>截至2014年，杭州第十四中学拥有凤起校区和康桥校区两个校区， 占地5万多平方米，校园建筑面积3万多平方米。有专职教师145名，其中特级教师12名，高级教师69名。有学生3000余人，班级近80个。",
          prev: "凤起钱潮",
          next: ""
        }
      ],
      caseDetails: "",
      total: 6
    };
  },
  watch: {
    $route(val) {
      if (val.query.id) {
        this.id = val.query.id;
        this.getCaseDetails();
      }
    }
  },
  created() {
    this.id = this.$route.query.id ? this.$route.query.id : 0;
    this.caseDetails = this.caseDetailsList[this.id];
  },
  methods: {
    getCaseDetails() {
      this.caseDetails = this.caseDetailsList[this.id];
    },
    cut(num) {
      // 0: 上一篇； 1：下一篇
      if (num === 0) {
        if (this.id === 0) {
          return;
        }
        this.id--;
      } else {
        if (this.id === this.caseDetailsList.length) {
          return;
        }
        this.id++;
      }
      this.$router.push({ name: "caseDetails", query: { id: this.id } });
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#caseDetails {
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
      padding: 56px 0 76px;

      img {
        width: 720px;
        margin: 0 auto;
      }

      .prompt {
        margin-top: 43px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColor00;
        line-height: 19px;
      }

      .text {
        margin: 20px 0 41px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColor4C;
        line-height: 25px;
      }

      .prev,
      .next {
        margin-bottom: 13px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColor00;
        line-height: 15px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>