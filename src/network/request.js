import axios from 'axios'

//封装多个实例，所以用函数最好,config是用这个封装好的axios时传入的配置
export function request(config) {
  const instance1 = axios.create({
    //baseURL: 'http://123.207.32.32:8000/api/wh',
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 8000
  })
  //请求拦截
  instance1.interceptors.request.use(config => {
    //请求成功的操作
    return config
  },err => {
    // 请求失败的操作
  })

  //响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  },err => {

  })
  //发送网络请求
  return instance1(config)
}