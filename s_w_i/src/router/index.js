import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

// import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'
import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'

//进入员工操作页面
import StaffEnter from '@/components/DCH/Demo/Enter/StaffEnter'

//个人信息
import EPersonalInfo from '@/components/DCH/Demo/People/EPersonalInfo'
import EChangePwd from '@/components/DCH/Demo/People/EChangePwd'

//员工（新版本）
import StaffManagement from '@/components/DCH/Demo/People_new/StaffManagement'
import SidePer from '@/components/DCH/Demo/People_new/SidePer'
import AllManagement from '@/components/DCH/Demo/People_new/AllManagement'
import SalaryManagement from '@/components/DCH/Demo/People_new/SalaryManagement'

//CXD test
import Test from '@/components/CXD/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },

    {
      path: '/EmployeeAccount/EmployeeLoginPage',
      name: 'EmployeeLoginPage',
      component: EmployeeLoginPage
    },

    // // 客户
    // {
    //   path: '/Reservation/CustomPage',
    //   name: 'CustomPage',
    //   component: CustomPage,
    //   children:[
    //     {
    //       path:'/Reservation/ReservationPage',
    //       name: 'ReservationPage',
    //       component: ReservationPage
    //     },
    //   ]
    // },

    // 员工
    {
      path: '/StaffEnter',
      name:'StaffEnter',
      component: StaffEnter,
      children:[
        //个人信息
        {
          path:'/EPersonalInfo',
          component:EPersonalInfo
        },
        {
          path:'/EChangePwd',
          component:EChangePwd
        },
        
        //员工（新版本）
        {
          path:'/StaffManagement',
          component:StaffManagement
        },
        {
          path:'/SidePer',
          component:SidePer
        },
        {
          path:'/AllManagement',
          component:AllManagement
        },
        {
          path:'/SalaryManagement',
          component:SalaryManagement
        },

        
      ]
    },

    //测试
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },

  ]
})
