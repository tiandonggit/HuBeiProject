<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "assets/css/cssCommon";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.cf::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  display: block;
}

input, textarea {
  outline: none;
}

// 公共样式
.pointer {
  cursor: pointer;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.public-bg {
  height: 350px;
}

.public-title {
  padding-top: 8px;

  span {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: @fontColor5A;
    line-height: 16px;
  }
}

// 分页
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: @bgMenu;
}
.el-pagination {
  span {
    padding: 0 22px;
    border: 1px solid @border89;
  }

  button:disabled span {
    border: 1px solid #c0c4cc;
  }

  li {
    border: 1px solid @border89;
  }
  li.active {
    border: 1px solid @bgMenu;
  }

  .el-pager li.active + li {
    border-left: 1px solid @border89;
  }
}
.pagination-box {
  .el-pagination {
    margin-bottom: 70px;
    text-align: center;
  }
}
</style>
