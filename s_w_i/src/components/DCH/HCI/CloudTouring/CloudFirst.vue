<template>
  <div>
      <el-container>
            <!-- <el-header>
            </el-header> -->
            <Header_update1></Header_update1>

            <el-main>
                // 写一个绘制地图的标签。
                <div id="regionCharts" :style="{width: '100%', height: '400px'}">

                </div> 
            </el-main>
      </el-container>
  </div>
</template>

<script>

import Header_update1 from '../../../CXD/Header_update1.vue'

export default {
    name: 'CloudFirst',
    components:{Header_update1},

    mounted(){
        this.drawregionCharts()
    },

    data () {
        return {
        
        }
    },

    methods:{
        drawregionCharts(){
            let dataList = [
                {name: '北京', value: 200}, 
                {name: '四川', value: 800}
            ] // 该数据是从服务器获取到的数据
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name;//自行定义formatter格式
                    }
                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],//取值范围的文字
                    inRange: {
                    color: ['#e0ffff', '#006edd']//取值范围的颜色
                    },
                    show: true//图注
                },
                geo: {
                    map: 'china',
                    roam: false,//不开启缩放和平移
                    zoom: 1.25,//视角缩放比例
                    label: {
                    normal: {
                        show: true,
                        fontSize: '10',
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
            this.$nextTick(() => {
                mychart.resize() // 这里是为了解决，tab刷新的时候，图表不刷新的问题。
            })
        },
    }
}
</script>

<style scoped>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
body > .el-container {
margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
line-height: 320px;
}
</style>
