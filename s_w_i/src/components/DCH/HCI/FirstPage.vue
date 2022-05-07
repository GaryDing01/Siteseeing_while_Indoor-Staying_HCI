<template>
  <div>
    <el-container>
         <!-- <el-header> -->
          <Header></Header>
        <!-- </el-header> -->

         <el-main>
          Main
        </el-main>
    </el-container>
  </div>
</template>

<script>

import Header from '@/components/CXD/header.vue'

export default {

    name:"FirstPage",
    components:{Header},


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
    /* background-color: #E9EEF3; */
    /* color: #333; */
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

</style>