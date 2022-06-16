<template>
  <div>
        <!-- <el-header>
        </el-header> -->
        <Header_update1></Header_update1>

        <!-- 空必要的距离 -->
        <div style="height:9.85vh;background-color: black;"></div>
        <div style="">
            <img
                class="background"
                src="@/assets/background1.png"
                alt=""
                width="100%"
                height="100%"
                style="opacity: 1;margin-top:-71px;"
            />
                <div class="Maps-mask">
                    <div class="map-title">

                        <div class="Maps-title-img">
                            <img src="../../../../assets/AR_travel.png" alt="AR景观" style="transform:scale(0.8,0.72);">
                        </div>
                        <!-- <div class="Maps-title-btn" style="width:310px;padding:6px;margin:24px auto;border:1px solid #00BEFF;color:#00BEFF;text-align: center;">
                            <span class="btn btn-active"><a href="http://tg.dili360.com/zuimei/index/pro.htm">立即参赛</a></span>
                            <span id="share-btn" class="btn">分享</span>
                        </div>
                        <div id="share">
                            <span class="share-title">分享到：</span>
                            <div class="bdsharebuttonbox bdshare-button-style2-32" style="display:inline-block;" data-bd-bind="1652172766194"><a href="http://tg.dili360.com/zuimei/index.htm#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="http://tg.dili360.com/zuimei/index.htm#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="http://tg.dili360.com/zuimei/index.htm#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="http://tg.dili360.com/zuimei/index.htm#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
                        </div> -->
                        <!-- <div style="margin-top:300px;"><p>请用手机访问https://www.baidu.com</p></div>
                        <div><p>AR云旅游现在开始！</p></div> -->
                        <!-- <div style="display:flex;justify-content: center;"><img src="../../../../assets/Yun/Label/Label1.png" alt="冰墩墩" style="width:75%;" title="您好，我是冰墩墩！请用手机扫描图像，有惊喜等着您~"></div> -->

                    </div>

                    <!--  写一个绘制地图的标签。 -->
                    <div id="regionCharts" style="width: 100%; height:129vh; z-index:101;background-color: ;"></div>

                    <!-- 第二个任务 -->
                    <div class="Maps-title-img-second">
                            <img src="../../../../assets/interest_guess.png" alt="景观猜谜" style="transform:scale(0.8,0.72);">
                    </div>

                    <!-- 景观图片 -->
                    <div style="margin-top:260px;background-color:;">
                        <el-row style="margin:auto;width:90%;">
                        <el-col
                            v-for="(item,index) in placesContent"
                            :key="item"
                            :span="6"
                            :offset="index %5 !==0 ? 0 : 0.8"
                            style="background-color: aqua;height:250px;"
                            >
                            <!-- 卡片内容 -->
                            <el-card shadow="" :body-style="{ padding: '0px' }"  style="height:250px;margin-bottom: 5vh;" class="recommand-list">
                                <img
                                    :src="item.picPath"
                                    style="width:160%;"
                                />
                                <span class="mask">
                                    <div class="detail">
                                        <h3>{{item.placesDetail[0]}}</h3>
                                        <p>{{item.placesDetail[1]}}</p>
                                    </div>
                                </span>
                                <span class="tips-province" style="display: block;">{{item.placesDetail[2]}}</span>
                            </el-card>
                        </el-col>
                        </el-row>
                    </div>

                    <div style="height:50px;"></div>

                    <!-- 古长城 -->
                    <div style="position:absolute;top:25px;z-index:1050;left:300px;">
                        <div>
                            <el-card class="box-card" v-show="showGreatWall">
                            <el-row>
                                <el-col :span="8" style="background-color:;">
                                    <div style="display:flex;justify-content: center;"><img src="../../../../assets/Yun/BingDunDun(1).png" alt="冰墩墩" style="width:78%;" title="您好，我是冰墩墩！请用手机扫描图像，有惊喜等着您~"></div>
                                    <div style="margin-top:0px;display:flex;justify-content: center;"><img src="../../../../assets/Yun/XueRongRong(1).png" alt="雪融融" style="width:78%;" title="您好，我是雪融融！AR模型触发可能需要时间，请您耐心等待~"></div>
                                    <div style="margin-top:-25px;display:flex;justify-content: center;"><el-button type="danger" @click="back2Cloud">返回云旅游</el-button></div>
                                </el-col>
                                <el-col :span="16" style="background-color:;margin:auto">
                                    <div style="background-color:;display:flex;justify-content: center;"><img src="../../../../assets/Yun/Great_Wall.png" alt="长城" style="width:90%;" ></div>
                                    <div class="textHead" style="">古长城</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_GW1}}</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_GW2}}</div>
                                    <div style="margin-top:-15px;display:flex;justify-content: right;"><img src="../../../../assets/Yun/Beijing_Pic(1).png" alt="北京地图" style="width:15%;"></div>
                                </el-col>
                            </el-row>
                            </el-card>
                        </div>
                    </div>

                    <!-- 阿房宫 -->
                    <div style="position:absolute;top:25px;z-index:1050;left:300px;">
                        <div>
                            <el-card class="box-card" v-show="showEPang">
                            <el-row>
                                <el-col :span="8" style="background-color:;">
                                    <div style="margin-top:15px;display:flex;justify-content: center;"><img src="../../../../assets/Yun/Bing.png" alt="兵马俑" style="width:180%;" title="您好，我是兵马俑小秦！请用手机扫描图像，有惊喜等着您~"></div>
                                    <div style="margin-top:25px;display:flex;justify-content: center;"><el-button type="danger" @click="back2Cloud">返回云旅游</el-button></div>
                                </el-col>
                                <el-col :span="16" style="background-color:;margin:auto">
                                    <div style="background-color:;display:flex;justify-content: center;"><img src="../../../../assets/Yun/EPang.png" alt="阿房宫" style="width:90%;" ></div>
                                    <div class="textHead" style="">阿房宫</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_EP1}}</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_EP2}}</div>
                                    <div style="margin-top:-10px;display:flex;justify-content: right;"><img src="../../../../assets/Yun/ShanXi_1(1).png" alt="陕西地图" style="width:15%;"></div>
                                </el-col>
                            </el-row>
                            </el-card>
                        </div>
                    </div>

                    <!-- 莫高窟 -->
                    <div style="position:absolute;top:25px;z-index:1050;left:300px;">
                        <div>
                            <el-card class="box-card" v-show="showMoGao">
                            <el-row>
                                <el-col :span="8" style="background-color:;">
                                    <div style="margin-top:15px;display:flex;justify-content: center;"><img src="../../../../assets/Yun/HeWa(1).png" alt="兵马俑" style="width:190%;" title="您好，我是河娃！请用手机扫描图像，有惊喜等着您~"></div>
                                    <div style="margin-top:25px;display:flex;justify-content: center;"><el-button type="danger" @click="back2Cloud">返回云旅游</el-button></div>
                                </el-col>
                                <el-col :span="16" style="background-color:;margin:auto">
                                    <div style="background-color:;display:flex;justify-content: center;"><img src="../../../../assets/Yun/MoGao.png" alt="莫高窟" style="width:90%;" ></div>
                                    <div class="textHead" style="">莫高窟</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_MG1}}</div>
                                    <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText_MG2}}</div>
                                    <div style="margin-top:-15px;display:flex;justify-content: right;"><img src="../../../../assets/Yun/Gansu(1).png" alt="甘肃地图" style="width:15%;"></div>
                                </el-col>
                            </el-row>
                            </el-card>
                        </div>
                    </div>

                    <!-- copy!!! -->
            </div> 
        </div>    
        

  </div>
</template>

<script>

import Header_update1 from '../../../CXD/Header_update1.vue'
import places_of_interest from '../CloudTouring/places_of_interest.js'
import GreatWall from '../CloudTouring/GreatWall_Card.vue'

export default {
    name: 'CloudFirst',
    components:{Header_update1,places_of_interest,GreatWall},

    mounted(){
        this.drawregionCharts()
    },

    data () {
        return {
            placesContent:[
          {picPath: require("../../../../assets/Yun/ShiCi/Tai.png"),placesDetail:['杜甫','造化钟神秀，阴阳割昏晓','泰山']},
          {picPath: require("../../../../assets/Yun/ShiCi/Chang.png"),placesDetail:['白居易','江南好，风景旧曾谙','长江']},
          {picPath: require("../../../../assets/Yun/ShiCi/Hua2.png"),placesDetail:['寇准','举头红日近，回首白云低','华山']},
          {picPath: require("../../../../assets/Yun/ShiCi/Huang.png"),placesDetail:['王之涣','欲穷千里目，更上一层楼','黄河']},
          {picPath: require("../../../../assets/Yun/ShiCi/Heng1.png"),placesDetail:['贾岛','岩峦叠万重，诡怪浩难测','恒山']},
          {picPath: require("../../../../assets/Yun/ShiCi/Huai.png"),placesDetail:['杨万里','何必桑乾方是远，中流以北即天涯','淮河']},
          {picPath: require("../../../../assets/Yun/ShiCi/Heng2.png"),placesDetail:['刘禹锡','青冥结精气，磅礴宣地脉','衡山']},
          {picPath: require("../../../../assets/Yun/ShiCi/Song.png"),placesDetail:['王维','青冥结精气，磅礴宣地脉','嵩山']},
      ],

            showGreatWall:false,
            showEPang:false,
            showMoGao:false,
            introText_GW1:"经历了2000多年风雨的长城，1987年被联合国教科文组织列入世界文化遗产名录，是中国最具代表性的自然与文化遗产，是中华民族勇敢、坚韧、智慧、精神的象征。",
            introText_GW2:"然而，在和平时期的我们，却眼睁睁地看着昔日用其“身躯”承受了无数战火硝烟的古长城，在岁月侵蚀及人为破坏下慢慢毁弃。中国长城学会的考察结果表明，明代万里长城有较好墙体的部分，剩下不到20%，有明显可见遗址部分已不到30%。",
            introText_EP1:"项羽火烧阿房宫的说法一般源自于杜牧的《阿房宫赋》，文中前段详细描写了阿房宫的美丽雄伟奢华，之后写项羽一把火烧尽阿房宫的结局，前后反差之大，给人心灵上的极具震撼，让人深信不疑。",
            introText_EP2:"但现代以后，经过考古学家的勘察，并未发现有火烧的痕迹。最早记录火烧秦宫的出自司马迁的《史记秦本记》，上面也只是写“烧秦宫室，火三月不灭”，并未写阿房宫。所以有说法称火烧的并非阿旁宫。",
            introText_MG1:"“莫高窟”位于甘肃敦煌，又称“千佛洞”。它的历史可以追溯到前秦时期，被誉为“世界上现存规模最大、内容最丰富的佛教圣地”。",
            introText_MG2:"20世纪初的时候，当时驻守莫高窟的道士贪图几百银两，将无价经书、壁画等低价出售给了西方人。如今，莫高窟被人们重新重视起来，但激增的游客造成窟内湿气过重，加上不文明游客的肆意破坏，许多珍贵的壁画已经永远的损毁、消失了。",
        }
    },

    methods:{

        displayGreatWall(){
            // alert('displayGreatWall');
            this.showGreatWall=true;
        },

        displayEPang(){
            this.showEPang=true;
        },

        displayMoGao(){
            this.showMoGao=true;
        },

        back2Cloud(){
            this.showGreatWall=false;
            this.showEPang=false;
            this.showMoGao=false;
        },

        monitorGreatWall(){
            this.showGreatWall=!this.showGreatWall;
        },

        monitorEPang(){
            this.showEPang=!this.showEPang;
        },

        monitorMoGao(){
            this.showMoGao=!this.showMoGao;
        },

        drawregionCharts(){

            let dataList=places_of_interest.interestList

            console.log(places_of_interest.interestList)

            let option = {
                tooltip: {
                    trigger: 'item',
                    textStyle: {     //文字样式
                        color: '#ffffff',
                        decoration: 'none',
                        fontFamily: 'Verdana, sans-serif',
                    },

                    formatter: function (params) {
                        var res = params.name+'<br/>';
                        if(params.data && params.data.list){
                            let subContent =  params.data.list.map((i) => {
                                return res+= i.name +":"+ i.value +"<br>"
                            })
                            return res ;
                        }else{
                            return params.name +":"+ 0  ;
                        }
                        // return params.name +":"+ params.value +"<br/>" ;//自行定义formatter格式
                    }
                },


                visualMap: {
                    min: 0,
                    max: 750,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],//取值范围的文字
                    inRange: {
                    // color: ['#e0ffff', '#006edd']//取值范围的颜色
                    color: ['#ffffcc', '#ffcc99']//取值范围的颜色
                    // color: ['#33ccff', '#3300cc']//取值范围的颜色
                    },
                    show: false//图注
                },
                geo: {
                    map: 'china',
                    roam: false,//不开启缩放和平移
                    zoom: 1.2,//视角缩放比例
                    label: {
                    normal: {
                        show: true,
                        fontSize: '12',
                        color: 'rgba(0,0,0,0.7)'
                    }, emphasis: {
                        textStyle: {
                        color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        areaColor: '#D21034',//鼠标选择区域颜色
                        // areaColor: '#000000',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                    }
                },
                series: [
                    {
                    name: '信息量',
                    type: 'map',
                    geoIndex: 0,
                    data: dataList
                    }
                ]

            }

            let mychart = this.$echarts.init(document.getElementById('regionCharts'))
            console.log(mychart)
            mychart.setOption(option)
            mychart.on("click", (params)=> {
                if (params.name=="西藏"){
                    alert('藏地密码！')
                }
                else if (params.name=="北京"){
                    this.displayGreatWall();
                }
                else if (params.name=="陕西"){
                    this.displayEPang();
                }
                else if (params.name=="甘肃"){
                    this.displayMoGao();
                }
                else{
                    alert('暂无'  + '地图数据'+params.name);
                }
                
                return;
                // _this.$router.push({
                // path: "/province",
                // query: { provinceName: params.data.ename, province: params.name },
                // });
            });
            this.$nextTick(() => {
                mychart.resize() // 这里是为了解决，tab刷新的时候，图表不刷新的问题。
            })

        },
        
    }
}
</script>

<style scoped>

.background {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
}

.Maps-mask {
    width: 100%;
    height:159vh;
    position: relative;
    /* float: left; */
    /* background-image: url("../../../../assets/whitegrey.png"); */
}

/* 标题 */
.map-title {
    display: block;
    width: 370px;
    margin: 0 auto;
    position: absolute;
    left: 449px;
    top: 135px;
    z-index: 1001;
}
.Maps-title-img {
    width: 249px;
    height: 62px;
    margin-top:-300px;
    margin-left:86px;
    /* display: flex; */
}

.Maps-title-img-second {
    width: 249px;
    height: 62px;
    margin-top:-125px;
    margin-left:530px;
    /* display: flex; */
}

.Maps-title-btn {
    width: 310px;
    padding: 6px;
    margin: 24px auto;
    border: 1px solid #00BEFF;
    color: #00BEFF;
    text-align: center;
}
.btn-active {
    background: #00BEFF;
    color: #fff;
}

.btn {
    display: inline-block;
    cursor: pointer;
    transition: all .3s ease;
    font-weight: 900;
    width: 150px;
    height: 43px;
    line-height: 43px;
    text-align: center;
}

.box-card {
    width: 900px;
    position:relative;
    background-color:rgba(0, 0, 0, 0.726);
    /* background-color:black; */
}

.textHead{
    font-size:36px;
    font-family:KaiTi;
    color:white;
    margin-top:10px;
    display:flex;justify-content: center;
}

/* 复制景观卡片 */
.recommand-list{position:relative;text-align: center;overflow:hidden;}
.recommand-list:hover .mask{top:0;}
.detail h3{font-size: 20px;font-weight: lighter;list-style: 25px;width: 180px;margin: 110px auto 0;padding-bottom: 5px;border-bottom: 1px solid rgba(255, 255, 255, 0.7);}
.province{z-index: 1000;position:absolute;font-size:16px;cursor: pointer;}
.mask{position:absolute;left:0;top:100%;width:100%;height:100%;background:rgba(0,0,0,.5);color:#fff;}
.tips-province
{
position:absolute;
left:5px;
bottom:5px;
color:#fff;
text-align: left;
font-size:18px;
}
</style>
