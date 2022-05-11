<template>
  <div class="firstHeader" :style="{'--borderb':borderb}">
    <div class="header light-theme">
      <div class="logo-container">
        <div class="logo">
          <img class="img" src="../../assets/yishian_1.png" />
        </div>
      </div>

      <div class="phase" style=""></div>
      <!-- <div style="width:5%;background-color=black;"></div> -->

      <ul class="navigation-bar" style="">
        <div class="active item current-tab">旅游社区</div>
        <div class="active item-share ">分享笔记</div>
        <div class="active item">阿巴阿巴</div>
        <div class="active item">阿巴阿巴</div>
        <div class="active item">个人中心</div>
        <div class="active item">登录/注册</div>
      </ul>

      <div style="width:2.5%;height:80%;position:relative;margin-left: -90px;margin-right:-65px;">
        <a href="https://www.bilibili.com/" style="background-color:blue;">
          <img
            src="../../assets/BiliBili.png"
            style="transform:scale(0.17);display: flex;position:absolute;margin-left:-80px;margin-top:-100.5px;"
            alt="BiliBili"
          />
        </a>
      </div>
      <div style="width:2.5%;height:80%;position:relative;margin-right:-65px;">
        <a href="https://browser.qq.com/sem/sem049/index.html" style="background-color:red;">
          <img
            src="../../assets/QQ-03.png"
            style="transform:scale(0.15);display: flex;position:absolute;margin-left:-80px;margin-top:-100.5px;"
            alt="QQ"
          />
        </a>
      </div>
      <div style="width:2.5%;height:80%;position:relative;margin-right:39px;">
        <a href="https://wx.qq.com/">
          <img
            src="../../assets/Wechat.png"
            style="transform:scale(0.13);display: flex;position:absolute;margin-left:-80px;margin-top:-100.5px;"
            alt="Wechat"
          />
        </a>
      </div>
      
    </div>
    <!-- <el-divider></el-divider> -->
    <div style="margin-top:0px;"></div>
  </div>
</template>
<script>

import global from "../../assets/DCH/global.js"

var now_tab = 0;

export default {
  name: "Header_update1",
  components:{global},

  mounted() {
    this.borderb=global.transparent;
    this.init();
  },

  data() {
    return {
      borderb:"0.2px",
    };
  },
  
  methods: {
    init() {
      //给logo绑定事件
      let logo = document.querySelector(".logo");
      logo.addEventListener("click", function() {
        //跳转到笔记广场
      });
      //给tab栏绑定事件
      let tabs = document.getElementsByClassName("active");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
          if (now_tab == 1) {
            tabs[1].classList.remove("item-share-current");
          } else tabs[now_tab].classList.remove("current-tab");
          now_tab = i;
          if (i != 1) {
            tabs[i].classList.add("current-tab");
          } else tabs[i].classList.add("item-share-current");
          switch (i) {
            case 0:
              //跳转到笔记广场
              break;
            case 1:
              //跳转到分享页面
              break;
            case 2:
              //跳转到语音识别
              break;
            case 3:
              //跳转到AI
              break;
            case 4:
              //跳转到个人主页
              break;
            case 5:
              //跳转到登录登出
              break;
          }
        });
      }
    }
  }
};
</script>

<style scoped>
/* 去除body中的margin */
/* * {
  margin: 0px;
  padding: 0px;
} */

/* DCH尝试Header */
.firstHeader {
  background-image: url("../../assets/test1.png");
  width: 100%;
  /* background-color:green; */
  background-size: 100%;
  opacity: 1;
  position: fixed;
  z-index: 12;
  border-bottom-width: var(--borderb);
  border-bottom-style:dashed;
  border-bottom-color: rgb(215, 213, 213);
}

/* header */
.header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: PingFang SC, Helvetica, Arial, sans-serif;
  font-weight: 500;
}
.header .logo-container {
  height: 88%;
  margin-top: 0px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  /* background-color:blue; */
}
.header .logo-container .logo {
  cursor: pointer;
  margin-top: 1px;
  width: 180px;
  height: 60px;
  position: relative;
}
.header .logo-container .logo .img {
  height: 100%;
}

.header .phase {
  margin-top: 15px;
  margin-left: -50px;
  margin-right:45px;
  background-image: url("../../assets/phase.png");
  width: 200px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 1;
}

.header .navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  margin-left: 75px;
  margin-right: 60px;
  padding: 0px;
  /* background-color:blue; */
}
.header .navigation-bar .active {
  margin-left: 58px;
  text-decoration: none;
}
.header .navigation-bar .item {
  position: relative;
  cursor: pointer;
}
.header .navigation-bar .item::before {
  position: absolute;
  bottom: -8px;
  visibility: hidden;
  content: "";
  width: 100%;
  height: 2px;
  background-color: rgb(200, 0, 0);
  transform: translateX(-100%);
  border-radius: 2px;
  opacity: 0;
}
.header .navigation-bar .current-tab {
  color: rgb(200, 0, 0);
}
.header .navigation-bar .current-tab::before {
  visibility: visible;
  transform: translateX(0);
  opacity: 1;
}
.header .navigation-bar .item-share {
  position: relative;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid white;
  background-color: rgb(200, 0, 0);
  color: white;
}
.header .navigation-bar .item-share:hover {
  background-color: white;
  border: 1px solid rgb(200, 0, 0);
  color: rgb(200, 0, 0);
}
.header .navigation-bar .item-share-current {
  background-color: white;
  border: 1px solid rgb(200, 0, 0);
  color: rgb(200, 0, 0);
}
.light-theme {
  /* background-color: white; */
}

/deep/ .el-divider {
  background-color: black;
  margin-top: 16.5px;
  margin-left: 0px;
  padding:0px;
  opacity: 0.1;
}
</style>
