<template>
  <div class="cxd-my-share">
    <Header></Header>
    <div style="height:100px"></div>
    <div>
      <img
          class="background"
          src="@/assets/background1.png"
          alt=""
          width="100%"
          height="100%"
          style="opacity: 1;margin-top:-151px;"
      />
      <div style="width:60%;min-width: 800px;margin:0 auto;">
        <div class="imgBox">
          <div style="width:50%;height:90px;margin-left:200px;">
            <img src="../../assets/Besides/My_Share(1).png" alt="分享笔记" style="transform:scale(0.8,0.72);margin-top:-230px;">
          </div>
          <div class="warp">
            <!-- <div class="add-img-block" >
            <img src="../../assets/test.png" class="add-img"/>
          </div> -->
            <div class="warp-content">
              + <input class="img-input" type="file" id="img-input" />
            </div>
          </div>
          <div class="warn-info" style="display:none" id="pic-warn">
            <div class="arrow"></div>
            <div class="warn">
              请放置图片
            </div>
          </div>
        </div>
        <div>
          <div class="title-warp">
            <div>
              <input
                type="text"
                class="title-input"
                placeholder="填写标题会有更多赞哦~"
              />
              <div class="warn-info" style="display:none" id="title-warn">
                <div class="arrow"></div>
                <div class="warn">
                  请填写标题
                </div>
              </div>
            </div>
          </div>
          <div class="note-content-warp">
            <textarea class="note-content" placeholder="添加正文"></textarea>
            <div class="warn-info" style="display:none" id="content-warn">
              <div class="arrow"></div>
              <div class="warn">
                请填写主体内容
              </div>
            </div>
          </div>
          <div class="submit-warp" style="text-align: center;">
            <button class="submit-button" id="submit">提交</button>
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
    return {};
  },
  mounted() {
    window.onload = this.init();
  },
  methods: {
    init() {
      this.init_dom();
      this.init_fun();
    },
    init_dom() {},
    init_fun() {
      //添加图片
      this.add_img();
      //提交按钮
      let submit_button = document.querySelector("#submit");
      submit_button.addEventListener("click", () => {
        let imgs = document.querySelectorAll(".add-img");
        // if(imgs.length==0||)
        // console.log("imgsnull");
        let title_content = document.querySelector(".title-input").value;
        let content = document.querySelector(".note-content").value;
        let flag = true;
        if (imgs.length == 0) {
          let pic_warn = document.querySelector("#pic-warn");
          pic_warn.style.display = "block";
          flag = false;
        }
        if (title_content == "") {
          let title_warn = document.querySelector("#title-warn");
          title_warn.style.display = "block";
          flag = false;
        }
        if (content == "") {
          let content_warn = document.querySelector("#content-warn");
          content_warn.style.display = "block";
          flag = false;
        }
        if (flag == false) return;
        alert("发布成功");
        sessionStorage.setItem("user-publish", true);
        sessionStorage.setItem("img-num", imgs.length);
        for (let i = 0; i < imgs.length; i++) {
          sessionStorage.setItem("img-" + i, imgs[i].src);
        }
        sessionStorage.setItem("new-title", title_content);
        sessionStorage.setItem("new-content", content);
        //时间
        let today = new Date();
        let time=today.toLocaleString().replace(/\//g,"-");
        sessionStorage.setItem("publish-time",time)
        this.$router.push({
          path: "/Share"
        });
      });
    },
    add_img() {
      let img_input = document.querySelector(".img-input");
      let warp_div = document.querySelector(".warp");
      //   let image = document.querySelector("img");
      img_input.onchange = function() {
        let img_num = warp_div.children.length - 1;
        let img = this.files[0]; //获取到一个FileList对象中的对应的file文件,是我们上传的文件
        let new_img_block = document.createElement("div");
        new_img_block.classList.add("add-img-block");
        let new_img = document.createElement("img");
        new_img.classList.add("add-img");
        new_img_block.appendChild(new_img);
        let pettern = /^image/;
        try {
          if (!pettern.test(img.type)) {
            alert("图片格式不正确");
            return;
          }
        } catch (err) {
          return;
        }
        warp_div.insertBefore(new_img_block, warp_div.childNodes[img_num]);
        let reader = new FileReader();
        reader.readAsDataURL(img); //异步读取文件内容，结果用data:url的字符串形式表示
        /*当读取操作成功完成时调用*/
        reader.onload = function(e) {
          new_img.setAttribute("src", this.result);
        };
        let temp_interval = setInterval(() => {
          clearInterval(temp_interval);
          new_img.style.transform =
            "translateY(-" +
            (new_img.offsetHeight - img_input.offsetHeight) / 2 +
            "px)";
        }, 10);
      };
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

.cxd-my-share .add-img-block {
  display: inline-block;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin: 5px 5px;
  vertical-align: bottom;
}
.cxd-my-share .add-img {
  width: 100%;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
  list-style-type: none;
}
input {
  outline: none;
}
textarea {
  outline: none;
}
.imgBox {
  position: relative;
  margin-top: 50px;
  text-align: center;
}
.warp {
  display: inline-block;
  vertical-align: bottom;
  position: relative;
}
.warp-content {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 5px 5px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  border: 0.5px dashed rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background-color: white;
}

.img-input {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid red;
  width: 200px;
  height: 200px;
  opacity: 0;
  cursor: pointer;
}
.title-warp {
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  min-width: 600px;
}
.title-input {
  height: 100%;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 0.5px solid rgb(220, 220, 220);
  /* background-color: rgb(250, 250, 250); */
  color: rgb(150, 150, 150);
  box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
  font-size: 20px;
}
.title-input:focus {
  /* border: 0.5px solid rgb(150, 150, 150); */
}
.note-content-warp {
  position: relative;
  width: 100%;
  min-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
}
.note-content {
  width: 100%;
  border: 0px;
  border-left: 0.5px solid rgb(220, 220, 220);
  border-right: 0.5px solid rgb(220, 220, 220);
  box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
  /* background-color: rgb(250, 250, 250); */
  border-radius: 5px;
  min-height: 200px;
  padding: 10px;
  resize: none;
}
.submit-warp {
  margin-top: 30px;
  width: 100%;
}
.submit-button {
  width: 800px;
  height: 50px;
  border-radius: 20px;
  border: 0.5px solid rgb(200, 0, 0);
  background-color: rgb(200, 0, 0);
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  cursor: pointer;
}
.submit-button:hover {
  border: 0.5px solid rgb(200, 0, 0);
  background-color: white;
  color: rgb(200, 0, 0);
}
.warn-info {
  position: absolute;
  height: 50px;
  width: 100px;
  right: -130px;
  top: calc(50% - 25px);
}
.arrow {
  position: absolute;
  height: 30px;
  width: 30px;
  left: -10px;
  top: 10px;
  background-color: rgb(200, 0, 0);
  transform: rotate(45deg);
}
.warn {
  position: absolute;
  height: 50px;
  width: 100px;
  color: white;
  background-color: rgb(200, 0, 0);
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
}
</style>
