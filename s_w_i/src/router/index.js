import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

// import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'
import EmployeeLoginPage from '@/components/DCH/Demo/EmployeeAccount/EmployeeLoginPage'

//进入员工操作页面
import StaffEnter from '@/components/DCH/Demo/Enter/StaffEnter'

// DCH
import Shuttering from '@/components/DCH/HCI/Shuttering.vue'
import FirstPage from '@/components/DCH/HCI/FirstPage_update.vue'
import Header_update1 from '@/components/CXD/Header_update1.vue'

import CloudFirst from '@/components/DCH/HCI/CloudTouring/CloudFirst.vue'
import GreatWall from '@/components/DCH/HCI/CloudTouring/GreatWall_Card.vue'
import test1 from '@/components/DCH/HCI/CloudTouring/test1.vue'

// CXD
import Header from '@/components/CXD/header.vue'


Vue.use(Router)

export default new Router({
  routes: [

    // DCH
    // 模板
    {
      path: '/Shuttering',
      name: 'Shuttering',
      component: Shuttering
    },
    // 正式
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/Header_update1',
      name: 'Header_update1',
      component: Header_update1
    },
    // 云旅游模块
    {
      path: '/CloudFirst',
      name: 'CloudFirst',
      component: CloudFirst
    },
    {
      path: '/GreatWall',
      name: 'GreatWall',
      component: GreatWall
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
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
