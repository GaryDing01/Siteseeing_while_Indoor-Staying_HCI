<template>
  <div>
      <el-container>
            <!-- <el-header>
            </el-header> -->
            <Header_update1></Header_update1>

            <el-main>
                Main
            </el-main>
      </el-container>
  </div>
</template>

<script>

import Header_update1 from '../../CXD/Header_update1.vue'

export default {

    name:"FirstPage",
    components:{Header_update1},


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

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

</style>