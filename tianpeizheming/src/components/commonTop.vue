<template>
  <div id="commonTop">
    <div class="public-bg">
      <img :src="BgImg" alt />
    </div>
    <div class="public-title">
      <div class="container">
        <span>首页>{{ChName}}</span>
        <div class="title">
          <p>{{ChName}}</p>
          <span>{{EnName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonTop",
  props: {
    BgImg: {
      type: String,
      default() {
        return "";
      }
    },
    ChName: {
      type: String,
      default() {
        return "";
      }
    },
    EnName: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#commonTop {
  .public-bg {
    height: 350px;
  }

  .public-title {

    .title {
      text-align: center;
      margin: 19px auto 0;
      width: 283px;
      padding-bottom: 8px;
      background: url("../assets/img/title_under_line.png") center center
        no-repeat;

      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: @fontColorActive;
        line-height: 25px;
        margin-bottom: 6px;
      }

      span {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColor9B;
        line-height: 18px;
      }
    }
  }
}
</style>
