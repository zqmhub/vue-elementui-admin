import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Console from './views/Console.vue'
import Users from './views/Users.vue'
import Articles from './views/Articles.vue'
import Echarts from './views/Echarts.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/console',
          name: 'console',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: '/Layout',
          name: 'Layout',
          component: () => import("./views/basic/Layout"),
        },
        {
          path: '/Container',
          name: 'Container',
          component: () => import("./views/basic/Container"),
        },
        {
          path: '/Button',
          name: 'Button',
          component: () => import("./views/basic/Button"),
        },
        {
          path: '/Link',
          name: 'Link',
          component: () => import("./views/basic/Link"),
        },
        // 表单
        {
          path: '/Radio',
          name: 'Radio',
          component: () => import("./views/form/Radio"),
        },
        {
          path: '/Checkbox',
          name: 'Checkbox',
          component: () => import("./views/form/Checkbox"),
        },
        {
          path: '/Input',
          name: 'Input',
          component: () => import("./views/form/Input"),
        },
        {
          path: '/InputNumber',
          name: 'InputNumber',
          component: () => import("./views/form/InputNumber"),
        },
        {
          path: '/Select',
          name: 'Select',
          component: () => import("./views/form/Select"),
        },
        {
          path: '/Cascader',
          name: 'Cascader',
          component: () => import("./views/form/Cascader"),
        },
        {
          path: '/Switch',
          name: 'Switch',
          component: () => import("./views/form/Switch"),
        },
        {
          path: '/Slider',
          name: 'Slider',
          component: () => import("./views/form/Slider"),
        },
        {
          path: '/TimePicker',
          name: 'TimePicker',
          component: () => import("./views/form/TimePicker"),
        },
        {
          path: '/DatePicker',
          name: 'DatePicker',
          component: () => import("./views/form/DatePicker"),
        },
        {
          path: '/DateTimePicker',
          name: 'DateTimePicker',
          component: () => import("./views/form/DateTimePicker"),
        },
        {
          path: '/Upload',
          name: 'Upload',
          component: () => import("./views/form/Upload"),
        },
        {
          path: '/Rate',
          name: 'Rate',
          component: () => import("./views/form/Rate"),
        },
        {
          path: '/Form',
          name: 'Form',
          component: () => import("./views/form/Form"),
        },

        // 数据
        {
          path: '/Table',
          name: 'Table',
          component: () => import("./views/data/Table"),
        },
        {
          path: '/Progress',
          name: 'Progress',
          component: () => import("./views/data/Progress"),
        },
        {
          path: '/Tree',
          name: 'Tree',
          component: () => import("./views/data/Tree"),
        },
        {
          path: '/Pagination',
          name: 'Pagination',
          component: () => import("./views/data/Pagination"),
        },
        {
          path: '/Badge',
          name: 'Badge',
          component: () => import("./views/data/Badge"),
        },

        // 弹框类
        {
          path: '/Alert',
          name: 'Alert',
          component: () => import("./views/notice/Alert"),
        },
        {
          path: '/Message',
          name: 'Message',
          component: () => import("./views/notice/Message"),
        },
        {
          path: '/MessageBox',
          name: 'MessageBox',
          component: () => import("./views/notice/MessageBox"),
        },
        {
          path: '/Notification',
          name: 'Notification',
          component: () => import("./views/notice/Notification"),
        },
        // 导航
        {
          path: '/NavMenu',
          name: 'NavMenu',
          component: () => import("./views/navigation/NavMenu"),
        },
        {
          path: '/Tabs',
          name: 'Tabs',
          component: () => import("./views/navigation/Tabs"),
        },
        {
          path: '/Dropdown',
          name: 'Dropdown',
          component: () => import("./views/navigation/Dropdown"),
        },
        {
          path: '/Steps',
          name: 'Steps',
          component: () => import("./views/navigation/Steps"),
        },
        {
          path: '/Dialog',
          name: 'Dialog',
          component: () => import("./views/other/Dialog"),
        },
        {
          path: '/Tooltip',
          name: 'Tooltip',
          component: () => import("./views/other/Tooltip"),
        },
        {
          path: '/Popover',
          name: 'Popover',
          component: () => import("./views/other/Popover"),
        },
        {
          path: '/Card',
          name: 'Card',
          component: () => import("./views/other/Card"),
        },
        {
          path: '/Carousel',
          name: 'Carousel',
          component: () => import("./views/other/Carousel"),
        },
        {
          path: '/Timeline',
          name: 'Timeline',
          component: () => import("./views/other/Timeline"),
        },
        {
          path: '/Calendar',
          name: 'Calendar',
          component: () => import("./views/other/Calendar"),
        },
        {
          path: '/Drawer',
          name: 'Drawer',
          component: () => import("./views/other/Drawer"),
        },

        {
          path: '/404',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = '/login'
  let url, user

  url = to.path
  user = sessionStorage.getItem('user')

  if (url === LOGINURL) {
    sessionStorage.removeItem('user')
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({ path: LOGINURL })
  } else {
    next()
  }
})

export default router
