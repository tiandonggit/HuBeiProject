<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
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

.pointer {
  cursor: pointer;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
