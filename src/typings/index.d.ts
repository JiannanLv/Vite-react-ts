import { AxiosRequestConfig } from 'axios'
export {}

// => 全局类型声明
declare global {
  interface Window {
    _hmt: any
    wx: any
    AlipayJSBridge: any
  }
  namespace GD {
    interface BaseResponse<T = any> {
      code: number
      data: T
      msg: string
      page: {
        pageNo: number
        pageSize: number
        pages: number
        total: number
      }
    }
  }
}
declare module 'axios' {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>
    request<T = any>(config: AxiosRequestConfig): Promise<T>
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
  }
}
