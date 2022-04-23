import VueRouter from 'vue-router'
import Vue from 'vue'


import admin from '../views/admin'
import superAdmin from '../views/superdAmin'
import student from '../views/student'
import Login from '../views/Login/login'
import xtsy from '../views/xtsy/xtsy'
Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/xtsy',
      component: xtsy
    },
    {
      path: '/admin',
      component: admin
    },
    {
      path: '/superAdmin',
      component: superAdmin
    },
    {
      path: '/student',
      component: student
    }
  ]
})