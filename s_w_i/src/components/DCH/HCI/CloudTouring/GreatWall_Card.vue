<template>
<div>
    <el-button @click="displayGreatWall">按钮</el-button>
    <el-card class="box-card" v-show="showGreatWall">
    <el-row>
        <el-col :span="8" style="background-color:;">
            <div style="display:flex;justify-content: center;"><img src="../../../../assets/Yun/BingDunDun.png" alt="冰墩墩" style="width:78%;"></div>
            <div style="margin-top:0px;display:flex;justify-content: center;"><img src="../../../../assets/Yun/XueRongRong.png" alt="雪融融" style="width:78%;"></div>
            <!-- <div style="margin-top:-10px;display:flex;justify-content: left;"><img src="../../../../assets/Yun/China.png" alt="中国地图" style="width:20%;"></div>          -->
            <div style="margin-top:-25px;display:flex;justify-content: center;"><el-button type="danger" @click="back2Cloud">返回云旅游</el-button></div>
        </el-col>
        <!-- <el-col :span="2" style="background-color:blue;min-height:1px;">
        </el-col> -->
        <el-col :span="16" style="background-color:;margin:auto">
            <div style="background-color:;display:flex;justify-content: center;"><img src="../../../../assets/Yun/Great_Wall.png" alt="长城" style="width:90%;" ></div>
            <div class="textHead" style="">古长城</div>
            <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText1}}</div>
            <div style="margin-top:10px;color:white;text-indent: 2em;">{{this.introText2}}</div>
            <div style="margin-top:-15px;display:flex;justify-content: right;"><img src="../../../../assets/Yun/Beijing.png" alt="北京地图" style="width:9%;"></div>
        </el-col>
    </el-row>
        <!-- <div style="">
            <div><img src="../../../../assets/Yun/BingDunDun.png" alt="冰墩墩" style="width:35%;background-color:green;"></div>
            <div><img src="../../../../assets/Yun/Great_Wall.png" alt="长城" style="width:50%;margin-top:-320px;background-color:orange;"></div>
        </div> -->
    </el-card>
</div>
</template>

<script>

export default {

    data () {
        return {
            showGreatWall:false,
            introText1:"经历了2000多年风雨的长城，1987年被联合国教科文组织列入世界文化遗产名录，是中国最具代表性的自然与文化遗产，是中华民族勇敢、坚韧、智慧、精神的象征。",
            introText2:"然而，在和平时期的我们，却眼睁睁地看着昔日用其“身躯”承受了无数战火硝烟的古长城，在岁月侵蚀及人为破坏下慢慢毁弃。中国长城学会的考察结果表明，明代万里长城有较好墙体的部分，剩下不到20%，有明显可见遗址部分已不到30%。"
        }
    },

    methods:{
        displayGreatWall(){
            this.showGreatWall=!this.showGreatWall;
        },

        back2Cloud(){
            this.showGreatWall=false;
        },
    }
}
</script>

<style scoped>
    .box-card {
    width: 900px;
    position:relative;
    background-color:rgba(0, 0, 0, 0.726);
    }

    .textHead{
        font-size:36px;
        font-family:KaiTi;
        color:white;
        margin-top:10px;
        display:flex;justify-content: center;
    }

</style>