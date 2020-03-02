# 项目简介

仿蘑菇街的电商项目，很好的vue上手项目

推荐刚学完vue全家桶的同学作为练习

真实后端接口，模拟实战开发

项目结构清晰，打造组件化开发思维

文末有我的开发全记录和采坑记录，也有b站老师的视频

不过不建议上来就看视频，可以先自己做，不懂的再看

## 项目预览

因为接口的原因大部分数据都不能正常显示，只能看到大体的布局

打开调试工具，会发现报错This request has been blocked; the content must be served over HTTPS.

这是因为我们使用的接口是http协议，而github page加载项目用的是https协议，它认为接口不安全

因为接口是coderwhy老师提供的，所以我也没办法改变

建议将项目clone下来后npm run serve进行预览

https://yuanfajun0912.github.io/mall/dist/

## 技术栈

vue全家桶（vue.js、vuex、vue-router）,axios,swiper,better-scroll,vue-lazyload

## src文件结构

- assets 静态资源

  - css 
    - base.css 基础样式
    - normalize.css 统一各种浏览器服务端的文件，github上可clone
  - img
    - cart 购物车页面图片src
    - common 公共组件图片
    - detail 详情页图片
    - home 主页图片
    - profile 我的页面图片
    - tabbar 底部tabbar(多个页面均出现) 图片

- common

  - utils 封装好的公共函数

- components 组件

  - common 与内容无关，可跨项目复用的公共组件
    - backtop 回到顶部
    - navbar 顶部的navbar
    - scroll 对better-scroll插件进行了封装
    - tabbar 底部的tabbar
    - toast 对toast弹窗进行了封装

  - content 与项目内容相关，只可在本次项目内复用的组件
    - goods 商品展示组件（图片、价格、收藏等等）
    - MainTabBar 商品分类控制组件

- network 网络请求相关的东西均在里面

- router vue-router相关

- store vue-x相关

- views 页面组件

  - category 分类页组件及其子组件
  - detail 详情页组件及其子组件
  - home 主页组件及其子组件
  - profile 我的页面组件及其子组件
  - shopcart 购物车页面组件及其子组件

## 项目下载

git clone

## 项目运行

npm run serve

## 项目调试

推荐在谷歌浏览器打开后用移动端模式调试

也可在手机上调试，手机上调试方法可自行google

## 做项目时自己总结的详细笔记和采坑日记

https://blog.csdn.net/qq_41706280/article/details/104175608

## 学习资料

https://www.bilibili.com/video/av89760569，看的这个视频，很好的vue入门视频。

接口也是录制这个视频的corderwhy老师提供的


## 后端接口来源

找https://www.bilibili.com/video/av89760569这个视频的up主，看他的简介


我的项目里面为了clone下来就能运行就没有改接口，但是最好还是自己找老师要，也能长期维护







