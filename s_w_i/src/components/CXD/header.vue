<template>
  <div class="header light-theme">
    <div class="logo-container">
      <div class="logo">
        <img class="img" src="../../assets/logo.png" />
      </div>
    </div>
    <ul class="navigation-bar">
      <div class="active item current-tab">旅游社区</div>
      <div class="active item-share ">分享笔记</div>
      <div class="active item">阿巴阿巴</div>
      <div class="active item">阿巴阿巴</div>
      <div class="active item">个人中心</div>
      <div class="active item">登录/注册</div>
    </ul>
  </div>
</template>
<script>
var header_now_tab = 0;
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
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
          if (header_now_tab == 1) {
            tabs[1].classList.remove("item-share-current");
          } else tabs[header_now_tab].classList.remove("current-tab");
          header_now_tab = i;
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
/* header */
.header {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 16px;
  font-family: PingFang SC, Helvetica, Arial, sans-serif;
  font-weight: 500;
}
.header .logo-container {
  height: 60px;
  margin-left: 91px;
  display: flex;
  align-items: center;
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
.header .navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 220px;
  padding: 0;
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
  background-color: white;
}
</style>
