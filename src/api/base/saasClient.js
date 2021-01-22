import {createAPI} from '@/utils/request'

export const list = data => createAPI('/company', 'get', data)
export const company = data => createAPI('/company/'+data.id, 'get', data)
export const shanchu = data => createAPI('/company/'+data.id, 'delete', data)
export const xiugai = data => createAPI('/company/'+data.id, 'put', data)
export const zengjia = data => createAPI('/company/', 'post', data)

