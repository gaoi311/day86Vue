import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from './../views/Home';
import About from './../views/About';
import User from '@/views/User';
export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      // redirect: '/home'
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      components: {
        default: Home,
        main:()=>import('@/views/Main'),
        sideBar:()=>import('@/views/SideBar'),
      },
      name: 'home'
    },
    {
      path: '/notes',
      name: 'notes',
      component: ()=>import('@/views/Notes')

    },
    {
      path: '/post',
      name: 'post',
      component: ()=>import('@/views/Post')
    },
    {
      path: '/aboout',
      component: About,
      name: 'about'
    },
    {
      path: '/aboout',
      component: Home,
      name: 'about'
    },
    {
      path: '/editor',
      name: 'editor',
      component:()=>import('@/views/Editor')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('@/views/Login')
    },
    {
      path: '/page',
      name: 'page',
      component: ()=>import('@/views/Page'),
      alias: '/aaa'
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      // props: true,
      props: (route)=>{
        return {
          id: route.params.id,
          title: route.query.title
        }
      },
      children:[
        {
          path: 'profile',
          component:()=>import('@/views/Profile')
        },
        {
          path: 'posts',
          component:()=>import('@/views/Posts')
        }
      ]
    },
    {
      path: '/user-*',
      component: ()=>import('@/views/User-admin')
    },
    {
      path: '*',
      component: ()=>import('@/views/404')
    }
  ]
})