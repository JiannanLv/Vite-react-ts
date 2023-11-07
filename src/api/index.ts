import { request } from '../utils/request'

/**
 * 获取用户信息
 * @returns
 */
export const getUsersApi = <T>() => {
  return request.get<T>('/api-dev/users')
}
