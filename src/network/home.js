import {request} from './request'
//获取主页轮播图数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
//获取主页商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    //传入url后面的query
    params: {
      type,
      page
    }
  })
}