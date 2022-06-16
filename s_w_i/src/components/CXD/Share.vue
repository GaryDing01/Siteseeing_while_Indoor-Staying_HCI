<template>
  <div class="cxd-share">
    <Header></Header>
    <div>
      <div class="content">
        <div class="note-container">
          <div class="note-wrapper">
            <div class="note-column">
              <!-- <div class="note">
                <div class="note-info">
                  <div class="page">
                    <div class="box">
                      <div class="slideWrapper" style="visibility: hidden;">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_5.jpg"
                            alt="5"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_1.jpg"
                            alt="1"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_2.jpg"
                            alt="2"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_3.jpg"
                            alt="3"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_4.jpg"
                            alt="4"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_5.jpg"
                            alt="5"
                        /></a>
                      </div>
                      <div class="slideWrapper">
                        <a href="#" target="_blank"
                          ><img
                            class="slide img"
                            src="../../assets/Share/500_1.jpg"
                            alt="1"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <a class="title">上海佘山，出门野餐时记得带水果呀</a>
                </div>
                <div class="info">
                  <div class="user">
                    <div class="user-image-wrapper">
                      <img class="img" src="../../assets/user1.jpg" />
                    </div>
                    <span class="user-name">shadon</span>
                  </div>
                  <div class="like">
                    <i class="heart"></i>
                    <span class="like-num">221</span>
                  </div>
                </div>
              </div>
              </div> -->
            </div>
            <div class="note-column"></div>
            <div class="note-column"></div>
            <div class="note-column"></div>
            <div class="note-column"></div>
          </div>
        </div>
      </div>
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
      //判断当前移动的note的图片
      index: 1,
      isKeyDown: false,
      isDragingImg: false,
      DEFAULT_DURATION: "300ms",
      ANIMATION_INTERVAL: 3000,
      //所有note的当前显示图片
      init_pic: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      like: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    };
  },
  // created() {
  //   this.init_dom();
  // },
  mounted() {
    window.onload = this.init();
  },
  methods: {
    init() {
      this.init_dom();
      this.init_fun();
      this.init_session();
    },
    init_dom() {
      let note_column = document.querySelectorAll(".note-column");
      for (let i = 0; i < note_column.length; i++) {
        //每一列最多4个元素
        for (let j = 0; j < 4; j++) {
          let note_div = document.createElement("div");
          note_div.classList.add("note");
          // note-info标签
          let note_info_div = document.createElement("div");
          note_info_div.classList.add("note-info");
          //page标签
          let page_div = document.createElement("div");
          page_div.classList.add("page");
          //box标签
          let box_div = document.createElement("div");
          box_div.classList.add("box");
          //每个box下面有7个slideWrapper
          //图片
          for (let k = 0; k < 7; k++) {
            let slideWrapper_div = document.createElement("div");
            if (k == 0) {
              slideWrapper_div.classList.add("slideWrapper");
              slideWrapper_div.style = "visibility: visible;";
              let temp_a = document.createElement("a");
              temp_a.href = "#/Detail/" + (i * 4 + j);
              temp_a.target = "_self";
              let slide_img = document.createElement("img");
              slide_img.classList.add("slide");
              slide_img.classList.add("img");
              slide_img.src = shareInfo.sharePicList[i][j][4]; //第一个节点用最后一张图
              slide_img.alt = "5";
              temp_a.appendChild(slide_img);
              slideWrapper_div.appendChild(temp_a);
            } else {
              if (k != 6) {
                slideWrapper_div.classList.add("slideWrapper");
                let temp_a = document.createElement("a");
                temp_a.href = "#/Detail/" + (i * 4 + j);
                temp_a.target = "_self";
                let slide_img = document.createElement("img");
                slide_img.classList.add("slide");
                slide_img.classList.add("img");
                slide_img.src = shareInfo.sharePicList[i][j][(k % 6) - 1];
                slide_img.alt = (k % 6).toString;
                temp_a.appendChild(slide_img);
                slideWrapper_div.appendChild(temp_a);
              } else {
                slideWrapper_div.classList.add("slideWrapper");
                let temp_a = document.createElement("a");
                temp_a.href = "#/Detail/" + (i * 4 + j);
                temp_a.target = "_self";
                let slide_img = document.createElement("img");
                slide_img.classList.add("slide");
                slide_img.classList.add("img");
                slide_img.src = shareInfo.sharePicList[i][j][0];
                slide_img.alt = (k % 5).toString;
                temp_a.appendChild(slide_img);
                slideWrapper_div.appendChild(temp_a);
              }
            }
            box_div.appendChild(slideWrapper_div);
          }
          //移动显式第一张图片
          box_div.style.transform = `translateX(${-220}px)`;
          //将图片节点添加进去
          page_div.appendChild(box_div);
          //创建title标签
          let title_a = document.createElement("a");
          title_a.classList.add("title");
          title_a.innerText = shareInfo.title[i][j];
          // 将page和title插入到note-info中
          note_info_div.appendChild(page_div);
          note_info_div.appendChild(title_a);
          //创建info标签，包含了user和like
          let info_div = document.createElement("div");
          info_div.classList.add("info");
          // 创建user标签
          let user_div = document.createElement("div");
          user_div.classList.add("user");
          // user标签下的头像
          let user_img_wrapper_div = document.createElement("div");
          user_img_wrapper_div.classList.add("user-image-wrapper");
          let temp_img = document.createElement("img");
          temp_img.classList.add("img");
          temp_img.src = shareInfo.user_pic[i][j];
          user_img_wrapper_div.appendChild(temp_img);
          // user标签下的昵称
          let user_name_span = document.createElement("span");
          user_name_span.classList.add("user-name");
          user_name_span.innerText = shareInfo.user_name[i][j];
          //将头像和昵称插入到user中
          user_div.appendChild(user_img_wrapper_div);
          user_div.appendChild(user_name_span);
          //创建like标签,包含了heart和like-num
          let like_div = document.createElement("div");
          like_div.classList.add("like");
          //like下面的heart
          let heart_i = document.createElement("i");
          heart_i.classList.add("heart");
          //like下面的like-num
          let like_num_span = document.createElement("span");
          like_num_span.classList.add("like-num");
          like_num_span.innerText = shareInfo.like_num[i][j];
          //将heart和like-num插入到like中
          like_div.appendChild(heart_i);
          like_div.appendChild(like_num_span);
          //将user和like插入到info中
          info_div.appendChild(user_div);
          info_div.appendChild(like_div);
          // 将note_info和info插入到note-info中
          note_div.appendChild(note_info_div);
          note_div.appendChild(info_div);
          note_column[i].appendChild(note_div);
        }
      }
    },
    init_fun() {
      //点赞功能
      let like_list = document.querySelectorAll(".like");
      for (let i = 0; i < like_list.length; i++) {
        let heart = like_list[i].querySelector(".heart");
        heart.addEventListener("click", () => {
          if(sessionStorage.getItem("uname")==null)
          {
            alert("请登录后点赞");
            return;
          }
          if (this.like[Math.floor(i / 4)][i % 4] == 0) {
            //爱心变红
            heart.classList.replace("heart", "red-heart");
            //赞的数量加一
            this.like[Math.floor(i / 4)][i % 4] = 1;
            shareInfo.like_num[Math.floor(i / 4)][i % 4] =
              shareInfo.like_num[Math.floor(i / 4)][i % 4] + 1;
            let like_num_span = like_list[i].querySelector(".like-num");
            like_num_span.innerText =
              shareInfo.like_num[Math.floor(i / 4)][i % 4];

            //sessionStorage
            if (sessionStorage.getItem("like-num") == null) {
              sessionStorage.setItem("like-num", 1);
              sessionStorage.setItem("like-1-col", Math.floor(i / 4));
              sessionStorage.setItem("like-1-index", i % 4);
            } else {
              let collect_num = Number(sessionStorage.getItem("like-num"));
              collect_num += 1;
              sessionStorage.setItem("like-num", collect_num);
              sessionStorage.setItem(
                "like-" + collect_num + "-col",
                Math.floor(i / 4)
              );
              sessionStorage.setItem("like-" + collect_num + "-index", i % 4);
            }
          } else {
            //爱心变灰
            heart.classList.replace("red-heart", "heart");
            //赞的数量减一
            this.like[Math.floor(i / 4)][i % 4] = 0;
            shareInfo.like_num[Math.floor(i / 4)][i % 4] =
              shareInfo.like_num[Math.floor(i / 4)][i % 4] - 1;
            let like_num_span = like_list[i].querySelector(".like-num");
            like_num_span.innerText =
              shareInfo.like_num[Math.floor(i / 4)][i % 4];

            //sessionStorage
            let collect_num = Number(sessionStorage.getItem("like-num"));
            for (let j = 1; j <= collect_num; j++) {
              if (
                sessionStorage.getItem("like-" + j + "-col") ==
                  "" + Math.floor(i / 4) &&
                sessionStorage.getItem("like-" + j + "-index") == "" + (i % 4)
              ) {
                sessionStorage.removeItem("like-" + j + "-col");

                sessionStorage.removeItem("like-" + j + "-index");
              }
            }
            collect_num -= 1;
            sessionStorage.setItem("like-num", collect_num);
            if (collect_num == 0) {
              sessionStorage.removeItem("like-num");
            }
          }
        });
      }
      let note_list = document.querySelectorAll(".note");
      //跳转功能
      for (let i = 0; i < note_list.length; i++) {
        note_list[i].addEventListener("click", () => {
          // this.$router.push({
          //   path: `/detail/${this.nowIndex}`
          // });
          // window.open(`#Detail/` + i, "_blank");
        });
      }
      //移动图片功能
      for (let i = 0; i < note_list.length; i++) {
        note_list[i].addEventListener("mouseenter", () => {
          this.now_note_column = Math.floor(i / 4);
          this.now_note_index = i % 4;
          note_list[i].classList.add("current-note");
          let note_box = note_list[i].querySelector(".box");
          note_box.classList.add("current-box");
          let slide_list = note_list[i].querySelectorAll(".slide");
          let slideWrapper_list = note_list[i].querySelectorAll(
            ".slideWrapper"
          );
          for (let k = 0; k < slide_list.length; k++) {
            slide_list[k].classList.add("current-slide");
            slideWrapper_list[k].classList.add("current-slideWrapper");
          }
          this.add_fun();
        });
        note_list[i].addEventListener("mouseleave", () => {
          let slide_list = note_list[i].querySelectorAll(".current-slide");
          let slideWrapper_list = note_list[i].querySelectorAll(
            ".current-slideWrapper"
          );
          for (let k = 0; k < slide_list.length; k++) {
            slide_list[k].classList.remove("current-slide");
            slideWrapper_list[k].classList.remove("current-slideWrapper");
          }
          let note_box = note_list[i].querySelector(".current-box");
          note_box.classList.remove("current-box");
          note_list[i].classList.remove("current-note");
          this.remove_fun();
        });
      }
    },
    init_session() {
      //如果已点赞，桃心为红，点赞数加1
      if (sessionStorage.getItem("like-num") != null) {
        let like_num = sessionStorage.getItem("like-num");
        let like_list = document.querySelectorAll(".like");
        for (let i = 1; i <= like_num; i++) {
          let temp_col = Number(sessionStorage.getItem("like-" + i + "-col"));
          let temp_index = Number(
            sessionStorage.getItem("like-" + i + "-index")
          );
          like_list[temp_col * 4 + temp_index]
            .querySelector(".heart")
            .classList.replace("heart", "red-heart");
          this.like[temp_col][temp_index] = 1;
          let like_num_span = like_list[
            temp_col * 4 + temp_index
          ].querySelector(".like-num");
          if (sessionStorage.getItem("like-" + i + "-flag") != null) {
            sessionStorage.removeItem("like-" + i + "-flag");
            like_num_span.innerText = shareInfo.like_num[temp_col][temp_index]+1;
          } else
            like_num_span.innerText = shareInfo.like_num[temp_col][temp_index];
        }
      }
    },
    add_fun() {
      //initialize - set variables value
      this.imgLen = document.querySelectorAll(".current-slide").length;
      this.moveWith = document.querySelector(".current-slide").offsetWidth;
      this.currentOffset = this.moveWith;
      this.minMoveOffset = this.moveWith / 2;
      this.currentOffset =
        this.currentOffset +
        this.init_pic[this.now_note_column][this.now_note_index] *
          this.moveWith;
      this.boxDom = document.querySelector(".current-box");

      //初始化 - 切换到第一张幻灯片
      this.changeboxDomStyle(-this.currentOffset);
      // this.autoPlay();
      this.mouseMoveImg();
      this.stopImgDrag();
      this.linkClickContr();

      //调整窗口大小时重置参数和 offsetX
      // window.addEventListener(
      //   "resize",
      //   () => {
      //     this.moveWith = document.querySelector(".current-slide").offsetWidth;
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
      let slideImgs = document.querySelectorAll(".current-slide");
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
        if (this.moveX != 0) this.isDragingImg = true;
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
          this.init_pic[this.now_note_column][this.now_note_index] -= 1;
          if (this.init_pic[this.now_note_column][this.now_note_index] == -1) {
            this.init_pic[this.now_note_column][this.now_note_index] =
              this.imgLen - 3;
          }
          console.log("看到左边的图片", this.index);
          if (this.index === 1) {
            //back to slide 8
            this.changeboxDomStyle(this.moveWith - this.currentOffset, "300ms");
            this.index = this.imgLen - 2;
            this.currentOffset = this.index * this.moveWith;
          } else {
            this.index = this.index - 1;
            this.currentOffset = this.currentOffset - this.moveWith;
            this.changeboxDomStyle(-this.currentOffset, "300ms");
          }
        } else {
          //move forward next img
          this.init_pic[this.now_note_column][this.now_note_index] += 1;
          if (
            this.init_pic[this.now_note_column][this.now_note_index] ==
            this.imgLen - 2
          ) {
            this.init_pic[this.now_note_column][this.now_note_index] = 0;
          }
          console.log("看到右边的图片", this.index);
          this.currentOffset = this.currentOffset + this.moveWith;
          this.index = this.index + 1;
          this.changeboxDomStyle(-this.currentOffset, "300ms");
          if (this.index === this.imgLen - 1) {
            //move forward to slide 1
            this.changeboxDomStyle(-this.currentOffset, "300ms");
            this.currentOffset = this.moveWith;
            this.index = 1;
          }
        }
      } else {
        this.changeboxDomStyle(-this.currentOffset, "300ms");
      }
      // this.autoPlay();
    },
    //stop link redirect when customer use mouse move
    linkClickContr() {
      let aNodeList = document.querySelectorAll(".current-slideWrapper > a");
      for (let i of aNodeList)
        i.addEventListener("click", e => {
          if (this.isDragingImg) {
            e.preventDefault();
          }
        });
    },
    remove_fun() {
      this.boxDom.removeEventListener("mousedown", this.mouseDown);
      this.boxDom.removeEventListener("mousemove", this.mouseMove);
      this.boxDom.removeEventListener("mouseup", this.mouseUp);
    }
  }
};
</script>

<style>
.background {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
}

.cxd-share {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* content */
.cxd-share .content {
  position: relative;
  margin-top: 100px;
  padding-bottom: 50px;
  /* border-top: 1px solid #eee; */
  background-color: #fff;
}
.cxd-share .content .note-container {
  margin: 30px 0 0;
}
.cxd-share .content .note-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.cxd-share .content .note-wrapper .note-column {
  margin: 0 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.cxd-share .content .note-wrapper .note-column .note {
  width: 220px;
  margin: 0 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
@keyframes larger {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
.cxd-share .content .note-wrapper .note-column .current-note {
  z-index: 2;
  animation: larger 0.3s ease-out forwards;
}
/* .note::after {             */
/* 需要显示的内容为空 */
/* content: ""; */
/* color: #fff; */
/* display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3) no-repeat center;
  background-size: 30px 30px;
} */
.cxd-share .note .page {
  width: 100%;
  /* 让视线范围内只显示一张图片 */
  overflow: hidden;
  /* 用于点的定位 */
  position: relative;
}
.cxd-share .note .page .box {
  display: flex;
  /* 设置flex布局，默认从左到右依次排列。 */
}
.cxd-share .page .box .slideWrapper {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  /* 不让容器等比例缩小 */
}
.cxd-share .note .note-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.cxd-share .note .note-info .img {
  width: 100%;
}
.cxd-share .note .note-info .title {
  padding: 0;
  margin: 10px 15px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.cxd-share .note .info {
  padding: 0 15px 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cxd-share .note .info .user {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.cxd-share .note .info .user .user-image-wrapper {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.cxd-share .note .info .user .user-image {
  width: 100%;
  height: 100%;
}
.cxd-share .note .info .user .user-name {
  width: 87px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 10px;
  color: #555;
  font-size: 12px;
}

.cxd-share .note .info .like {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.cxd-share .note .info .like .heart {
  width: 18px;
  height: 18px;
  background-image: url("../../assets/Share/heart_gray.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.cxd-share .note .info .like .red-heart {
  width: 18px;
  height: 18px;
  background-image: url("../../assets/Share/heart_red.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.cxd-share .note .info .like .like-num {
  margin-right: 10px;
  margin-left: 8px;
  color: #555;
  font-size: 12px;
}
.cxd-share .lazyload {
  transition: opacity 0.7s ease;
}
.cxd-share .lazyload .loaded {
  opacity: 1;
}
</style>
