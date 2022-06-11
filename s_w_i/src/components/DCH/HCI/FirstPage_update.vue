<template>
  <div class="firstHeader">
    <Header_update1></Header_update1>
    
    <!-- 空必要的距离 -->
    <!-- <div style="height:11vh;background-color: black;"></div> -->

    <div class="watchout" style="position:relative;width:100%;margin-left:0px;height:100vh;background-color: ;">
      <!-- Main -->
      <!-- <img src="../../../assets/test1.png" alt="中国山水好风光" class="firstImg"/> -->
    </div>
  </div>
</template>

<script>

import Header_update1 from '../../CXD/Header_update1.vue'
import global from "../../../assets/DCH/global.js"

export default {

    name:"FirstPage",
    components:{Header_update1,global},

    created(){
      global.transparent="0px";
    },

    mounted() {
      
    },

    data() {
        return {};
    },
    
    methods: {
    }

};
</script>

<style scoped>

  .firstHeader {
  background-image: url("../../../assets/test1.png");
  width: 100%;
  /* background-color:green; */
  background-size: 100%;
  opacity: 1;
  position: fixed;
  z-index: 12;
  border-bottom:0.2px dashed rgb(215, 213, 213);
}

  .firstImg{
    /* position: absolute; */
    margin-top:6px;
    width:100%;
    height:100%;
    /* transform:scale(1,0.5) */
  }

</style>