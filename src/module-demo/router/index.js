/*
 * @Author: sense 
 * @Description: xxx业务模块 
 * @Date: 2021-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2021-04-13 16:15:04
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-clients',
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-clients',
    meta: {
      title: '数据中心',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: _import('demo/pages/index'),
        name: 'demo',
        meta: {title: '车机模块', icon: 'component', noCache: true},
        children: [
          {
            path: 'index',
            component: _import('demo/pages/index'),
            name: 'demo',
            meta: {title: 'KPI', icon: 'component', noCache: true},
          }
        ]
      }
    ]
  }
]
