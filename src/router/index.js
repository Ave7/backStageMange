import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 素材管理

  {path: '', component: () => import('../views/login/index')},


  {
    path: '',
    component: Layout,
    redirect: '/material',
    meta: {
      title: '消息',
    },
  },
  {
    path: '/material',
    component: Layout,
    redirect: '/material/notice',
    meta: {
      title: '消息',
    },
    children: [
      {
        path: 'notice',
        component: () => import('@/views/material/notice'),
        meta: {
          title: '公告',
        }
      },
      {
        path: 'mail',
        component: () => import('@/views/material/mail'),
        meta: {
          title: '邮件',
        }
      },
      {
        path: 'official',
        component: () => import('@/views/material/official'),
        meta: {
          title: '公文系统',
        }
      },
      {
        path: 'budget',
        component: () => import('@/views/material/budget'),
        meta: {
          title: '全面预算',
        }
      },
      {
        path: 'epc',
        component: () => import('@/views/material/epc'),
        meta: {
          title: 'EPC协同',
        }
      },
      {
        path: 'law',
        component: () => import('@/views/material/law'),
        meta: {
          title: '法律系统',
        }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting',
    meta: {
      title: '设置',
    },
    children: [
      {
        path: '/setting',
        component: () => import('@/views/setting/setting'),
        meta: {
          title: '命名1',
        }
      }
    ]
  },


  //测试页面
  {
    path: '/',
    children: [{
      path: 'test',
      name: 'test',
      component: () => import('@/views/login/index'),
      meta: {
        title: '测试',
      }
    }]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
