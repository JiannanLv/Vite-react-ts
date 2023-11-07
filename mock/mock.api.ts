// import path from 'path'
// import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api-dev/users',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: 'Li-HONGYAO',
          phone: '173 **** 8669',
          address: '成都市高新区雅和南四路216号',
        },
        msg: 'success',
      }
    },
  },
] as MockMethod[]
