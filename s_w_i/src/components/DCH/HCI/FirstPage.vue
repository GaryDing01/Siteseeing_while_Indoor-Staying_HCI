<template>
  <div>
    <Header_update1></Header_update1>
    
    <!-- 空必要的距离 -->
    <div style="height:11vh;background-color: black;"></div>

    <div class="watchout" style="position:relative;width:100%;margin-left:0px;height:88.3vh;background-color: aqua;">
      <!-- Main -->
      <img src="../../../assets/HiPicture/water2.png" alt="中国山水好风光" class="firstImg"/>
    </div>
  </div>
</template>

<script>

import Header_update1 from '../../CXD/Header_update1.vue'
import global from "../../../assets/DCH/global.js"

export default {

    name:"FirstPage",
    components:{Header_update1,global},


    mounted() {
      global.transparent=2;
      alert(global.transparent);
    },

    data() {
        return {};
    },
    
    methods: {
    }

};
</script>

<style scoped>

  .firstImg{
    /* position: absolute; */
    width:100%;
    height:100%;
    /* transform:scale(1,0.5) */
  }

  .Header_update1.firstHeader {
  background-image: url("../../../assets/mountain1.png");
}

</style>