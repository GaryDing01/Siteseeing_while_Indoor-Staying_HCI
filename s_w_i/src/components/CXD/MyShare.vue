<template>
  <div class="my-share">
    <Header></Header>
    <div class="imgBox">
      <div class="warp">
        <!-- <img src="" /> -->
        <div class="warp-content">+</div>
        <input class="img-input" type="file" id="img-input" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/CXD/header";
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
    },
    add_img() {
      let img_input = document.querySelector(".img-input");
      //   let image = document.querySelector("img");
      img_input.onchange = function() {
        let img = this.files[0]; //获取到一个FileList对象中的第一个文件( File 对象),是我们上传的文件
        let new_img = document.createElement("img");
        // new_img.classList.add("");
        let pettern = /^image/;

        // console.info(fileData.type);

        if (!pettern.test(img.type)) {
          alert("图片格式不正确");
          return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(img); //异步读取文件内容，结果用data:url的字符串形式表示
        /*当读取操作成功完成时调用*/
        reader.onload = function(e) {
          new_img.setAttribute("src", this.result);
        };
        
      };
    }
  }
};
</script>
<style scoped>
.imgBox {
  margin-top: 50px;
  text-align: center;
}
.warp {
  display: inline-block;
  vertical-align: bottom;
  position: relative;
}

.warp-content {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  border: 0.5px dashed rgb(0, 0, 0, 0.3);
  color: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
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

img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  margin-top: 50px;
  vertical-align: bottom;
}
</style>
