<template>
  <el-container class="personalCenter">
    <Header></Header>
    <el-container class="content">
      <el-container class="undercenter">
        <el-aside width="400px">
          <el-col :span="12">
            <div class="sub-title"></div>
            <div class="demo-basic--circle" style="text-align:center">
              <div class="item_bock">
                <label>
                  <img :src="circleUrl" class="profile" />
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFile"
                    class="hiddenInput"
                  />
                </label>
              </div>
              <div class="block">
                <span>{{ nickName }}</span>
              </div>
              <button v-show="show1" class="btn1" @click="showToggle">
                编辑信息
              </button>
            </div>
          </el-col>
          <div class="edit" v-show="isShow">
            <el-input
              v-model="nickName"
              type="text"
              placeholder="用户昵称"
              show-word-limit
            ></el-input>
            <el-input v-model="email" placehprofileolder="邮箱">
              <template slot="append">@163.com</template>
            </el-input>
            <el-input
              v-model="phone"
              type="text"
              placeholder="手机号码"
              maxlength="20"
              show-word-limit
            ></el-input>
            <el-button-group style="float: center; padding: 3px 0" type="text">
              <el-button type="danger" size="medium" round @click="showToggle"
                >保存</el-button
              >
              <el-button type="danger" size="medium" round @click="showToggle"
                >取消</el-button
              >
            </el-button-group>
          </div>
        </el-aside>
        <el-container class="post">
          <el-card class="box-card">
            <div class="btn_switch">
              <button
                class="btn_anniu"
                @click="change(0)"
                :class="{ newStyle: 0 === number }"
              >
                我的分享
              </button>
              <button
                class="btn_anniu"
                @click="change(1)"
                :class="{ newStyle: 1 === number }"
              >
                我的喜欢
              </button>
            </div>
            <div v-show="0 === number" style="height:568px;overflow-y:auto;">
              <div style="display:none" id="my-share">
                <div class="note-wrapper">
                  <div class="note-column">
                    <div class="note">
                      <div class="note-info">
                        <div class="info">
                          <div class="user">
                            <img :src="circleUrl" class="user-image" />
                            <span class="user-name">{{ nickName }}</span>
                          </div>
                          <div class="more">
                            <span class="iconfont">&#xe67f;</span>
                            <span class="like-num">0</span>
                            <!-- <span class="iconfont">&#xe683;</span>
                            <span class="like-num">0</span> -->
                            <span class="time">2022-05-14 12:20:51</span>
                          </div>
                        </div>
                        <div class="page">
                          <div id="swapper" class="b-1"></div>
                          <div class="box">
                            <div class="pic pp">
                              <!-- <img src="./1.jpg" alt="" /> -->
                              <img src="" alt="" />
                            </div>
                            <!-- <div class="pic"><img src="./2.jpg" alt="" /></div>
                            <div class="pic"><img src="./3.jpg" alt="" /></div>
                            <div class="pic"><img src="./4.jpg" alt="" /></div>
                            <div class="pic"><img src="./5.jpg" alt="" /></div> -->
                            <div class="pic"><img src="" alt="" /></div>
                            <div class="pic"><img src="" alt="" /></div>
                            <div class="pic"><img src="" alt="" /></div>
                            <div class="pic"><img src="" alt="" /></div>
                          </div>
                        </div>
                      </div>
                      <div class="note-content">
                        <div class="note-title">嘉北郊野公园</div>
                        <div class="note-word">
                          嘉北郊野公园位于上海市嘉定新城主城区西北部，东侧紧邻城北大型居住社区，南侧为上海国际赛车场，距轨道交通11号线嘉定西站2公里，规划面积13.98平方公里。规划定位为近郊休闲型郊野公园。
                          一期开园7.39平方公里。有4500亩水稻田，80亩彩色水稻田，90亩嘉北郊野公园位于嘉定主城区西北部，涉及到三个街镇。园区很大，一眼望去，有一望无际的田野、成片绿荫的树林、宽阔的农田，颇有些江南水乡的农村风貌。
                          中有十余座景观桥，布局心思巧腻，有各具特色的乔木、成片的灌木和植被，形成了如落樱缤纷、竹深荷静的景观意境。公园内还设有儿童森林探险区、欢聚休闲林、两片大草坪，供游客在草坪上休憩、野餐、游戏、搭帐篷，享受郊野的乐趣。园内提供游览车服务，游玩十分方便。河流水网是公园的特色之一，乘坐游船浏览的景色也别有一番风味。如果是喜欢自由规划路线的朋友也可以选择租辆自行车进行游览，租用价格根据车型不同而有所调整。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="1 === number" style="height:568px;overflow-y:auto">
              <div class="note-wrapper" id="my-like1" style="display:none">
                <div class="note-column">
                  <div class="note">
                    <div class="note-info">
                      <div class="info">
                        <div class="user">
                          <img class="user-image" src="" />
                          <span class="user-name"></span>
                        </div>
                        <div class="more">
                          <span class="iconfont">&#xe67f;</span>
                          <span class="like-num">221</span>
                          <!-- <span class="iconfont">&#xe683;</span>
                          <span class="like-num">7</span> -->
                          <span class="time">2022-05-14 12:20:51</span>
                        </div>
                      </div>
                      <div class="page">
                        <div id="swapper1" class="b1-1"></div>
                        <div class="box1">
                          <div class="pic1 pp">
                            <img src="" alt="" />
                          </div>
                          <div class="pic1">
                            <img src="" alt="" />
                          </div>
                          <div class="pic1">
                            <img src="" alt="" />
                          </div>
                          <div class="pic1">
                            <img src="" alt="" />
                          </div>
                          <div class="pic1">
                            <img src="" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="note-content">
                        <div class="note-title">嘉北郊野公园</div>
                        <div class="note-word">
                          嘉北郊野公园位于上海市嘉定新城主城区西北部，东侧紧邻城北大型居住社区，南侧为上海国际赛车场，距轨道交通11号线嘉定西站2公里，规划面积13.98平方公里。规划定位为近郊休闲型郊野公园。
                          一期开园7.39平方公里。有4500亩水稻田，80亩彩色水稻田，90亩嘉北郊野公园位于嘉定主城区西北部，涉及到三个街镇。园区很大，一眼望去，有一望无际的田野、成片绿荫的树林、宽阔的农田，颇有些江南水乡的农村风貌。
                          中有十余座景观桥，布局心思巧腻，有各具特色的乔木、成片的灌木和植被，形成了如落樱缤纷、竹深荷静的景观意境。公园内还设有儿童森林探险区、欢聚休闲林、两片大草坪，供游客在草坪上休憩、野餐、游戏、搭帐篷，享受郊野的乐趣。园内提供游览车服务，游玩十分方便。河流水网是公园的特色之一，乘坐游船浏览的景色也别有一番风味。如果是喜欢自由规划路线的朋友也可以选择租辆自行车进行游览，租用价格根据车型不同而有所调整。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="note-wrapper" id="my-like2" style="display:none">
                <div class="note-column">
                  <div class="note">
                    <div class="note-info">
                      <div class="info">
                        <div class="user">
                          <img class="user-image" src="" />
                          <span class="user-name"></span>
                        </div>
                        <div class="more">
                          <span class="iconfont">&#xe67f;</span>
                          <span class="like-num">221</span>
                          <!-- <span class="iconfont">&#xe683;</span>
                          <span class="like-num">7</span> -->
                          <span class="time">2022-05-14 12:20:51</span>
                        </div>
                      </div>
                      <div class="page">
                        <div id="swapper2" class="b2-1"></div>
                        <div class="box2">
                          <div class="pic2 pp">
                            <img src="./711_7.jpg" alt="" />
                          </div>
                          <div class="pic2">
                            <img src="./711_8.jpg" alt="" />
                          </div>
                          <div class="pic2">
                            <img src="./711_11.jpg" alt="" />
                          </div>
                          <div class="pic2">
                            <img src="./711_12.jpg" alt="" />
                          </div>
                          <div class="pic2">
                            <img src="./711_13.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="note-content">
                        <div class="note-title">嘉北郊野公园</div>
                        <div class="note-word">
                          嘉北郊野公园位于上海市嘉定新城主城区西北部，东侧紧邻城北大型居住社区，南侧为上海国际赛车场，距轨道交通11号线嘉定西站2公里，规划面积13.98平方公里。规划定位为近郊休闲型郊野公园。
                          一期开园7.39平方公里。有4500亩水稻田，80亩彩色水稻田，90亩嘉北郊野公园位于嘉定主城区西北部，涉及到三个街镇。园区很大，一眼望去，有一望无际的田野、成片绿荫的树林、宽阔的农田，颇有些江南水乡的农村风貌。
                          中有十余座景观桥，布局心思巧腻，有各具特色的乔木、成片的灌木和植被，形成了如落樱缤纷、竹深荷静的景观意境。公园内还设有儿童森林探险区、欢聚休闲林、两片大草坪，供游客在草坪上休憩、野餐、游戏、搭帐篷，享受郊野的乐趣。园内提供游览车服务，游玩十分方便。河流水网是公园的特色之一，乘坐游船浏览的景色也别有一番风味。如果是喜欢自由规划路线的朋友也可以选择租辆自行车进行游览，租用价格根据车型不同而有所调整。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
// import Header from "@/components/MXY/header";
// import Header from "@/components/CXD/header";
import Header from "@/components/CXD/Header_update1";
import shareInfo from "@/components/CXD/shareInfo";
export default {
  components: {
    Header
  },
  name: "PersonalCenter",
  data() {
    return {
      text: "",
      nickName: sessionStorage.getItem("uname"),
      email: "",
      phone: "",
      circleUrl: "",
      sizeList: ["large"],
      isShow: false,
      show1: true,
      number: 0,
      //share
      share_num: 0,
      share_title: [],
      share_content: [],
      share_img: [],
      share_time: [],

      //like
      like_num: 0,
      like_col: [],
      like_index: []
    };
  },
  mounted() {
    window.onload = this.init();
  },
  methods: {
    init() {
      //头像
      if (sessionStorage.getItem("user-img") == null) {
        this.circleUrl =
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
        sessionStorage.setItem("user-img", this.circleUrl);
      } else this.circleUrl = sessionStorage.getItem("user-img");

      //先清除所有的定时器
      let end = setInterval(function() {}, 10000);
      for (let i = 1; i <= end; i++) {
        clearInterval(i);
      }

      if (sessionStorage.getItem("user-publish") == "true") {
        let my_share = document.querySelector("#my-share");
        my_share.style.display = "block";
        //获取share的数据
        //这里先设置为1，之后有时间再改
        this.share_num = 1;
        this.share_title[this.share_num - 1] = sessionStorage.getItem(
          "new-title"
        );
        this.share_content[this.share_num - 1] = sessionStorage.getItem(
          "new-content"
        );
        let temp_img = [];
        for (let i = 0; i < sessionStorage.getItem("img-num"); i++) {
          temp_img[i] = sessionStorage.getItem("img-" + i);
        }
        this.share_img[this.share_num - 1] = temp_img;
        this.share_time[this.share_num - 1] = sessionStorage.getItem(
          "publish-time"
        );
        let share_time_span = document.querySelector(".time");
        share_time_span.innerText = this.share_time[this.share_num - 1];
        let note_title_div = document.querySelector(".note-title");
        note_title_div.innerText = this.share_title[this.share_num - 1];
        let note_word_div = document.querySelector(".note-word");
        note_word_div.innerText = this.share_content[this.share_num - 1];
        let pics = document.querySelectorAll(".pic");
        for (let i = 0; i < pics.length; i++) {
          pics[i].firstChild.src = this.share_img[this.share_num - 1][i];
        }
        //获取左边大图的元素
        let swapper = document.getElementById("swapper");
        //获取右边小图的所有元素
        let pic = document.getElementsByClassName("pic");
        let time = null;
        let index = 0;
        let imgs_src = this.share_img[this.share_num - 1];
        //图片最开始为第一张
        swapper.style.backgroundImage = "url(" + imgs_src[0] + ")";
        //设置一个重置函数
        let reset = function() {
          for (let i = 0; i < pic.length; i++) {
            pic[i].className = "pic";
          }
        };
        //设置一个选中函数
        let selected = function() {
          //先代入重置函数
          try {
            reset();
            pic[index].className = "pic pp";
          } catch (error) {}
          // reset();
          // pic[index].className = "pic pp";
        };
        //设置启动轮播图的时间函数
        function ts() {
          time = setInterval(function() {
            selected();
            index++;
            // swapper.className = "b-" + [index];
            swapper.style.backgroundImage = "url(" + imgs_src[index - 1] + ")";
            if (index == 5) {
              index = 0;
            }
          }, 1500);
        }
        for (let i = 0; i < pic.length; i++) {
          //鼠标移动到当前小图片上时触发
          pic[i].onmouseenter = function() {
            //鼠标移动到当前小图片时右边大图片变成当前的小图片
            // swapper.className = "b-" + (i + 1);
            swapper.style.backgroundImage = "url(" + imgs_src[i] + ")";
            //鼠标移动到小图片上面时关闭定时器并重置定时
            reset();
            clearInterval(time);
            index = i + 1;
            if (index == 5) index = 0;
          };
          pic[i].onmouseleave = function() {
            ts();
          };
        }
        //执行轮播图
        ts();
      }
      if (sessionStorage.getItem("like-num") != null) {
        this.like_num = sessionStorage.getItem("like-num");
        for (let i = 1; i <= this.like_num; i++) {
          let my_like = document.querySelector("#my-like" + i);
          my_like.style.display = "block";

          this.like_col[i - 1] = Number(
            sessionStorage.getItem("like-" + i + "-col")
          );
          this.like_index[i - 1] = Number(
            sessionStorage.getItem("like-" + i + "-index")
          );
          let temp_col = this.like_col[i - 1];
          let temp_index = this.like_index[i - 1];

          let user_img = my_like.querySelector(".user-image");
          user_img.src = shareInfo.user_pic[temp_col][temp_index];
          let user_name=my_like.querySelector(".user-name");
          user_name.innerText=shareInfo.user_name[temp_col][temp_index];
          let likes_span = my_like.querySelector(".like-num");
          likes_span.innerText = shareInfo.like_num[temp_col][temp_index] + 1;
          let share_time_span = my_like.querySelector(".time");
          share_time_span.innerText = shareInfo.date[temp_col][temp_index];
          let note_title_div = my_like.querySelector(".note-title");
          note_title_div.innerText = shareInfo.title[temp_col][temp_index];
          let note_word_div = my_like.querySelector(".note-word");
          note_word_div.innerText = shareInfo.content[temp_col][temp_index];
          let pics = my_like.querySelectorAll(".pic"+i);
          for (let j = 0; j < pics.length; j++) {
            pics[j].firstChild.src =
              shareInfo.sharePicList[temp_col][temp_index][j];
          }

          //获取左边大图的元素
          let swapper = my_like.querySelector("#swapper" + i);
          //获取右边小图的所有元素
          let pic = my_like.querySelectorAll(".pic" + i);
          let time = null;
          let index = 0;
          let imgs_src = shareInfo.sharePicList[temp_col][temp_index];
          console.log(temp_col,temp_index)
          //图片最开始为第一张
          swapper.style.backgroundImage = "url(" + imgs_src[0] + ")";
          //设置一个重置函数
          let reset = function() {
            for (let j = 0; j < pic.length; j++) {
              pic[j].className = "pic" + i;
            }
          };
          //设置一个选中函数
          let selected = function() {
            //先代入重置函数
            try {
              reset();
              pic[index].className = "pic" + i + " pp";
            } catch (error) {}
            // reset();
            // pic[index].className = "pic pp";
          };
          //设置启动轮播图的时间函数
          function ts() {
            time = setInterval(function() {
              selected();
              index++;
              // swapper.className = "b-" + [index];
              swapper.style.backgroundImage =
                "url(" + imgs_src[index - 1] + ")";
              if (index == 5) {
                index = 0;
              }
            }, 1500);
          }
          for (let j = 0; j < pic.length; j++) {
            //鼠标移动到当前小图片上时触发
            pic[j].onmouseenter = function() {
              //鼠标移动到当前小图片时右边大图片变成当前的小图片
              // swapper.className = "b-" + (i + 1);
              swapper.style.backgroundImage = "url(" + imgs_src[j] + ")";
              //鼠标移动到小图片上面时关闭定时器并重置定时
              reset();
              clearInterval(time);
              index = j + 1;
              if (index == 5) index = 0;
            };
            pic[j].onmouseleave = function() {
              ts();
            };
          }
          //执行轮播图
          ts();
        }
      }

      // let swapper1 = document.getElementById("swapper1");
      // let swapper2 = document.getElementById("swapper2");

      // let pic1 = document.getElementsByClassName("pic1");
      // let pic2 = document.getElementsByClassName("pic2");

      // let time1 = null;
      // let time2 = null;

      // let index1 = 0;
      // let index2 = 0;

      // let reset1 = function() {
      //   for (let i = 0; i < pic1.length; i++) {
      //     pic1[i].className = "pic1";
      //   }
      // };
      // let reset2 = function() {
      //   for (let i = 0; i < pic2.length; i++) {
      //     pic2[i].className = "pic2";
      //   }
      // };

      // let selected1 = function() {
      //   //先代入重置函数
      //   try {
      //     reset1();
      //     pic1[index1].className = "pic1 pp";
      //   } catch (error) {}
      //   // reset1();
      //   // pic1[index1].className = "pic1 pp";
      // };
      // let selected2 = function() {
      //   //先代入重置函数
      //   try {
      //     reset2();
      //     pic2[index2].className = "pic2 pp";
      //   } catch (error) {}
      //   // reset2();
      //   // pic2[index2].className = "pic2 pp";
      // };

      // function ts1() {
      //   const time1 = setInterval(function() {
      //     selected1();
      //     index1++;
      //     swapper1.className = "b1-" + [index1];
      //     if (index1 == 5) {
      //       index1 = 0;
      //     }
      //   }, 1500);
      // }
      // function ts2() {
      //   time2 = setInterval(function() {
      //     selected2();
      //     index2++;
      //     swapper2.className = "b2-" + [index2];
      //     if (index2 == 5) {
      //       index2 = 0;
      //     }
      //   }, 1500);
      // }

      // for (let i = 0; i < pic1.length; i++) {
      //   //鼠标移动到当前小图片上时触发
      //   pic1[i].onmouseenter = function() {
      //     //鼠标移动到当前小图片时右边大图片变成当前的小图片
      //     swapper1.className = "b1-" + (i + 1);
      //     //鼠标移动到小图片上面时关闭定时器并重置定时
      //     reset1();
      //     clearInterval(time1);
      //     index1 = i + 1;
      //     if (index1 == 5) {
      //       index1 = 0;
      //     }
      //   };
      //   pic1[i].onmouseout = function() {
      //     ts1();
      //   };
      // }
      // for (let i = 0; i < pic2.length; i++) {
      //   //鼠标移动到当前小图片上时触发
      //   pic2[i].onmouseenter = function() {
      //     //鼠标移动到当前小图片时右边大图片变成当前的小图片
      //     swapper2.className = "b2-" + (i + 1);
      //     //鼠标移动到小图片上面时关闭定时器并重置定时
      //     reset2();
      //     clearInterval(time2);
      //     index2 = i + 1;
      //     if (index2 == 5) {
      //       index2 = 0;
      //     }
      //   };
      //   pic2[i].onmouseout = function() {
      //     ts2();
      //   };
      // }
      // ts1();
      // ts2();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    uploadHeadImg: function() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.circleUrl = res.result;
      };
      reader.readAsDataURL(file);
    },
    showToggle: function() {
      this.isShow = !this.isShow;
      this.show1 = !this.show1;
      sessionStorage.setItem("uname", this.nickName);
      sessionStorage.setItem("user-img", this.circleUrl);
    },
    change: function(index) {
      this.number = index;
    }
  }
};
</script>
<style scoped>
.page {
  position: relative;
  width: 600px;
  display: flex;
  justify-content: space-evenly;
}

#swapper {
  width: 380px;
  height: 488px;
  transition: 0.4s;
  background-size: cover;
}
#swapper1 {
  width: 380px;
  height: 488px;
  transition: 0.4s;
  background-size: cover;
}
#swapper2 {
  width: 380px;
  height: 488px;
  transition: 0.4s;
  background-size: cover;
}
/* .b-1 {
  background-image: url("./1.jpg");
}

.b-2 {
  background-image: url("./2.jpg");
}

.b-3 {
  background-image: url("./3.jpg");
}

.b-4 {
  background-image: url("./4.jpg");
}

.b-5 {
  background-image: url("./5.jpg");
} */

/* .b1-1 {
  background-image: url("./711_1.jpg");
}

.b1-2 {
  background-image: url("./711_2.jpg");
}

.b1-3 {
  background-image: url("./711_3.jpg");
}

.b1-4 {
  background-image: url("./711_4.jpg");
}

.b1-5 {
  background-image: url("./711_5.jpg");
}

.b2-1 {
  background-image: url("./711_7.jpg");
}

.b2-2 {
  background-image: url("./711_8.jpg");
}

.b2-3 {
  background-image: url("./711_11.jpg");
}

.b2-4 {
  background-image: url("./711_12.jpg");
}

.b2-5 {
  background-image: url("./711_13.jpg");
} */

.box {
  width: 200px;
  height: 488px;
  display: flex;
  /*纵向布局*/
  flex-direction: column;
  justify-content: space-between;
}

.pic {
  position: relative;
  width: 200px;
  height: 90px;
  right: 0;
  transition: 0.5s;
  overflow: hidden;
}

.pic img {
  position: relative;
  width: 200px;
  /*小图片上移 */
  transform: translate(0, -50px);
  transition: 0.5s;
  right: 0;
}

.pic.pp {
  opacity: 0;
  right: 250px;
}

.pic:hover img {
  opacity: 0;
  right: 250px;
}

.box1 {
  width: 200px;
  height: 488px;
  display: flex;
  /*纵向布局*/
  flex-direction: column;
  justify-content: space-between;
}

.pic1 {
  position: relative;
  width: 200px;
  height: 90px;
  right: 0;
  transition: 0.5s;
  overflow: hidden;
}

.pic1 img {
  position: relative;
  width: 200px;
  /*小图片上移 */
  transform: translate(0, -50px);
  transition: 0.5s;
  right: 0;
}

.pic1.pp {
  opacity: 0;
  right: 250px;
}

.pic1:hover img {
  opacity: 0;
  right: 250px;
}

.box2 {
  width: 200px;
  height: 488px;
  display: flex;
  /*纵向布局*/
  flex-direction: column;
  justify-content: space-between;
}

.pic2 {
  position: relative;
  width: 200px;
  height: 90px;
  right: 0;
  transition: 0.5s;
  overflow: hidden;
}

.pic2 img {
  position: relative;
  width: 200px;
  /*小图片上移 */
  transform: translate(0, -50px);
  transition: 0.5s;
  right: 0;
}

.pic2.pp {
  opacity: 0;
  right: 250px;
}

.pic2:hover img {
  opacity: 0;
  right: 250px;
}
.edit {
  margin-right: 10px;
}

.note-content {
  text-align: left;
  margin-top: 5px;
}

.note-title {
  font-weight: bold;
  font-size: 24px;
  color: #555;
  text-align: left;
}

.note-word {
  width: 700px;
  height: 100px;
  line-height: 26px;
  font-size: em(22);
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  -ms-transition: all 0.6s ease-in-out;
}

.note-word::after {
  content: "∨";
  display: block;
  width: 700px;
}

.note-word:hover {
  height: 100%;
}

.note-word:hover::after {
  content: "∧";
}

@font-face {
  font-family: "iconfont";
  /* Project id  */
  src: url("./font/iconfont2.ttf?t=1653125902049") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 20px;
}

.icon-aixin:before {
  content: "\e67f";
}

.icon-shoucang:before {
  content: "\e683";
}

.undercenter {
  margin-left: 100px;
  margin-right: 50px;
  margin-top: 5px;
}

.btn_anniu {
  width: 200px;
  height: 40px;
  margin-top: -20px;
  font-size: 16px;
  font-weight: bold;
  border: 0 solid #fff;
  color: #000;
  outline: none;
  background: #fff;
  font-weight: bold;
}

.newStyle {
  border-bottom: 3px solid rgb(200, 0, 0);
  color: rgb(200, 0, 0);
  font-size: 16px;
  font-weight: bold;
}

.btn_switch {
  border-bottom: 1px solid #ccc;
}

label {
  width: 300px;
  height: 300px;
  margin-left: -120px;
}

.profile {
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
}

.hiddenInput {
  display: none;
}

.btn1 {
  width: 200px;
  height: 30px;
  font-size: 16px;
  border-radius: 12px;
  vertical-align: middle;
  text-align: center;
  margin-left: -65px;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid rgb(200, 0, 0);
}

.btn1:hover {
  background-color: rgb(200, 0, 0);
  color: white;
}

.post {
  margin-right: 100px;
  margin-left: 10px;
  margin-bottom: -40px;
}

.el-header {
  line-height: 60px;
  display: inline-block;
  text-align: center;
}

.el-aside {
  line-height: 44px;
  text-align: center;
}

.el-main {
  line-height: 36px;
  text-align: center;
}

.demo-basic--circle {
  margin-top: 30px;
  margin-left: 150px;
}

.block {
  width: 100%;
  margin-left: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 1368px;
  border-radius: 30px;
}

/* content */
.content {
  position: relative;
  margin-top: 70px;
  padding-bottom: 50px;
  background-image: url('../../assets/background1.png');
}

.content .note-container {
  margin: 30px 0 0;
}

.content .note-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0px;
}

.content .note-wrapper .note-column {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content .note-wrapper .note-column .note {
  width: 100%;
  margin: -5 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.note .note-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.note .note-info .note-image .overflow-block {
  overflow: hidden;
}

.note .note-info .note-image .overflow-container {
  position: relative;
  transition: filter 0.7s ease;
}

.note .note-info .note-image {
  filter: none;
}

.note .note-info .img {
  width: 100%;
}

.note .note-info .title {
  padding: 0;
  margin: 10px 15px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.note .info {
  padding: 0 15px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.note .info .user {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
}

.note .info .user .user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
}

.note .info .user .user-name {
  width: 87px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 10px;
  color: #555;
  font-size: 14px;
}

.note .info .more {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 750px;
}

.note .info .more .like-num {
  margin-left: 8px;
  color: #555;
  font-size: 14px;
}

.note .info .more .time {
  margin-left: 15px;
  color: #555;
  font-size: 14px;
  white-space: nowrap;
}

.lazyload {
  transition: opacity 0.7s ease;
}

.lazyload .loaded {
  opacity: 1;
}
</style>
