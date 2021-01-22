/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
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
      title: '企业管理',
      icon: 'component'
    },
    children: [
      {
        path: 'client',
        component: _import('saas-client/pages/index'),
        name: 'saas-clients-index',
        meta: {title: '企业管理', icon: 'component', noCache: true}
      },
      {
        path: 'xinzeng',
        component: _import('saas-client/pages/xinzeng'),
        name: 'saas-clients-xinzeng',
        meta: {title: '信息录入', icon: 'component', noCache: true}
      },
      {
        path: 'detailed/:id',
        component: _import('saas-client/pages/detailed'),
        name: 'saas-clients-detailed',
        meta: {title: '企业管理详情', icon: 'component', noCache: true}
      },
      {
        path: 'update/:id',
        component: _import('saas-client/pages/update'),
        name: 'saas-clients-update',
        meta: {title: '企业管理修改', icon: 'component', noCache: true}
      }
    ]
    
    
  }

]


