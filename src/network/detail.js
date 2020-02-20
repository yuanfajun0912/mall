import {request} from './request'

//详情页的所有信息
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
//推荐部分的所有信息
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}


//商品基本信息
export class Goods {
  //需要传入的参数
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title //标题
    this.desc = itemInfo.desc //和标题差不多
    this.newPrice = itemInfo.price  //新价格
    this.oldPrice = itemInfo.oldPrice //被划去的老价格
    this.discount = itemInfo.discountDesc //打折信息：今日特价、7折什么的
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns  //销量、收藏在里面
    this.services = services  //剩下的4个都在里面
    this.realPrice = itemInfo.lowNowPrice //真实价格，没有￥符号
  }
}

//商家基本信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;  //商家图标
    this.name = shopInfo.name;  //商家名字
    this.fans = shopInfo.cFans; //商家
    this.sells = shopInfo.cSells; //总销量
    this.score = shopInfo.score;  //数组：描述相符、价格合理什么的
    this.goodsCount = shopInfo.cGoods  //全部宝贝
  }
}

//商品配置信息
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;  //厚薄到潮流
    this.sizes = rule.tables; //尺码到衣长
  }
}
