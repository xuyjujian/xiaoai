import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LayoutAll from '../views/Layout/LayoutAll.vue'
Vue.use(VueRouter)

const routes = [{
    path: '',
    name:'LayoutAll',
    component: LayoutAll,
    children: [
      {
        path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      },
      },
     {
      path: '/quit',
      name: 'Quit',
      component: ()=>import('../views/Quit/quit.vue'),
      meta: {
        title: '退出'
      },
     },
     {
      path: '/pictureupload',
      name: 'Pictureupload',
      component: ()=>import('../views/Pictureupload/Pictureupload.vue'),
      meta: {
        title: '图片上传'
      },
     },
     {
      path: '/label',
      name: 'Label',
      component: ()=>import('../views/Label/Label.vue'),
      meta: {
        title: '标签页'
      },
     },
     {
       path:'/paging',
       name:'Paging',
       component:()=>import('../views/paging/Paging.vue'),
       meta:{
         title:'导出excel'
       }
     },
     {
      path:'/release',
      name:'Release',
      component:()=>import('../views/Release/Release.vue'),
      meta:{
        title:'发布文章'
      }
     },
     {
      path:'/statistics',
      name:'Statistics',
      component:()=>import('../views/Statistics/Statistics.vue'),
      meta:{
        title:'统计'
      }
     },
     {
      path:'/published',
      name:'Published',
      component:()=>import('../views/Published/published.vue'),
      meta:{
        title:'已发布'
      }
     },
     {
      path:'/see',
      name:'See',
      component:()=>import('../views/Published/see.vue'),
      meta:{
        title:'查看'
      }
     },
     {
      path:'/edit',
      name:'Edit',
      component:()=>import('../views/Published/edit'),
      meta:{
        title:'编辑'
      }
     },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/Register.vue'),
    meta: {
      title: '注册'
    }
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log(to);
  let user = sessionStorage.getItem('user')
  if (to.path === '/login' || to.path === '/register') next()
  else user ? next() : (next('/login') || next('/register'))
})
export default router