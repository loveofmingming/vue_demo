import Vue from 'vue'
import VueRouter from 'vue-router'

// import FooterGuide from '../components/FooterGuide/FooterGuide.vue'
import FirstSite from '../pages/FirstSite/FirstSite.vue'
import Look from '../pages/Look/Look.vue'
import Choose from '../pages/Choose/Choose.vue'
import Car from '../pages/Car/Car.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/first',
      component:FirstSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/look',
      component:Look,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/choose',
      component:Choose,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/car',
      component:Car,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/personal',
      component:Personal,
      meta:{
        showFooter:false
      }
    },
    {
      path:'/',
      redirect:'/first'
    }
  ]
})
