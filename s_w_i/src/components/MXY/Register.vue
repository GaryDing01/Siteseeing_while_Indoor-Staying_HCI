<template>
    <div class="register-container" style="min-height: 782.84px;">
        <div class="bg bg-blur">        </div>
        <div class="content content-front">
            <div class="con">
                <div class="video-box-container" style="width: 850.64px; height: 510.384px;">
                    <div class="title-box" style="margin-top: -60.67px;">
                        <span class="title-line">风景疫时谙</span>
                        <span class="des">足不出户，看遍世界</span>
                    </div>
                    <div class="video-item-container"
                        style="width: 246.686px; height: 246.686px; margin-top: 106.33px; margin-left: 0px; border-radius: 246.686px;">
                        <div class="circle"
                            style="background: rgb(246, 214, 231); transform: translate(18.4386px, 1.07047px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/HuangShan.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 180.336px; height: 180.336px; margin-top: 343.659px; margin-left: 117.388px; border-radius: 180.336px;">
                        <div class="circle"
                            style="background: rgb(246, 243, 214); transform: translate(13.0844px, -3.32245px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/XueShan.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 306.23px; height: 306.23px; margin-top: 119.43px; margin-left: 250.088px; border-radius: 306.23px;">
                        <div class="circle"
                            style="background: rgb(215, 237, 250); transform: translate(22.9013px, -0.411231px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/Sea.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 175.232px; height: 175.232px; margin-top: -13.6102px; margin-left: 461.898px; border-radius: 175.232px;">
                        <div class="circle"
                            style="background: rgb(246, 214, 214); transform: translate(11.1047px, 6.97323px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/HuPo.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 166.725px; height: 166.725px; margin-top: 101.396px; margin-left: 599.701px; border-radius: 166.725px;">
                        <div class="circle"
                            style="background: rgb(201, 217, 215); transform: translate(11.1826px, 5.31513px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/City.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 107.181px; height: 107.181px; margin-top: 216.913px; margin-left: 743.459px; border-radius: 107.181px;">
                        <div class="circle"
                            style="background: rgb(246, 225, 214); transform: translate(7.33813px, -1.34092px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/Tower.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-item-container"
                        style="width: 256.893px; height: 256.893px; margin-top: 269.653px; margin-left: 530.799px; border-radius: 256.893px;">
                        <div class="circle"
                            style="background: rgb(204, 224, 240); transform: translate(15.6894px, -10.8612px);">
                            <video autoplay="autoplay" muted="muted" loop="loop" mqn-lazyimage-video-no-play=""
                                mqn-video-inview-play="" class="video">
                                <source src="../../assets/Forest.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="register-box-container">
                    <div class="register-wrapper">
                        <div class="header">注册</div>
                        <div class="userbox">
                            <span class="iconfont">&#xe741;</span>
                            <input class="user" id="user" v-model="name" placeholder="用户名">
                        </div>
                        <br>
                        <div class="pwdbox">
                            <span class="iconfont">&#xe75b;</span>
                            <input class="pwd" id="password" v-model="pwd" type="password" placeholder="密码">
                        </div>
                        <br>
                        <div class="pwdbox">
                            <span class="iconfont">&#xe75b;</span>
                            <input class="pwd" id="re_password" v-model="repwd" type="password" placeholder="确认密码">
                        </div>
                        <br>
                        <div class="register-box">
                            <button type="primary" class="register_btn" @click="register">注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data: function () {
        return {
            name: '',
            pwd: '',
            repwd: '',
            user_list: [
                {
                    username: 'admin',
                    password: '123'
                },

            ]
        }
    },
    methods: {

        register() {
            var flag = 1;
            //如果用户名已存在，则需要换一个用户名
            this.user_list.forEach((item) => {
                if (item.username == this.name) {
                    alert('用户已存在,请换一个用户名');
                    flag = 0;
                }
            }
            )
            //如果用户名不存在，则继续判断
            if (flag) {
                //判断两次输入的密码是否一致，如果密码不一致，则需要重新输入
                if (this.pwd != this.repwd) {
                    alert('两次输入的密码不一致,请重新输入');
                }
                //如果密码也一直，则存到用户列表里面
                else {
                    var item = {};
                    //获取到用户名
                    item.username = this.name;
                    //获取到密码
                    item.password = this.pwd;
                    //存储到用户列表
                    this.user_list.push(item);
                    alert('注册成功');
                    //    this.user_list.forEach((item) => {
                    //       console.log( item.username);
                    // })

                    this.$router.push({
                        path: '/Login',
                        query: {
                            list: this.user_list,
                        }
                    })
                }
            }

        }
    }
}
</script>

<style scoped>
.video-item-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center
}

.video-item-container .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 100%;
    width: 85%;
    height: 85%;
    animation: showItem-data-v-70ee3835 .8s ease 0s 1 normal;
    -moz-animation: showItem-data-v-70ee3835 .8s ease 0s 1 normal;
    -webkit-animation: showItem-data-v-70ee3835 .8s ease 0s 1 normal;
    -o-animation: showItem-data-v-70ee3835 .8s ease 0s 1 normal
}

.video-item-container .circle .video {
    height: 100%;
    border-radius: 100%;
    animation: op-data-v-70ee3835 .8s ease 0s 1 normal forwards;
    -moz-animation: op-data-v-70ee3835 .8s ease 0s 1 normal forwards;
    -webkit-animation: op-data-v-70ee3835 .8s ease 0s 1 normal forwards;
    -o-animation: op-data-v-70ee3835 .8s ease 0s 1 normal forwards
}

.video-box-container {
    width: 63.5%;
    height: 463px
}

.video-box-container .title-box {
    float: left;
    margin-left: 42px
}

.video-box-container .title-box .des {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #98a2af
}

.video-box-container .title-box .title-line {
    display: block;
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    line-height: 100%;
    margin: 0 0 10px;
    color: #363f4d
}

.register-container {
    position: absolute;
    width: 99%;
    min-width: 1024px;
    height: 100%;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto, Arial, PingFang SC, Microsoft Yahei, Microsoft JhengHei, sans-serif;
}

.bg {
    background: #fff url(../../assets/test1.png);
    height: 100%;
}

.bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
}

.register-container .content-front {
    width: 100%;
    height: calc(100% - 72px);
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column
}

.register-container .content .con {
    width: 100%;
    height: calc(100% - 84px);
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center
}

.register-container .register-box-container {
    margin-left: 20px;
}

.register-container .register-box-container .register-wrapper {
    background-color: #fff;
    width: 400px;
    height: 588px;
    border-radius: 15px;
    position: relative;
}

.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}

.userbox {
    height: 30px;
    width: 100%;
    margin-left: 0px;
    text-align: center;
}

.pwdbox {
    height: 30px;
    width: 100%;
    margin-left: 0px;
    text-align: center;
}

.uesr-text {
    position: center;
}

input {
    outline-style: none;
    border: 0;
    border-bottom: 1px solid #E9E9E9;
    background-color: transparent;
    height: 20px;
    width: 70%;
    font-family: sans-serif;
    font-size: 20px;
    color: #696969;
    font-weight: bold;
}

/* input::-webkit-input-placeholder{
    color:#E9E9E9;
 } */
input:focus {
    border-bottom: 2px solid #696969;
    background-color: transparent;
    transition: all 0.2s ease-in;
    font-family: sans-serif;
    font-size: 20px;
    color: #696969;
    font-weight: bold;

}

input:hover {
    border-bottom: 2px solid #696969;
    background-color: transparent;
    transition: all 0.2s ease-in;
    font-family: sans-serif;
    font-size: 20px;
    color: #696969;
    font-weight: bold;

}

.register-box {
    text-align: center;
}

.register-box-text {
    font-size: 12px;
    text-decoration: underline;
}

.register_btn {
    border: none;
    text-align: center;
    font-size: 18px;
    border-radius: 20px;
    padding: 10px;
    width: 80%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #406c85, #a36666);
    color: #fff;
    align-items: center;
}

.register_btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background-color: #696969;
    transition: all 0.2s ease-in;
}


@font-face {
    font-family: "iconfont";
    /* Project id  */
    src: url('./font/iconfont1.ttf?t=1651245218742') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 22px;
    color: #696969;
    margin-right: 10px;
    margin-top: 3px;
}

.icon-add-account:before {
    content: "\e741";
}

.icon-password:before {
    content: "\e75b";
}
</style>