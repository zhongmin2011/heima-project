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
      title: 'udf1',
      icon: 'component'
    },
    children: [
      {
        path: 'client',
        component: _import('saas-client/pages/udf'),
        name: 'saas-clients-index',
        meta: {title: 'udf2', icon: 'component', noCache: true}
      },
      {
        path: 'xinzeng',
        component: _import('saas-client/pages/udf'),
        name: 'saas-clients-xinzeng',
        meta: {title: 'udf3', icon: 'component', noCache: true}
      },
      {
        path: 'detailed/:id',
        component: _import('saas-client/pages/udf'),
        name: 'saas-clients-detailed',
        meta: {title: 'udf4', icon: 'component', noCache: true}
      },
      {
        path: 'update/:id',
        component: _import('saas-client/pages/update'),
        name: 'saas-clients-update',
        meta: {title: 'udf5', icon: 'component', noCache: true}
      }
    ]
    
    
  }

]


