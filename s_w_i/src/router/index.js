import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

// DCH
import Shuttering from '@/components/DCH/HCI/Shuttering.vue'
import FirstPage from '@/components/DCH/HCI/FirstPage_update.vue'
import Header_update1 from '@/components/CXD/Header_update1.vue'

import CloudFirst from '@/components/DCH/HCI/CloudTouring/CloudFirst.vue'
import GreatWall from '@/components/DCH/HCI/CloudTouring/GreatWall_Card.vue'
import test1 from '@/components/DCH/HCI/CloudTouring/test1.vue'

//CXD
import Share from '@/components/CXD/Share'
import Detail from '@/components/CXD/Detail'
import MyShare from '@/components/CXD/MyShare'

//LBH
import Speech from '@/components/LBH/SpeechPage.vue'

//Mxy
import Login from '@/components/MXY/Login'
import Register from '@/components/MXY/Register'
import PersonalCenter from '@/components/MXY/PersonalCenter'

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
    // {
    //   path: '/',
    //   name: 'FirstPage',
    //   component: FirstPage
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
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


    //CXD
    {
      path: '/Share',
      name: 'Share',
      component: Share
    },
    {
      path: '/Detail/:noteIndex',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/MyShare',
      name: 'MyShare',
      component: MyShare
    },

    //LBH
    {
      path: '/speech',
      name: 'Speech',
      component: Speech
    },
    //MXY
    {
        path: '/Login',
        name: 'Login',
        component: Login
      },
  
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
  
      {
        path: '/PersonalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter
      },
  ]
})
