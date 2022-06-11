<template>
  <div class="speechpage" id="top">
    <Header></Header>
    <div>
      <img
        class="background"
        src="@/assets/background1.png"
        alt=""
        width="100%"
        height="100%"
      />
      <div class="container" >
        <div class="left" style="z-index: 1">
          <!-- 提示 -->
          <div style="display: none; margin-top: 20px; color: black" id="sorry">
            抱歉没有找到对应的内容。
          </div>
          <!-- 热门景点推荐 -->
          <div id="recommendation">
            <div
              style="
                font-family: '宋体';
                color: black;
                font-size: 20px;
                margin-top: 20px;
                font-weight: bold;
                text-align: left;
              "
            >
              &nbsp;&nbsp;&nbsp;热门景点推荐
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card" @click="palace()">
                <div class="photo">
                  <img src="@/assets/spots/palace.png" />
                </div>
                <h1>故宫</h1>
                <h2>故宫</h2>
                <p style="font-size: 15px; color: black">
                  北京故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。北京故宫以三大殿为中心，占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。
                </p>
              </div>
              <div class="card" @click="budala()">
                <div class="photo">
                  <img src="@/assets/spots/budala.jpg" />
                </div>
                <h1>布达拉宫</h1>
                <h2>布达拉宫</h2>
                <p style="font-size: 15px">
                  布达拉宫位于中国西藏自治区首府拉萨市区西北的玛布日山上，是一座宫堡式建筑群，最初是吐蕃王朝赞普松赞干布为迎娶文成公主而兴建。
                </p>
              </div>
              <div class="card" @click="zhangjiajie()">
                <div class="photo">
                  <img src="@/assets/spots/zhangjiajie.jpg" />
                </div>
                <h1>武陵源风景名胜区</h1>
                <h2>武陵源风景名胜区</h2>
                <p style="font-size: 15px">
                  武陵源风景名胜区由张家界市的张家界国家森林公园、慈利县的索溪峪自然保护区和桑植县的天子山自然保护区组合而成，后又发现了杨家界新景区。方圆369平方公里，奇山异峰3000多座，其中海拔在千米以上的有243座。
                </p>
              </div>
              <div class="card" @click="yuan()">
                <div class="photo">
                  <img src="@/assets/spots/yuan.png" />
                </div>
                <h1>圆明园</h1>
                <h2>圆明园</h2>
                <p style="font-size: 15px">
                  圆明园是中国清代大型皇家园林，清帝每到盛夏就来此避暑、听政，故圆明园又称“夏宫”。1856到1860年第二次鸦片战争期间，圆明园遭英法联军洗劫烧毁，故址现为圆明园遗址公园。
                </p>
              </div>
              <div class="card" @click="east()">
                <div class="photo">
                  <img src="@/assets/spots/east.png" />
                </div>
                <h1>东方明珠</h1>
                <h2>东方明珠</h2>
                <p style="font-size: 15px">
                  东方明珠广播电视塔，简称“东方明珠”，始建于1994年10月1日，是集都市观光、时尚餐饮、购物娱乐、历史陈列、浦江游览、会展演出、广播电视发射等多功能于一体的上海市标志性建筑之一。
                </p>
              </div>
              <div class="card" @click="jiu()">
                <div class="photo">
                  <img src="@/assets/spots/jiu.jpg" />
                </div>
                <h1>九寨沟</h1>
                <h2>九寨沟</h2>
                <p style="font-size: 15px">
                  九寨沟位于四川省西北部岷山山脉南段的阿坝藏族羌族自治州九寨沟县漳扎镇境内，地处岷山南段弓杆岭的东北侧。距离成都市400多千米，系长江水系嘉陵江上游白水江源头的一条大支沟。
                </p>
              </div>
            </div>
          </div>
          <!-- 搜索或点击的具体景点 -->
          <div id="searched_attraction">
            <!-- 黄山 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="HuangShan"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">黄山</div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    黄山，古称黟山，位于安徽省黄山市境内，地处安徽省南部、黄山市北部，地跨歙县、休宁县、黟县和黄山区、徽州区，东起黄狮岭，西至小岭脚，北始二龙桥，南达汤口镇，地跨东经118°01′至118°17′、北纬30°01′至30°18′，山境南北长约40千米，东西宽约30千米，总占地面积约1200平方千米，属亚热带季风气候；以奇松、怪石、云海、温泉、冬雪“五绝”及历史遗存、书画、文学、传说、名人“五胜”著称于世，有“天下第一奇山”“天开图画”“松海云川”之称。
                  </div>
                  <div class="para">
                    黄山境内分为温泉、云谷、玉屏、北海、松谷、钓桥、浮溪、洋湖、福固九个管理区，有千米以上高峰88座，其中“莲花”“光明顶”“天都”为黄山三大主峰，海拔均逾1800米。黄山境内有大量的文化遗存，如古蹬道、古楹联、古桥、古亭、古寺、古塔等，另有现存摩崖石刻300余处，孕育了中国山水画“黄山画派”；黄山境内动植物资源丰富，森林覆盖率达84.7%，植被覆盖率达93.6%，已知脊椎动物达300余种，鸟类170余种；有“五岳归来不看山，黄山归来不看岳”之名。
                  </div>
                  <div class="para">
                    1982年，黄山风景区被国务院公布为首批国家级重点风景名胜区。
                    1985年，黄山风景区被中国旅游报公布为中国十大风景名胜区之一。
                    1990年12月，黄山被联合国教科文组织列入《世界文化与自然遗产名录》。
                    2004年2月，黄山被联合国教科文组织公布为世界地质公园。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img
                  src="@/assets/spots/HuangShan.jpg"
                  alt="黄山"
                  width="500px"
                />
              </div>
            </el-card>
            <!-- 故宫 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="palace"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">故宫</div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    北京故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。北京故宫以三大殿为中心，占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。
                  </div>
                  <div class="para">
                    北京故宫于明成祖永乐四年（1406年）开始建设，以南京故宫为蓝本营建，到永乐十八年（1420年）建成，成为明清两朝二十四位皇帝的皇宫。民国十四年国庆节（1925年10月10日）故宫博物院正式成立开幕。北京故宫南北长961米，东西宽753米，四面围有高10米的城墙，城外有宽52米的护城河。紫禁城有四座城门，南面为午门，北面为神武门，东面为东华门，西面为西华门。城墙的四角，各有一座风姿绰约的角楼，民间有九梁十八柱七十二条脊之说，形容其结构的复杂。
                  </div>
                  <div class="para">
                    北京故宫内的建筑分为外朝和内廷两部分。外朝的中心为太和殿、中和殿、保和殿，统称三大殿，是国家举行大典礼的地方。三大殿左右两翼辅以文华殿、武英殿两组建筑。内廷的中心是乾清宫、交泰殿、坤宁宫，统称后三宫，是皇帝和皇后居住的正宫。其后为御花园。后三宫两侧排列着东、西六宫，是后妃们居住休息的地方。东六宫东侧是天穹宝殿等佛堂建筑，西六宫西侧是中正殿等佛堂建筑。外朝、内廷之外还有外东路、外西路两部分建筑。
                  </div>
                  <div class="para">
                    北京故宫是世界上现存规模最大、保存最为完整的木质结构古建筑之一，是国家AAAAA级旅游景区，
                    1961年被列为第一批全国重点文物保护单位；
                    1987年被列为世界文化遗产。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img src="@/assets/spots/palace.png" alt="故宫" width="500px" />
              </div>
            </el-card>
            <!-- 圆明园 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="yuan"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">圆明园</div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    圆明园是中国清代大型皇家园林，由圆明园及其附园长春园和绮春园（后改名万春园）组成，也叫圆明三园，有“万园之园”之称。清帝每到盛夏就来此避暑、听政，故圆明园又称“夏宫”。1856到1860年第二次鸦片战争期间，圆明园遭英法联军洗劫烧毁，故址现为圆明园遗址公园。
                  </div>
                  <div class="para">
                    圆明园占地面积3.5平方千米，建筑面积达20万平方米，有一百五十余景，最初是康熙帝给皇四子胤禛的赐园。康熙为之题匾“圆明园”，“圆明”为雍正法号。1722年雍正即位以后，拓展原赐园，并在园南增建了正大光明殿和勤政殿以及内阁、六部、军机处诸多值房，欲以夏季在此“避喧听政”。乾隆帝在位期间除对圆明园进行局部增建、改建之外，还在紧东邻新建了长春园，在东南邻并入了万春园。至此，圆明园的格局基本形成，嘉庆、道光年间又进行多次修缮和拓建。
                  </div>
                  <div class="para">
                    圆明园在清室一百五十余年的创建和经营下，曾以其宏大的地域规模、杰出的营造技艺、精美的建筑景群、丰富的文化收藏和博大精深的民族文化内涵而享誉于世，被誉为“一切造园艺术的典范”，被法国作家维克多·雨果称誉为“理想与艺术的典范”。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img src="@/assets/spots/yuan.png" alt="圆明园" width="500px" />
              </div>
            </el-card>
            <!-- 九寨沟 -->
            <el-card style="display: none; height: 100%; opacity: 0.9" id="jiu">
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">九寨沟</div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    九寨沟位于四川省西北部岷山山脉南段的阿坝藏族羌族自治州九寨沟县漳扎镇境内，地处岷山南段弓杆岭的东北侧。距离成都市400多千米，系长江水系嘉陵江上游白水江源头的一条大支沟。
                  </div>
                  <div class="para">
                    九寨沟自然保护区地势南高北低，山谷深切，高差悬殊。北缘九寨沟口海拔仅2000米，中部峰岭均在4000米以上，南缘达4500米以上，主沟长30多公里。
                  </div>
                  <div class="para">
                    九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img src="@/assets/spots/jiu.jpg" alt="九寨沟" width="500px" />
              </div>
            </el-card>
            <!-- 东方明珠 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="east"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">
                      东方明珠
                    </div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    东方明珠广播电视塔，简称“东方明珠”，位于上海市浦东新区陆家嘴世纪大道1号，地处黄浦江畔，背拥陆家嘴地区现代化建筑楼群，与隔江的外滩万国建筑博览群交相辉映，始建于1994年10月1日，是集都市观光、时尚餐饮、购物娱乐、历史陈列、浦江游览、会展演出、广播电视发射等多功能于一体的上海市标志性建筑之一。
                    截至2019年，为亚洲第六高塔、世界第九高塔。
                  </div>
                  <div class="para">
                    东方明珠广播电视塔主体为多筒结构，由3根斜撑、3根立柱及广场、塔座、下球体、5个小球体、上球体、太空舱、发射天线桅杆等构成，总高468米，总建筑面积达10万平方米。
                    1995年，东方明珠广播电视塔被评为上海十大新景观之一。
                    1999年，东方明珠广播电视塔获上海市优秀勘察设计一等奖、中国土木工程詹天佑奖。
                    2007年5月8日，东方明珠广播电视塔被中华人民共和国国家旅游局批准为国家AAAAA级旅游景区。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img
                  src="@/assets/spots/east.png"
                  alt="东方明珠"
                  width="500px"
                />
              </div>
            </el-card>
            <!-- 张家界——武陵源 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="zhangjiajie"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">
                      武陵源风景名胜区
                    </div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    武陵源风景名胜区位于中国中部湖南省西北部，东经110°20'30"～110°41'15"、北纬29°16'25"～29°24'25"之间。由张家界市的张家界国家森林公园、慈利县的索溪峪自然保护区和桑植县的天子山自然保护区组合而成，后又发现了杨家界新景区。方圆369平方公里，奇山异峰3000多座，其中海拔在千米以上的有243座。
                  </div>
                  <div class="para">
                    由于武陵源地处石英砂岩与石灰岩结合部。景区北部大片石灰岩喀斯特地貌，经亿万年河流变迁降位侵蚀溶解，形成了无数的溶洞、落水洞、天窗、群泉。
                    武陵源风景名胜区森林覆盖率达67%。
                    生长有野生动物400多种、木本植物850多种，有一级保护动物豹、云豹、黄腹角雉3种，二级保护动物大鲵、猕猴、穿山甲等25种。有国家一级保护植物珙桐、伯乐树、南方红豆杉等5种，二级保护植物白豆杉、杜仲、厚朴等16种
                    。
                    武陵源被称为自然的迷宫、地质的博物馆、森林的王国、植物的百花园、野生动物的乐园。
                  </div>
                  <div class="para">
                    1992年被列入《世界自然遗产》
                    。2004年被列为国家首批《世界地质公园》
                    、2007年被授予首批国家AAAAA级旅游景区。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img
                  src="@/assets/spots/zhangjiajie.jpg"
                  alt="武陵源风景名胜区"
                  width="500px"
                />
              </div>
            </el-card>
            <!-- 布达拉宫 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="budala"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">
                      布达拉宫
                    </div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    布达拉宫位于中国西藏自治区首府拉萨市区西北的玛布日山上，是一座宫堡式建筑群，最初是吐蕃王朝赞普松赞干布为迎娶文成公主而兴建。
                  </div>
                  <div class="para">
                    于17世纪重建后，成为历代达赖喇嘛的冬宫居所，为西藏政教合一的统治中心。1961年，布达拉宫成为了中华人民共和国国务院第一批全国重点文物保护单位之一。1994年，布达拉宫被列为世界文化遗产。布达拉宫的主体建筑为白宫和红宫两部分。
                  </div>
                  <div class="para">
                    整座宫殿具有藏式风格，高200余米，外观13层，实际只有9层。由于它起建于山腰，大面积的石壁又屹立如削壁，使建筑仿佛与山岗融为一体，气势雄伟。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img
                  src="@/assets/spots/budala.jpg"
                  alt="布达拉宫"
                  width="500px"
                />
              </div>
            </el-card>
            <!-- 长城 -->
            <el-card
              style="display: none; height: 100%; opacity: 0.9"
              id="GreatWall"
            >
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div>
                      <el-button
                        icon="el-icon-back"
                        @click="back()"
                        circle
                      ></el-button>
                    </div>
                    <div style="font-size: 20px; font-weight: bold">长城</div>
                    <div style="width: 100px"></div>
                  </div>
                  <div class="para">
                    长城（the Great
                    Wall），又称万里长城，是中国古代的军事防御工事，是一道高大、坚固而且连绵不断的长垣，用以限隔敌骑的行动。长城不是一道单纯孤立的城墙，而是以城墙为主体，同大量的城、障、亭、标相结合的防御体系。
                  </div>
                  <div class="para">
                    长城修筑的历史可上溯到西周时期，发生在首都镐京（今陕西西安）的著名典故“烽火戏诸侯”就源于此
                    。春秋战国时期，列国争霸，互相防守，长城修筑进入第一个高潮，但此时修筑的长度都比较短。秦灭六国统一天下后，秦始皇连接和修缮战国长城，始有万里长城之称
                    。明朝是最后一个大修长城的朝代，今天人们所看到的长城多是此时修筑
                    。
                  </div>
                  <div class="para">
                    长城资源主要分布在河北、北京、天津、山西、陕西、甘肃、内蒙古、黑龙江、吉林、辽宁、山东、河南、青海、宁夏、新疆共15个省、市、自治区。其中河北省境内长度2000多千米，陕西省境内长度1838千米
                    。根据文物和测绘部门的全国性长城资源调查结果，明长城总长度为8851.8千米，秦汉及早期长城超过1万千米，总长超过2.1万千米
                    。现存长城文物本体包括长城墙体、壕堑、界壕、单体建筑、关堡、相关设施等各类遗存，总计4.3万余处（座/段）
                    。
                  </div>
                  <div class="para">
                    1961年3月4日，长城被国务院公布为第一批全国重点文物保护单位
                    。1987年12月，长城被列为世界文化遗产
                    。2020年11月26日，国家文物局发布了第一批国家级长城重要点段名单
                    。
                  </div>
                </div>

                <div style="width: 50px"></div>

                <img
                  src="@/assets/spots/greatwall.jpg"
                  alt="长城"
                  width="500px"
                />
              </div>
            </el-card>
          </div>
          <!-- 平原景观 -->
          <div id="plain" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;平原
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain1.jpeg" />
                </div>
                <h1>东北平原</h1>
                <h2>东北平原</h2>
                <p style="font-size: 12px; color: black">
                  东北平原又称松辽平原。位于大、小兴安岭和长白山之间。北起嫩江中游，南至辽东湾。南北长约1000公里，东西宽约400公里，海拔大多低于200米，面积达35万平方公里，是中国面积最大的平原。东北平原土层厚，土地肥沃，耕地广阔，是中国主要的粮食产区。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>华北平原</h1>
                <h2>华北平原</h2>
                <p style="font-size: 12px">
                  位于黄河下游。西起太行山脉和豫西山地，东到黄海、渤海和山东丘陵，北起燕山山脉，西南到河南的桐柏山和大别山，东南至苏、皖北部，与长江中下游平原相连。华北平原是中国第二大平原。面积约310,000平方千米。华北平原属暖温带季风气候。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain3.png" />
                </div>
                <h1>长江中下游平原</h1>
                <h2>长江中下游平原</h2>
                <p style="font-size: 12px">
                  长江中下游平原是指中国长江三峡以东的中下游沿岸带状平原。北接淮阳山，南接江南丘陵。地势低平，下游平原地面高度大部在50米以下。中游平原包括湖北江汉平原、湖南洞庭湖平原和江西鄱阳湖平原。下游平原包括安徽长江沿岸平原和巢湖平原以及江苏、浙江、上海间的长江三角洲。
                </p>
              </div>
            </div>
          </div>
          <!-- 湿地景观 -->
          <div id="shidi" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;湿地
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>乌伦古湖</h1>
                <h2>乌伦古湖</h2>
                <p style="font-size: 12px; color: black">
                  乌伦古湖国家湿地公园位于福海县城以西20余公里的解特阿热勒镇内，由乌伦古湖和吉力湖两部分组成。湿地公园总面积1271.55平方公里，其中湿地总面积1095平方公里，湿地率86.11%。乌伦古湖是北疆最大的永久性淡水湖，也是迁徙候鸟飞越天山和阿尔泰山的“能量补给站”。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi2.png" />
                </div>
                <h1>三江湿地</h1>
                <h2>三江湿地</h2>
                <p style="font-size: 12px">
                  三江湿地位于黑龙江及乌苏里江交汇处，境内大小河流50多条，湖泊
                  200多个，江心岛26个，沼泽遍地，野生动植物资源十分丰富，是我国东北端一块面积最大、原始风貌最典型的低地高寒湿地，也是东北亚鸟类迁徙的重要通道、停歇地和繁衍栖息地。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi3.png" />
                </div>
                <h1>若尔盖湿地</h1>
                <h2>若尔盖湿地</h2>
                <p style="font-size: 12px">
                  若尔盖国家湿地公园位于青藏高原东部，北与甘肃玛曲、碌曲、卓尼、迭部四县相邻，海拔3000多米，被赞为“中国最美的湿地”。
                  若尔盖国家湿地公园主要由白河和黄河主河道构成，总面积为2662.7公顷，是世界上面积最大、保存最完好的高原泥炭沼泽湿地。
                </p>
              </div>
            </div>
          </div>
          <!-- 电视塔 -->
          <div id="tower" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;电视塔
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>广州塔</h1>
                <h2>广州塔</h2>
                <p style="font-size: 15px; color: black">
                  广州塔（广州新电视塔）位于广州市中心，城市新中轴线与珠江景观轴交汇处，与海心沙岛和广州市21世纪CBD区珠江新城隔江相望，地理位置得天独厚。
                </p>
              </div>

              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>中央广播电视塔</h1>
                <h2>中央广播电视塔</h2>
                <p style="font-size: 12px">
                  中央广播电视塔坐落于北京市海淀区西三环中路西侧。东临秀美的玉渊潭和著名的钓鱼台，南望公主坟，北瞰阜成路，这是一座多功能现代化的标志性建筑，可发射8套电视和10套广播，是中国第四高塔，世界第六高塔，世界高塔协会成员塔，中国广播电视协会高塔委员会成员塔。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/east.png" />
                </div>
                <h1>东方明珠塔</h1>
                <h2>东方明珠塔</h2>
                <p style="font-size: 15px">
                  东方明珠广播电视塔，简称“东方明珠”，始建于1994年10月1日，是集都市观光、时尚餐饮、购物娱乐、历史陈列、浦江游览、会展演出、广播电视发射等多功能于一体的上海市标志性建筑之一。
                </p>
              </div>
            </div>
          </div>
          <!-- 梯田 -->
          <div id="terrace" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;梯田
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>元阳梯田</h1>
                <h2>元阳梯田</h2>
                <p style="font-size: 15px; color: black">
                  元阳梯田位于云南省元阳县的哀牢山南部，是哈尼族人世世代代留下的杰作，因此也成哈尼梯田。被誉为中国最美的山岭雕刻”。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>龙脊梯田</h1>
                <h2>龙脊梯田</h2>
                <p style="font-size: 15px">
                  龙脊梯田在广西龙胜各族自治县和平乡平安村龙脊山，距县城22公里。距桂林市80公里，处东经109°32'-100°14'北纬25°35'-26°17'之间。从广义说叫做龙胜梯田，从狭义上称为龙脊梯田。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain3.png" />
                </div>
                <h1>紫鹊界梯田</h1>
                <h2>紫鹊界梯田</h2>
                <p style="font-size: 12px">
                  紫鹊界梯田位于新化县西部山区水车镇境内，她周边的梯田达8万余亩以上，其地势之高，规模之大，形态之美，堪称世界之最。紫鹊界生态环境优美，梯田密集，形态原始，阡陌纵横，线条流畅，山高水长，板屋交错，充分展示出梯田的自然美、古朴美、形体美、文化美。
                </p>
              </div>
            </div>
          </div>
          <!-- 雾凇 -->
          <div id="rime" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;雾凇
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>乌伦古湖</h1>
                <h2>乌伦古湖</h2>
                <p style="font-size: 12px; color: black">
                  乌伦古湖国家湿地公园位于福海县城以西20余公里的解特阿热勒镇内，由乌伦古湖和吉力湖两部分组成。湿地公园总面积1271.55平方公里，其中湿地总面积1095平方公里，湿地率86.11%。乌伦古湖是北疆最大的永久性淡水湖，也是迁徙候鸟飞越天山和阿尔泰山的“能量补给站”。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>华北平原</h1>
                <h2>华北平原</h2>
                <p style="font-size: 12px">
                  位于黄河下游。西起太行山脉和豫西山地，东到黄海、渤海和山东丘陵，北起燕山山脉，西南到河南的桐柏山和大别山，东南至苏、皖北部，与长江中下游平原相连。华北平原是中国第二大平原。面积约310,000平方千米。华北平原属暖温带季风气候。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain3.png" />
                </div>
                <h1>长江中下游平原</h1>
                <h2>长江中下游平原</h2>
                <p style="font-size: 12px">
                  长江中下游平原是指中国长江三峡以东的中下游沿岸带状平原。北接淮阳山，南接江南丘陵。地势低平，下游平原地面高度大部在50米以下。中游平原包括湖北江汉平原、湖南洞庭湖平原和江西鄱阳湖平原。下游平原包括安徽长江沿岸平原和巢湖平原以及江苏、浙江、上海间的长江三角洲。
                </p>
              </div>
            </div>
          </div>
          <!-- 博物馆 -->
          <div id="museum" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;博物馆
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>乌伦古湖</h1>
                <h2>乌伦古湖</h2>
                <p style="font-size: 12px; color: black">
                  乌伦古湖国家湿地公园位于福海县城以西20余公里的解特阿热勒镇内，由乌伦古湖和吉力湖两部分组成。湿地公园总面积1271.55平方公里，其中湿地总面积1095平方公里，湿地率86.11%。乌伦古湖是北疆最大的永久性淡水湖，也是迁徙候鸟飞越天山和阿尔泰山的“能量补给站”。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>华北平原</h1>
                <h2>华北平原</h2>
                <p style="font-size: 12px">
                  位于黄河下游。西起太行山脉和豫西山地，东到黄海、渤海和山东丘陵，北起燕山山脉，西南到河南的桐柏山和大别山，东南至苏、皖北部，与长江中下游平原相连。华北平原是中国第二大平原。面积约310,000平方千米。华北平原属暖温带季风气候。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain3.png" />
                </div>
                <h1>长江中下游平原</h1>
                <h2>长江中下游平原</h2>
                <p style="font-size: 12px">
                  长江中下游平原是指中国长江三峡以东的中下游沿岸带状平原。北接淮阳山，南接江南丘陵。地势低平，下游平原地面高度大部在50米以下。中游平原包括湖北江汉平原、湖南洞庭湖平原和江西鄱阳湖平原。下游平原包括安徽长江沿岸平原和巢湖平原以及江苏、浙江、上海间的长江三角洲。
                </p>
              </div>
            </div>
          </div>
          <!-- 寺庙 -->
          <div id="temple" style="display: none">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div>
                <el-button
                  icon="el-icon-back"
                  @click="back()"
                  circle
                ></el-button>
              </div>
              <div
                style="
                  font-family: '宋体';
                  color: black;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                &nbsp;寺庙
              </div>
            </div>
            <div style="height: 15px"></div>
            <div class="body1">
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/shidi1.jpeg" />
                </div>
                <h1>乌伦古湖</h1>
                <h2>乌伦古湖</h2>
                <p style="font-size: 12px; color: black">
                  乌伦古湖国家湿地公园位于福海县城以西20余公里的解特阿热勒镇内，由乌伦古湖和吉力湖两部分组成。湿地公园总面积1271.55平方公里，其中湿地总面积1095平方公里，湿地率86.11%。乌伦古湖是北疆最大的永久性淡水湖，也是迁徙候鸟飞越天山和阿尔泰山的“能量补给站”。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain2.jpg" />
                </div>
                <h1>华北平原</h1>
                <h2>华北平原</h2>
                <p style="font-size: 12px">
                  位于黄河下游。西起太行山脉和豫西山地，东到黄海、渤海和山东丘陵，北起燕山山脉，西南到河南的桐柏山和大别山，东南至苏、皖北部，与长江中下游平原相连。华北平原是中国第二大平原。面积约310,000平方千米。华北平原属暖温带季风气候。
                </p>
              </div>
              <div class="card">
                <div class="photo">
                  <img src="@/assets/spots/plain3.png" />
                </div>
                <h1>长江中下游平原</h1>
                <h2>长江中下游平原</h2>
                <p style="font-size: 12px">
                  长江中下游平原是指中国长江三峡以东的中下游沿岸带状平原。北接淮阳山，南接江南丘陵。地势低平，下游平原地面高度大部在50米以下。中游平原包括湖北江汉平原、湖南洞庭湖平原和江西鄱阳湖平原。下游平原包括安徽长江沿岸平原和巢湖平原以及江苏、浙江、上海间的长江三角洲。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style="width: 100px"></div>

        <div class="right" style="z-index: 1">
          <div class="speech">
            <el-button
              icon="el-icon-microphone"
              id="button-play-ws"
              circle
            ></el-button>
            <div id="transcription"></div>
          </div>

          <div class="title">地文景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="plain()">平原</span>
              <span>戈壁</span>
              <span>峡谷</span>
              <span>峰林</span>
            </div>
            <div class="tag">
              <span>火山</span>
              <span>岩石</span>
              <span>雪山</span>
              <span>绿洲</span>
              <span>沙地</span>
            </div>
            <div class="tag">
              <span>喀斯特</span>
              <span>洞穴</span>
              <span>丹霞</span>
              <span>彩丘</span>
            </div>
          </div>
          <hr />
          <div class="title">水文景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="shidi()">湿地</span>
              <span>冰川</span>
              <span>湖泊</span>
              <span>海岸</span>
            </div>
            <div class="tag">
              <span>岛屿</span>
              <span>河流</span>
              <span>瀑布</span>
            </div>
          </div>
          <hr />
          <div class="title">生物景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="terrace()">梯田</span>
              <span>草原</span>
              <span>牧场</span>
              <span>林场</span>
            </div>
            <div class="tag">
              <span>农场</span>
              <span>庄园</span>
              <span>热带雨林</span>
              <span>花地</span>
            </div>
          </div>
          <hr />
          <div class="title_big">气象与天象景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="rime()">雾凇</span>
              <span>观星地</span>
              <span>海市蜃楼</span>
              <span>云雾</span>
              <span>极光</span>
            </div>
          </div>
          <hr />
          <div class="title_big">遗址与遗迹景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="temple()">寺庙</span>
              <span>古塔</span>
              <span>古村</span>
              <span>陵墓</span>
              <span>宫殿</span>
            </div>
            <div class="tag">
              <span>石窟</span>
              <span>纪念园</span>
              <span>古典园林</span>
              <span>祠堂</span>
            </div>
          </div>
          <hr />
          <div class="title_big">建筑与城市景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="tower()">电视塔</span>
              <span>工业基地</span>
              <span>公园</span>
              <span>现代园林</span>
              <span>桥梁</span>
              <span>运河</span>
            </div>
          </div>
          <hr />
          <div class="title_big">人文活动景观</div>
          <div class="tags">
            <div class="tag">
              <span @click="museum()">博物馆</span>
              <span>科技馆</span>
              <span>展览馆</span>
              <span>影视城</span>
              <span>温泉</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/CXD/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      // img: require("@/assets/back.png"),
    };
  },
  methods: {
    back() {
      location.reload();
    },
    palace() {
      document.getElementById("palace").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },
    yuan() {
      document.getElementById("yuan").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },
    zhangjiajie() {
      document.getElementById("zhangjiajie").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },
    budala() {
      document.getElementById("budala").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },
    east() {
      document.getElementById("east").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },
    jiu() {
      document.getElementById("jiu").style.display = "block";
      document.getElementById("recommendation").style.display = "none";
    },

    plain() {
      document.getElementById("plain").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("shidi").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("rime").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    shidi() {
      document.getElementById("shidi").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("rime").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
    },
    terrace() {
      document.getElementById("terrace").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("shidi").style.display = "none";
      document.getElementById("rime").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
    },
    rime() {
      document.getElementById("rime").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("shidi").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
    },
    tower() {
      document.getElementById("tower").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("shidi").style.display = "none";
      document.getElementById("rime").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
    },
    temple() {
      document.getElementById("temple").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("shidi").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("rime").style.display = "none";
      document.getElementById("museum").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";
    },
    museum() {
      document.getElementById("museum").style.display = "block";
      // 去掉推荐
      document.getElementById("recommendation").style.display = "none";
      // 去掉语音搜索或者点击到的卡片
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      // 去掉之前导航栏的东西
      document.getElementById("plain").style.display = "none";
      document.getElementById("terrace").style.display = "none";
      document.getElementById("shidi").style.display = "none";
      document.getElementById("tower").style.display = "none";
      document.getElementById("temple").style.display = "none";
      document.getElementById("rime").style.display = "none";
      // 去掉未找到提示
      document.getElementById("sorry").style.display = "none";

      // document.getElementById("top").scrollIntoView(true);
      // document.documentElement.scrollTop = 0;

      // window.scrollTo(0,0);
    },
  },
};
window.onload = function () {
  // Test browser support
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition || null;

  if (window.SpeechRecognition === null) {
    document.getElementById("ws-unsupported").classList.remove("hidden");
    document
      .getElementById("button-play-ws")
      .setAttribute("disabled", "disabled");
    // document
    //   .getElementById("button-stop-ws")
    //   .setAttribute("disabled", "disabled");
  } else {
    var recognizer = new window.SpeechRecognition();
    var transcription = document.getElementById("transcription");
    // var log = document.getElementById("log");

    // Recogniser doesn't stop listening even if the user pauses
    recognizer.continuous = false;
    // recognizer.continuous = true;

    // Start recognising
    recognizer.onresult = function (event) {
      transcription.textContent = "";
      //每次新录音的时候清空前面的
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("yuan").style.display = "none";
      document.getElementById("palace").style.display = "none";
      document.getElementById("zhangjiajie").style.display = "none";
      document.getElementById("east").style.display = "none";
      document.getElementById("jiu").style.display = "none";
      document.getElementById("budala").style.display = "none";
      document.getElementById("sorry").style.display = "none";

      for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          // transcription.textContent =
          //   event.results[i][0].transcript +
          //   " (Confidence: " +
          //   event.results[i][0].confidence +
          //   ")";
          transcription.textContent = event.results[i][0].transcript;
        } else {
          transcription.textContent += event.results[i][0].transcript;
        }
      }
      if (transcription.textContent.lastIndexOf("黄山") != -1) {
        document.getElementById("HuangShan").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("长城") != -1) {
        document.getElementById("GreatWall").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("故宫") != -1) {
        document.getElementById("palace").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("圆明园") != -1) {
        document.getElementById("yuan").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("九寨沟") != -1) {
        document.getElementById("jiu").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("武陵源") != -1) {
        document.getElementById("zhangjiajie").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("东方明珠") != -1) {
        document.getElementById("east").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("布达拉宫") != -1) {
        document.getElementById("budala").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else {
        document.getElementById("sorry").style.display = "block";
        document.getElementById("recommendation").style.display = "block";
      }
    };

    // Listen for errors
    recognizer.onerror = function (event) {
      log.innerHTML =
        "Recognition error: " + event.message + "<br />" + log.innerHTML;
    };
    document
      .getElementById("button-play-ws")
      .addEventListener("click", function () {
        // Set if we need interim results
        // recognizer.interimResults = document.querySelector(
        //   'input[name="recognition-type"][value="interim"]'
        // ).checked;

        try {
          recognizer.start();
          log.innerHTML = "Recognition started" + "<br />" + log.innerHTML;
        } catch (ex) {
          log.innerHTML =
            "Recognition error: " + ex.message + "<br />" + log.innerHTML;
        }
      });

    // document
    //   .getElementById("button-stop-ws")
    //   .addEventListener("click", function () {
    //     recognizer.stop();
    //     log.innerHTML = "Recognition stopped" + "<br />" + log.innerHTML;
    //   });

    // document.getElementById("clear-all").addEventListener("click", function () {
    //   transcription.textContent = "";
    //   log.textContent = "";
    // });
  }
};
</script>
<style scoped>
.speechpage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "宋体";
}
.speechpage .container {
  position: relative;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  /* border: 1px solid #333333; */
}
.left {
  width: 1400px;
  /* border: 1px solid #333333; */
  text-align: center;
  z-index: 2;
}
.right {
  width: 400px;
  /* border: 1px solid #333333; */
  text-align: center;
  /* display: flex; */
  /* justify-content: center; */
  z-index: 2;
}
.speech {
  /* width: 60%; */
  margin-top: 20px;
  width: 100%;
  /* text-align: center; */
  /* border: 1px solid #333333; */
}
#transcription {
  display: block;
  /* width: 200px; */
  height: 2em;
  /* line-height: 1em; */
  /* border: 1px solid #333333; */
  text-align: center;
  font-family: "宋体";
  margin-top: 5px;
}
.el-card {
  margin-top: 20px;
  width: 100%;
}
.title {
  font-size: 16px;
  font-family: "宋体";
  background-color: #eaeaea;
  width: 90px;
  /* height: 25px; */
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #2c2c2c;
}
.title_big {
  font-size: 16px;
  font-family: "宋体";
  background-color: #eaeaea;
  width: 120px;
  /* height: 25px; */
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #2c2c2c;
}
.tags {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: #eaeaea;
}
.tag {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 5px;
}

.container {
  color: white;
}

.background {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
}

.body1 {
  /* width: 80vw;
  height: 60vh; */
  background-color: var(--background-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* font: italic 1em Georgia, serif; */
  font-family: "宋体";
  /* font-family: "Montserrat", sans-serif, Arial, "Microsoft Yahei"; */
}
.card {
  /* flex布局下元素不按比例缩放 */
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  margin: 20px;
  background-color: var(--border-color);
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex 子元素 纵向排列 */
  flex-direction: column;
  /* 增加个阴影 */
  box-shadow: 0 0 20px #2c2c2c;
  /* 同意给字体加个颜色 */
  color: var(--font_color);
}
.photo {
  position: absolute;
  /* 默认为放大 */
  width: 100%;
  height: 100%;
  top: 0px;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}
.photo::before {
  /* 通过before增加渐变背景实现遮罩，让文字默认看起来清晰一些 */
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #333, transparent);
}
.card:hover .photo::before {
  /* 缩小时隐藏 */
  display: none;
}
.photo img {
  /* 图片高宽均为100% */
  /* 然后按照cover缩放，裁切长边 */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card:hover .photo {
  /* 鼠标移上变小 */
  width: 120px;
  height: 120px;
  top: 30px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgb(109, 108, 108);
}
h1 {
  position: absolute;
  top: 380px;
  transition: 0.5s;
  font-size: 18px;
  color: white;
}
.card:hover h1 {
  display: none;
  /* position: absolute;
  top: 170px;
  font-size: 14px; */
}
h2 {
  margin-top: 190px;
  width: 80%;
  font-weight: normal;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--h2_border_color);
}
p {
  width: 90%;
  /* 段落缩进2个字符大小 */
  text-indent: 2em;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 30px;
  color: black;
  text-align: left;
}

/* .hs{
  height: 800px; 
  background:url('../../assets/HuangShan.jpg') no-repeat;
  background-size:100% 100%;
  color: white;
} */
.para {
  /* 段落缩进2个字符大小 */
  text-indent: 2em;
  font-size: 16px;
  /* margin-bottom: 10px; */
  line-height: 30px;
  color: black;
  text-align: left;
}
</style>