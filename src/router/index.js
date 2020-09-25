import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */

Vue.use(Router)
//组件懒加载
const Home=()=>import('../views/home.vue')
const Classify=()=>import('../views/classify.vue')
const Shop=()=>import('../views/shop.vue')
const Me=()=>import('../views/me.vue')
const routes=[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/me',
      component:Me
    }
]
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const  router= new Router({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
   next()
   //console.log("111")
})
export default router
