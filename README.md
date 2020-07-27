## 微前端模板（基于qiankun）

- 尝试qiankun，跟single-spa的一些区别

### 实战中的坑
- 乾坤采用fatch请求包的资源所以子项目要允许所有资源进行跨域
- 子项目使用路由的时候要记得配置默认路由，否则，加载的时候会找基座的路由进行加载
- 子项目需要根据实际情况进行额外的webpack重写。如react可以使用react-app-rewired包来解决webpack的自定义配置问题。
