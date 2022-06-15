<template>
  <div class="cxd-detail">
    <Header></Header>
    <div class="content">
      <div class="left">
        <div class="left-content">
          <div class="note">
            <div class="note-info">
              <div class="page">
                <div class="box">
                  <div class="slideWrapper" style="visibility: visiable;">
                    <img class="slide img" :src="slideImg[4]" alt="5" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[0]" alt="1" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[1]" alt="2" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[2]" alt="3" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[3]" alt="4" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[4]" alt="5" />
                  </div>
                  <div class="slideWrapper">
                    <img class="slide img" :src="slideImg[0]" alt="1" />
                  </div>
                </div>
              </div>
            </div>
            <div class="pic-tab">
              <div class="each active">
                <div
                  class="img"
                  :style="{
                    'background-image': 'url(' + eachBackgroundImage[0] + ')'
                  }"
                ></div>
              </div>
              <div class="each">
                <div
                  class="img"
                  :style="{
                    'background-image': 'url(' + eachBackgroundImage[1] + ')'
                  }"
                ></div>
              </div>
              <div class="each">
                <div
                  class="img"
                  :style="{
                    'background-image': 'url(' + eachBackgroundImage[2] + ')'
                  }"
                ></div>
              </div>
              <div class="each">
                <div
                  class="img"
                  :style="{
                    'background-image': 'url(' + eachBackgroundImage[3] + ')'
                  }"
                ></div>
              </div>
              <div class="each">
                <div
                  class="img"
                  :style="{
                    'background-image': 'url(' + eachBackgroundImage[4] + ')'
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-content">
          <div class="user">
            <div class="user-image-wrapper">
              <img class="user-image" src="../../assets/Share/user1.jpg" />
            </div>
            <div class="user-name">李白</div>
            <div class="heart"></div>
          </div>
          <div class="note-content">
            <div class="note-header">
              <div class="title">
                <div class="title-text">人间四月芳菲尽，山寺桃花始盛开。</div>
              </div>
            </div>
            <div class="note-detail">
              人间四月芳菲尽,山寺桃花始盛开,四月，走在春末的季里。只需舒眉一瞻，便有柔柔的明媚妖娆了眼眸。绿柳吐烟，陌上花艳。四月的天爱上了三月的地，但却离她太远，等到他思念的忧伤逆流成河时，天就会下起这丝丝入怀的雨，刮起这满面桃花的风。四月的风，恣意地吹拂亲吻着我们的脸，轻轻摇曳着我们的心；四月的云，躲在星空之中，默默地承载着尘世永恒的依恋。四月美在祭祖的哀思，美在人间的温情，四月，美在诗里。
            </div>
            <div class="date">05-02</div>
            <div class="comment">
              <div class="comment-num">
                共<span class="num">{{ comment_num }}</span
                >条评论
              </div>
              <div class="my-comment">
                <div class="comment-user">
                  <img class="user-img" :src="my_pic" />
                </div>
                <input
                  type="text"
                  class="comment-input"
                  placeholder="爱评论的人运气都不差~"
                />
                <button class="input-btn">提交</button>
                <div style="clear:both"></div>
              </div>
              <!-- <li class="comment-index">
                <div class="comment-user">
                  <img class="user-img" src="../../assets/Share/user1.jpg" />
                </div>
                <div class="comment-detail">
                  <div class="user-name">shadon</div>
                  <div class="comment-content">
                    四月的天爱上了三月的地，但却离她太远，等到他思念的忧伤逆四月的天爱上了三月的地，但却离她太远，等到他思念的忧伤逆
                    <span class="comment-date">
                      04-20
                    </span>
                  </div>
                </div>
              </li> -->
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>
<script>
// import Header from "@/components/CXD/header";
import Header from "@/components/CXD/Header_update1";
import shareInfo from "@/components/CXD/shareInfo";
export default {
  components: {
    Header
  },
  data() {
    return {
      index: 1,
      isKeyDown: false,
      isDragingImg: false,
      DEFAULT_DURATION: "300ms",
      ANIMATION_INTERVAL: 3000,
      like: 0,
      noteColumn: 0,
      noteIndex: 0,
      slideImg: [],
      eachBackgroundImage: [],
      // 评论
      comment_num: 0,
      comment: [],
      comment_pic: [],
      comment_name: [],
      comment_date: [],
      //用户自己的评论
      my_comment: "",
      //用户本人信息
      my_name: "Shadon",
      my_pic: require("@/assets/Share/user1.jpg")
    };
  },
  mounted() {
    window.onload = this.init();
  },
  methods: {
    init() {
      this.init_dom();
      this.init_fun();
    },
    init_dom() {
      //用户信息
      if (sessionStorage.getItem("uname") != null) {
        this.my_name = sessionStorage.getItem("uname");
        // this.my_pic="url("+sessionStorage.getItem("user-img")+")";
        this.my_pic = sessionStorage.getItem("user-img");
      }

      //图片渲染
      this.noteColumn = Math.floor(Number(this.$route.params.noteIndex) / 4);
      this.noteIndex = Number(this.$route.params.noteIndex) % 4;
      this.slideImg = shareInfo.sharePicList[this.noteColumn][this.noteIndex];
      this.eachBackgroundImage =
        shareInfo.sharePicList[this.noteColumn][this.noteIndex];
      // 评论数据
      this.comment = shareInfo.comment[this.noteColumn][this.noteIndex];
      this.comment_pic = shareInfo.comment_pic[this.noteColumn][this.noteIndex];
      this.comment_name =
        shareInfo.comment_name[this.noteColumn][this.noteIndex];
      this.comment_date =
        shareInfo.comment_date[this.noteColumn][this.noteIndex];
      this.comment_num = this.comment.length;
      //右边的note信息长度与左边一致
      let timeInterval = window.setInterval(() => {
        let height = document.querySelector(".left").offsetHeight;
        if (height > 200) {
          let right_div = document.querySelector(".right");
          right_div.style.height = height + "px";
          window.clearInterval(timeInterval);
        }
      }, 10);

      //评论信息、
      //包含所有评论的div
      for (let i = 0; i < this.comment_num; i++) {
        this.add_comment(
          this.comment_pic[i],
          this.comment_name[i],
          this.comment[i],
          this.comment_date[i]
        );
      }
    },
    add_comment(img_src, user_name, content, date) {
      //添加评论
      let comment_div = document.querySelector(".comment");
      //包含单个评论的li
      let comment_li = document.createElement("li");
      comment_li.classList.add("comment-index");
      //li里面的user div，存储头像
      let user_div = document.createElement("div");
      user_div.classList.add("comment-user");
      //user头像
      let user_img = document.createElement("img");
      user_img.classList.add("user-image");
      user_img.src = img_src;
      user_img.style.maxWidth = "40px";
      user_div.appendChild(user_img);
      //li里面的detail div，存储评论者昵称和评论内容，时间
      let comment_detail_div = document.createElement("div");
      comment_detail_div.classList.add("comment-detail");
      //评论者昵称
      let user_name_div = document.createElement("div");
      user_name_div.classList.add("user-name");
      user_name_div.innerText = user_name;
      //评论内容
      let comment_content_div = document.createElement("div");
      comment_content_div.classList.add("comment-content");
      comment_content_div.innerText = content;
      //评论时间
      let comment_date_span = document.createElement("span");
      comment_date_span.classList.add("comment-date");
      comment_date_span.innerText = date;
      comment_content_div.appendChild(comment_date_span);
      comment_detail_div.appendChild(user_name_div);
      comment_detail_div.appendChild(comment_content_div);
      comment_li.appendChild(user_div);
      comment_li.appendChild(comment_detail_div);
      comment_div.appendChild(comment_li);
    },
    init_fun() {
      // 点赞功能
      let heart = document.querySelector(".heart");
      heart.addEventListener("click", () => {
        if (sessionStorage.getItem("uname") == null) {
          alert("请登录后点赞");
          return;
        }
        if (this.like == 0) {
          this.like = 1;
          heart.classList.replace("heart", "red-heart");
          if (sessionStorage.getItem("like-num") == null) {
            sessionStorage.setItem("like-num", 1);
            sessionStorage.setItem("like-1-col", this.noteColumn);
            sessionStorage.setItem("like-1-index", this.noteIndex);
            //设置flag,标注为detail页面的点赞
            sessionStorage.setItem("like-1-flag", true);
          } else {
            let like_num = Number(sessionStorage.getItem("like-num"));
            like_num += 1;
            sessionStorage.setItem("like-num", like_num);
            sessionStorage.setItem(
              "like-" + like_num + "-col",
              this.noteColumn
            );
            sessionStorage.setItem(
              "like-" + like_num + "-index",
              this.noteIndex
            );
            //设置flag,标注为detail页面的点赞
            sessionStorage.setItem("like-" + like_num + "-flag", true);
          }
        } else {
          this.like = 0;
          heart.classList.replace("red-heart", "heart");
          let like_num = Number(sessionStorage.getItem("like-num"));
          for (let i = 1; i <= like_num; i++) {
            if (
              sessionStorage.getItem("like-" + i + "-col") ==
                "" + this.noteColumn &&
              sessionStorage.getItem("like-" + i + "-index") ==
                "" + this.noteIndex
            ) {
              sessionStorage.removeItem("like-" + i + "-col");
              sessionStorage.removeItem("like-" + i + "-index");
            }
          }
          //设置flag,标注为detail页面的点赞
          if (sessionStorage.getItem("like-" + like_num + "-flag") == "true")
            sessionStorage.removeItem("like-" + like_num + "-flag");

          like_num -= 1;
          sessionStorage.setItem("like-num", like_num);
          if (like_num == 0) {
            sessionStorage.removeItem("like-num");
          }
        }
      });
      //图片切换功能
      let each_list = document.querySelectorAll(".each");
      for (let i = 0; i < each_list.length; i++) {
        each_list[i].addEventListener("click", () => {
          each_list[this.index - 1].classList.remove("active");
          this.index = i + 1;
          each_list[i].classList.add("active");
          this.add_fun(1);
        });
      }
      //图片拖动功能
      this.add_fun();

      //评论功能
      let comment_div = document.querySelector(".comment-input");
      let input_btn = document.querySelector(".input-btn");
      comment_div.addEventListener("click", () => {
        comment_div.style.background = "white";
        input_btn.style.display = "block";
      });
      input_btn.addEventListener("click", () => {
        if (sessionStorage.getItem("uname") == null) {
          alert("请登陆后再进行评论");
          return;
        }
        if (comment_div.value == "") return;
        this.my_comment = comment_div.value;
        // this.add_comment(this.my_pic,this.my_name,this.my_comment,)
        let today = new Date();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        if (month < 10) month = "0" + month;
        else month = "" + month;
        if (date < 10) date = "0" + date;
        else date = "" + date;
        this.add_comment(
          this.my_pic,
          this.my_name,
          this.my_comment,
          month + "-" + date
        );
        this.comment_num += 1;
        comment_div.value = "";
        comment_div.style.background = "rgb(200, 200, 200, 0.1)";
        input_btn.style.display = "none";
      });
    },
    add_fun(flag = 0) {
      if (flag != 0) {
        this.imgLen = document.querySelectorAll(".slide").length;
        this.moveWith = document.querySelector(".slide").offsetWidth;
        this.currentOffset = this.moveWith;
        this.minMoveOffset = this.moveWith / 2;
        this.currentOffset =
          this.currentOffset + (this.index - 1) * this.moveWith;
        this.boxDom = document.querySelector(".box");

        //initailize - switch to first slide and make slide 8 backup visible
        this.changeboxDomStyle(-this.currentOffset);
        return;
      }
      //initialize - set variables value
      this.imgLen = document.querySelectorAll(".slide").length;
      this.moveWith = document.querySelector(".slide").offsetWidth;
      this.currentOffset = this.moveWith;
      this.minMoveOffset = this.moveWith / 2;
      this.currentOffset =
        this.currentOffset + (this.index - 1) * this.moveWith;
      this.boxDom = document.querySelector(".box");

      //initailize - switch to first slide and make slide 8 backup visible
      this.changeboxDomStyle(-this.currentOffset);
      // this.autoPlay();
      this.mouseMoveImg();
      this.stopImgDrag();

      //reset parameter and offsetX when window resize
      // window.addEventListener(
      //   "resize",
      //   () => {
      //     this.moveWith = document.querySelector(".slide").offsetWidth;
      //     this.minMoveOffset = this.moveWith / 2;
      //     this.currentOffset = this.index * this.moveWith;
      //     this.changeboxDomStyle(-this.currentOffset);
      //   },
      //   false
      // );
    },
    changeboxDomStyle(offset, duration = "0ms") {
      this.boxDom.style.transform = `translateX(${offset}px)`;
      this.boxDom.style.transitionDuration = duration;
    },
    carousel() {
      this.boxDom.addEventListener("transitionend", () => {
        if (this.index === this.imgLen - 1) {
          this.index = 1;
          this.currentOffset = this.moveWith;
          this.changeboxDomStyle(-this.currentOffset);
        }
      });

      if (this.index < this.imgLen - 1) {
        this.index++;
        this.currentOffset = this.moveWith * this.index;
        this.changeboxDomStyle(-this.currentOffset, this.DEFAULT_DURATION);
      }
    },
    stopAutoPlay() {
      //only auto play active then clearInterval in case extra action
      if (!this.isAutoPlay) {
        return;
      }
      this.isAutoPlay = false;
      clearInterval(this.animate);
    },
    autoPlay() {
      //only auto play stop then setInterval in case extra action
      if (this.isAutoPlay) {
        return;
      }
      this.isAutoPlay = true;
      this.animate = setInterval(this.carousel, this.ANIMATION_INTERVAL);
    },
    stopImgDrag() {
      let slideImgs = document.querySelectorAll(".slide");
      for (let i = 0; i < slideImgs.length; i++) {
        slideImgs[i].ondragstart = () => {
          return false;
        };
      }
    },
    mouseMoveImg() {
      this.boxDom.addEventListener("mousedown", this.mouseDown, false);
      this.boxDom.addEventListener("mousemove", this.mouseMove, false);
      this.boxDom.addEventListener("mouseup", this.mouseUp, false);
    },
    mouseDown(e) {
      // this.stopAutoPlay();
      this.isKeyDown = true;
      this.isDragingImg = false;
      this.currentX = e.clientX;
    },
    mouseMove(e) {
      if (this.isKeyDown) {
        this.moveX = e.clientX - this.currentX;
        let moveOffset = this.moveX - this.currentOffset;
        this.changeboxDomStyle(moveOffset);
        this.isDragingImg = true;
        let parent = this.boxDom.parentNode;
        //获得父节点的坐标已经宽度
        let position = parent.getBoundingClientRect();
        if (this.moveX + this.currentX < position.x + 1) {
          this.isDragingImg = false;
          this.moveX = 0;
          this.mouseUp();
        }
        if (this.moveX + this.currentX > position.x + position.width - 1) {
          this.isDragingImg = false;
          this.moveX = 0;
          this.mouseUp();
        }
      }
    },
    mouseUp() {
      this.tempfunction();
    },
    tempfunction() {
      this.isKeyDown = false;
      if (Math.abs(this.moveX) > this.minMoveOffset) {
        if (this.moveX > 0) {
          //move back previous img
          if (this.index === 1) {
            //back to slide 7
            this.changeboxDomStyle(this.moveWith - this.currentOffset, "300ms");
            this.index = this.imgLen - 2;
            this.currentOffset = this.index * this.moveWith;
            //改变each
            let each_list = document.querySelectorAll(".each");
            each_list[0].classList.remove("active");
            each_list[this.index - 1].classList.add("active");
          } else {
            this.index = this.index - 1;
            this.currentOffset = this.currentOffset - this.moveWith;
            this.changeboxDomStyle(-this.currentOffset, "300ms");
            //改变each
            let each_list = document.querySelectorAll(".each");
            each_list[this.index].classList.remove("active");
            each_list[this.index - 1].classList.add("active");
          }
        } else {
          //move forward next img
          this.currentOffset = this.currentOffset + this.moveWith;
          this.index = this.index + 1;
          this.changeboxDomStyle(-this.currentOffset, "300ms");
          if (this.index === this.imgLen - 1) {
            //move forward to slide 1
            this.changeboxDomStyle(-this.currentOffset, "300ms");
            this.currentOffset = this.moveWith;
            this.index = 1;
            //改变each
            let each_list = document.querySelectorAll(".each");
            each_list[this.imgLen - 3].classList.remove("active");
            each_list[this.index - 1].classList.add("active");
          } else {
            //改变each
            let each_list = document.querySelectorAll(".each");
            each_list[this.index - 2].classList.remove("active");
            each_list[this.index - 1].classList.add("active");
          }
        }
      } else {
        this.changeboxDomStyle(-this.currentOffset, "300ms");
      }
      // this.autoPlay();
    }
  }
};
</script>
<style>
.cxd-detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.cxd-detail .comment {
  width: 100%;
}
.cxd-detail .comment .comment-num {
  margin: 20px 0;
}
.cxd-detail .comment-num .num {
  margin: 0 5px;
}
.cxd-detail .comment .my-comment {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  position: relative;
}
.cxd-detail .my-comment .comment-user {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.cxd-detail .my-comment .comment-user .user-img {
  width: 100%;
  height: 100%;
}
.cxd-detail .comment-input {
  height: 100%;
  width: calc(100% - 70px);
  margin-left: 20px;
  padding: 20px;
  padding-right: 90px;
  border-radius: 20px;
  border: 0.5px solid rgb(220, 220, 220);
  background: rgb(200, 200, 200, 0.1);
  /* background: white; */
  color: rgb(150, 150, 150);
}
.cxd-detail .my-comment .input-btn {
  display: none;
  position: absolute;
  right: 6%;
  top: 50%;
  width: 60px;
  height: 24px;
  margin-top: -12px;
  font-size: 12px;
  border-radius: 8px;
  border: 0.5px solid rgb(200, 0, 0);
  color: rgb(200, 0, 0);
  background-color: rgb(200, 200, 200, 0.1);
}
.cxd-detail .my-comment .input-btn:active {
  color: white;
  background-color: rgb(200, 0, 0);
}
.cxd-detail .comment .comment-index {
  width: 100%;
  padding: 10px 0;
  position: relative;
}
.cxd-detail .comment-index .comment-user {
  position: absolute;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.cxd-detail .comment-index .comment-user .user-img {
  width: 100%;
  height: 100%;
}
.cxd-detail .comment-index .comment-detail {
  padding-left: 50px;
}
.cxd-detail .comment-detail .user-name {
  color: #b8b5b5;
  font-size: 15px;
}
.cxd-detail .comment-detail .comment-content {
  padding-top: 5px;
  padding-bottom: 15px;
  font-size: 15px;
  border-bottom: 0.5px solid rgb(232 231 231);
}
.cxd-detail .comment-detail .comment-date {
  margin-left: 10px;
  font-size: 10px;
  color: #b8b5b5;
}
</style>
<style scoped>
.scrollbar {
  width: 30px;
  height: 300px;
  margin: 0 auto;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgb(240, 240, 240);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  background: #ededed;
}
* {
  box-sizing: border-box;
  list-style-type: none;
}
img {
  vertical-align: middle;
}
input {
  vertical-align: middle;
}
input:focus {
  outline: none;
}
.content {
  width: 100%;
  margin-top: 120px;
  margin-bottom: 100px;
}
.left {
  padding: 0px 20px 0 150px;
  width: 55%;
  float: left;
}
.left-content {
  width: 100%;
  padding: 20px 40px;
  background-color: rgb(250, 250, 250);
}
.note {
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.note .note-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.note-info .page {
  width: 100%;
  border-radius: 8px;
  /* 让视线范围内只显示一张图片 */
  overflow: hidden;
  /* 用于点的定位 */
  position: relative;
}
.note-info .page .box {
  display: flex;
  /* 设置flex布局，默认从左到右依次排列。 */
}
.page .box .slideWrapper {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  /* 不让容器等比例缩小 */
}
.page .box .slideWrapper .img {
  width: 100%;
}
.note .pic-tab {
  margin: 10px 0 0;
  text-align: center;
}
.note .pic-tab .each {
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 0 5px 0 0;
  border-radius: 4px;
  opacity: 0.6;
  transition: opacity 0.8s ease;
  cursor: pointer;
}
.note .pic-tab .active {
  box-shadow: 0 3px 8px 0 rgb(255 82 103 / 50%);
  border: 1px solid #ff2741;
  opacity: 1;
  transition: opacity 0.8s ease;
}
.note .pic-tab .each .img {
  width: 100%;
  height: 100%;
  display: block;
  /* background-image: url("../../assets/Share/500_1.jpg"); */
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 3px;
}
.right {
  width: 45%;
  /* height: 600px; */
  padding: 0 150px 0 0px;
  float: left;
}
.right-content {
  padding-right: 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.user {
  padding: 5px;
  padding-bottom: 0px;
  width: 100%;
  height: 60px;
  /* border-top: 0.5px solid rgb(232 231 231); */
}
.user .user-image-wrapper {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.user .user-image {
  width: 100%;
  height: 100%;
}
.user .user-name {
  float: left;
  width: 87px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #555;
  font-size: 20px;
  cursor: pointer;
}
.right .note-content {
  width: 100%;
  margin: 5px 0;
  overflow: hidden;
  position: relative;
}
.right .note-content .note-header {
  width: 100%;
}
.right .note-content .note-header .title {
  padding: 10px 0;
  display: flex;
  justify-items: center;
  align-items: center;
}
.right .note-content .note-header .title .title-text {
  font-size: 24px;
  font-weight: 500;
}
.right .heart {
  float: right;
  width: 30px;
  height: 30px;
  margin: 5px auto;
  cursor: pointer;
  background-image: url("../../assets/Share/heart_gray.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.red-heart {
  float: right;
  width: 30px;
  height: 30px;
  margin: 5px auto;
  cursor: pointer;
  background-image: url("../../assets/Share/heart_red.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.note-detail {
  margin-top: 10px;
  font-size: 15px;
  line-height: 30px;
}
.date {
  padding: 15px 0;
  font-size: 10px;
  border-bottom: 0.5px solid rgb(232 231 231);
  color: #b8b5b5;
}
.comment {
  width: 100%;
}
.comment .comment-num {
  margin: 20px 0;
}
.comment-num .num {
  margin: 0 5px;
}
.comment .my-comment {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  position: relative;
}
.my-comment .comment-user {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.my-comment .comment-user .user-img {
  width: 100%;
  height: 100%;
}
.comment-input {
  height: 100%;
  width: calc(100% - 70px);
  margin-left: 20px;
  padding: 20px;
  padding-right: 90px;
  border-radius: 20px;
  border: 0.5px solid rgb(220, 220, 220);
  background: rgb(200, 200, 200, 0.1);
  /* background: white; */
  color: rgb(150, 150, 150);
}
.my-comment .input-btn {
  display: none;
  position: absolute;
  right: 6%;
  top: 50%;
  width: 60px;
  height: 24px;
  margin-top: -12px;
  font-size: 12px;
  border-radius: 8px;
  border: 0.5px solid rgb(200, 0, 0);
  color: rgb(200, 0, 0);
  background-color: rgb(200, 200, 200, 0.1);
}
.my-comment .input-btn:active {
  color: white;
  background-color: rgb(200, 0, 0);
}
.comment .comment-index {
  width: 100%;
  padding: 10px 0;
  position: relative;
}
.comment-index .comment-user {
  position: absolute;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.comment-index .comment-user .user-img {
  width: 100%;
  height: 100%;
}
.comment-index .comment-detail {
  padding-left: 50px;
}
.comment-detail .user-name {
  color: #b8b5b5;
  font-size: 15px;
}
.comment-detail .comment-content {
  padding-top: 5px;
  padding-bottom: 15px;
  font-size: 15px;
  border-bottom: 0.5px solid rgb(232 231 231);
}
.comment-detail .comment-date {
  margin-left: 10px;
  font-size: 10px;
  color: #b8b5b5;
}
</style>
