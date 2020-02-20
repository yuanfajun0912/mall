import {request} from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

//右侧最顶部的动图链接部分
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
//右侧最底部的商品详情部分
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}