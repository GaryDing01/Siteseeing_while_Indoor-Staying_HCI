<template>
<el-header class="firstHeader">
    <div class="header light-theme">
        <div class="logo-container">
            <div class="logo">
                <img class="img" src="../../assets/yishian_1.png" />
            </div>
        </div>

        <label style="font-size:;color:grey;margin-top:0.5%;margin-left:-12%;font-family:Helvetica;" class="slogan1">足不出户，看遍世界</label>

        <ul class="navigation-bar">
            <div class="active item current-tab">旅游社区</div>
            <div class="active item-share ">分享笔记</div>
            <div class="active item">阿巴阿巴</div>
            <div class="active item">阿巴阿巴</div>
            <div class="active item">个人中心</div>
            <div class="active item">登录/注册</div>
            <a href="https://github.com/DukeofCambridge">
                    <img src="../../assets/BiliBili.png" style="transform:scale(0.2);display: flex; margin-left:-20%;" alt="BiliBili"/>
            </a>
            <a href="https://space.bilibili.com/436137288">
                    <img src="../../assets/QQ-03.png" style="transform:scale(0.17);display: flex; margin-left:-90%;" alt="QQ"/>
            </a>
            <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwMzIyMTE2NQ==&scene=124#wechat_redirect">
                    <img src="../../assets/Wechat.png" style="transform:scale(0.15);display: flex; margin-left:-160%;" alt="Wechat"/>
            </a>
        </ul>
        

  </div>
  <el-divider></el-divider>
</el-header>
</template>
<script>
var now_tab = 0;
export default {
  
  name:'Header',

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
*{
    margin:-8px;
    padding:0px;
}

/* DCH尝试Header */
.firstHeader{
    background-image: url("../../assets/firstHeader_13.png");
    width:100%;
    /* background-color:green; */
    background-size: 100%;
    opacity:1;
    position:fixed;
    z-index:12;
}

/deep/ .el-divider{
    background-color:black;
    margin-top:1%;
    margin-left:0.01%;
    opacity:0.1;
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
  margin-top:1%;
  margin-left: 4%;
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

.header .slogan1{
    /* font-size:; */
    color:grey;
    margin-top:0.5%;
    margin-left:-12%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.header .navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:1%;
  margin-right: -23.5%;
  padding: 0;
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
</style>

