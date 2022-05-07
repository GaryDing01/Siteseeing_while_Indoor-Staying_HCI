import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

// import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'
import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'

//进入员工操作页面
import StaffEnter from '@/components/DCH/Demo/Enter/StaffEnter'

// DCH
import FirstPage from '@/components/DCH/HCI/FirstPage.vue'
import Header_DCH from '@/components/CXD/Header_DCH.vue'

// CXD
import Header from '@/components/CXD/header.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // DCH
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },

    {
      path: '/Header1',
      name: 'Header1',
      component: Header_DCH
    },

    {
      path: '/MainPage',
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
      path: '/Header',
      name: 'Header',
      component: Header
    }

  ]
})
