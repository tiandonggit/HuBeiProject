<template>
  <div id="contactUs">
    <commonHeader :num="num" />

    <div class="section">
      <commonTop :BgImg="BgImg" :ChName="ChName" :EnName="EnName" />

      <div class="content container cf">
        <div class="contact-way cf">
          <div class="left fl">
            <p class="title">联系方式:</p>
            <div class="box">
              <p class="name">湖北天沛哲明建设工程有限公司</p>
              <p>地址: 武汉市江汉区江兴路22号B栋3楼305室</p>
              <p>电话: 0716-5208678</p>
              <p>手机: 135 8840 7189</p>
              <div class="code">
                <img src="../assets/img/QRCode.png" alt />
                <p>扫描关注官方微信</p>
              </div>
            </div>
          </div>
          <div class="right fr">
            <p class="title">在线留言:</p>
            <div class="box">
              <div class="top cf">
                <div class="input-block fl">
                  <p>姓名</p>
                  <input type="text" placeholder="请输入您的名字">
                </div>
                <div class="input-block fl">
                  <p>邮箱</p>
                  <input type="text" placeholder="请输入您的邮箱">
                </div>
                <div class="input-block fl">
                  <p>电话</p>
                  <input type="text" placeholder="请输入您的电话号码">
                </div>
              </div>
              <div class="middle">
                <div class="input-block fl">
                  <p>内容</p>
                  <textarea placeholder="请输入您的名字"></textarea>
                </div>
              </div>
              <div class="bottom fr">
                <a>提交留言</a>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <p class="title">在线地图:</p>
          <img src="../assets/img/img_map.jpg" alt />
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
  name: "contactUs",
  components: { commonHeader, commonFooter, commonTop },
  data() {
    return {
      num: 5,
      BgImg: require("../assets/img/contact_bg.png"),
      ChName: "联系我们",
      EnName: "Contact us"
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../assets/css/cssCommon";
#contactUs {
  .section {
    .content {
      padding-top: 45px;

      .title {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: @fontColor00;
        line-height: 18px;
        margin-bottom: 15px;
      }

      .contact-way {
        margin-bottom: 28px;

        .left {
          width: 401px;
        }

        .right {
          width: 760px;
        }

        .box {
          height: 280px;
          background: @bgColorF7;
          border: 1px solid @borderBF;
          padding: 0 30px;
          position: relative;

          p {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: @fontColor5F;
            line-height: 35px;
          }

          p.name {
            margin: 42px 0 20px;
            font-size: 24px;
            font-weight: bold;
            color: @fontColor31;
          }

          div.code {
            position: absolute;
            right: 30px;
            top: 128px;

            p {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: @fontColor5F;
              line-height: 13px;
              margin-top: 9px;
            }
          }

          ::-webkit-input-placeholder {
            color: @fontColorAD;
          }
          ::-moz-placeholder {
            color: @fontColorAD;
          }
          :-ms-input-placeholder {
            color: @fontColorAD;
          }
          :-moz-placeholder {
            color: @fontColorAD;
          }

          input, textarea {
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            border: 1px solid @borderBF;
            line-height:14px;
            border-radius:10px;
          }

          .top {
            padding-top: 24px;
            .input-block {
              width: 213px;
              margin-right: 29px;

              &:last-child {
                margin-right: 0;
              }

              p {
                padding-left: 16px;
                margin-bottom: 8px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: @fontColor1D;
                line-height: 16px;
              }

              input {
                width: 213px;
                padding: 9px 16px 10px;
                line-height: 15px;
              }
            }
          }

          .middle {
            padding-top: 15px;
            .input-block {
              p {
                padding-left: 16px;
                margin-bottom: 8px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: @fontColor1D;
                line-height: 16px;
              }

              textarea {
                width: 698px;
                height: 81px;
                padding: 14px 16px;
              }
            }
          }

          .bottom {
            width: 131px;
            height: 45px;
              margin-top:13px;
            background: @bgMenu;
            border: 1px solid @borderBF;
            border-radius: 10px;
            display: flex;
              justify-content: center;
              align-items: center;


            a {
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: @fontColorff;
              line-height: 16px;
            }
          }
        }
      }

      .map {
        margin-bottom: 54px;
      }
    }
  }
}
</style>