<template>
<div>
    <el-col :span="14" class="am_col1">
            <div v-if="show_am1" class="show_am1">
                <!-- <p>afljldfaniwailnvafie</p> -->
                <div><el-button icon="el-icon-user-solid" class="empInfo_but" @click="showAuth_Info()">员工信息</el-button></div>
                <div><el-button  icon="el-icon-star-off" class="empSal_but" @click="showAuth_Sal()">工资管理</el-button></div>
                <!-- <StaffManagement></StaffManagement> -->
            </div>
        </el-col>

        <el-col :span="8" class="am_col2">
            <div v-if="show_am2" class="show_am2">
                <div><el-image  style="width:200px;height:210px;margin-top:70px;margin-left:20px;" :src="'data:image/jpeg;base64,'+imgpic"></el-image></div>
                <div><el-descriptions-item label="员工编号" class="all_pStaffID" prop="staff_id">员工编号：{{per_staff_id}}</el-descriptions-item></div>
                <div><el-descriptions-item label="工作" class="all_pJob"  prop="job">工作：{{per_job}}</el-descriptions-item></div>
                <div><el-descriptions-item label="姓名" class="all_pName"  prop="name">姓名：{{per_name}}</el-descriptions-item></div>
                <div><el-descriptions-item label="联系方式" class="all_pPhone" prop="phone">联系方式：{{per_phone}}</el-descriptions-item></div>
                <div><el-descriptions-item label="身份证号" class="all_pIDNum" prop="iD_num">身份证号：{{per_iD_num}}</el-descriptions-item></div>
                <div><el-descriptions-item label="入职日期" class="all_pDate" prop="entry_date">入职日期：{{per_date}}</el-descriptions-item></div>
                <!-- <div><el-descriptions-item class="all_pNote">只有经理或财务有相关权限</el-descriptions-item></div> -->
                <!-- <SidePer></SidePer> -->
            </div>
        </el-col>
</div>
</template>

<script>

import StaffManagement from '@/components/DCH/Demo/People_new/StaffManagement';
import SidePer from '@/components/DCH/Demo/People_new/SidePer';

  export default {
    props:['requester_ID'],

      components:{
          StaffManagement,
          SidePer,
      },

    data() {
      return {
        show_am1:true,
        show_am2:true,
        // 右
         per_staff_id:" ",
         per_job:" ",
         per_name:" ",
         per_phone:" ",
         per_iD_num:" ",
         per_date:" ",
         imgpic:null,
      };
    },

     mounted(){
        this.showper();
        this.perPicture();
    },

    methods: {
        showper(){
      this.dialogVisible=true;

      this.$axios.get("/api/Employee/getEmployeeInfobyAttr",{
         params: {
           attribute:"staff_id",
           value:this.requester_ID,
        }
      }).then(response=>{
        this.per_staff_id=response.data[0].staff_id;
        this.per_job=response.data[0].job;
        this.per_name=response.data[0].name;
        this.per_phone=response.data[0].phone;
        this.per_iD_num=response.data[0].iD_num;
        this.per_date=response.data[0].entry_date;
      }).catch((error) => {
          console.log(error);
          alert("请求失败!");
        });
    },

    perPicture(){
    //    console.log('perPicture');
       this.$axios.get("/api/Employee/getEmployeePict",{
         params: {
           staff_id:this.requester_ID,
        }
      }).then(response=>{
        console.log('response.data:');
        console.log(response.data);
        console.log('this.imgpic:');
        console.log(this.imgpic);
        this.imgpic=response.data;
      }).catch((error) => {
          console.log(error);
          alert("请求失败!");
        });
    },
    
    //判断授权
    //点击员工信息按钮
    showAuth_Info(){
        this.$axios.get("/api/Employee/employee_authority_check", {
      params: {
      requester_id:this.requester_ID+'',
      }
      })
      .then(response=> {
        switch(response.data){
          case 0:
            alert('您没有被授权！');
            break;
          default:
            // this.addStaff();
            this.$router.push({path: "/StaffManagement",});
            break;
        }
      })
      .catch((error) => {
          console.log(error);
          alert("请求失败!");
        });
      },

    //点击员工信息按钮
    showAuth_Sal(){
        this.$axios.get("/api/Employee/employee_authority_check", {
      params: {
      requester_id:this.requester_ID+'',
      }
      })
      .then(response=> {
        switch(response.data){
          case 0:
            alert('您没有被授权！');
            break;
          default:
            // this.addStaff();
            this.$router.push({path: "/SalaryManagement",});
            break;
        }
      })
      .catch((error) => {
          console.log(error);
          alert("请求失败!");
        });
      },

  }
}
</script>

<style scoped>
/* 左 */
.empInfo_but{
    width:200px;
    height:200px;
    
    /* position:absolute;
    left:300px;
    top:30px; */
    margin-left:20px;
    margin-top:65px;

    font-size:30px;
}

.empSal_but{
    width:200px;
    height:200px;
    
    /* position:absolute;
    left:300px; */
    margin-left:20px;
    margin-top:65px;

    font-size:30px;
}

/* 右 */
.am_col1{
    background-color:rgb(241, 217, 176);
    position:absolute;
    left:220px;
    width:800px;
    height:600px;
}

.am_col2{
    background-color:rgb(241, 217, 176);
    position:absolute;
    right:20px;
    width:450px;
    height:600px;
}

.all_pStaffID{
  font-size:20px;
  position:absolute;
  left:130px;
  top:300px;
}

.all_pJob{
  font-size:20px;
  position:absolute;
  left:130px;
  top:330px;
}

.all_pName{
  font-size:20px;
  position:absolute;
  left:130px;
  top:360px;
}

.all_pPhone{
  font-size:20px;
  position:absolute;
  left:130px;
  top:390px;
}

.all_pIDNum{
  font-size:20px;
  position:absolute;
  left:130px;
  top:420px;
}

.all_pDate{
  font-size:20px;
  position:absolute;
  left:130px;
  top:450px;
}

.all_pNote{
  font-size:25px;
  position:absolute;
  width:160px;
  left:130px;
  top:510px;
  color:purple;
}
</style>