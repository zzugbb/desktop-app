# desktop-app

桌面程序demo，Electron + React

## 具体使用

1. git clone https://github.com/zzugbb/desktop-app.git
2. cd desktop-app
3. npm install

### 本地开发

启动两个终端，热加载
需要将 `package.json` 中的 `DEV` 值改为 `true`

```js
yarn start   //启动react工程
yarn estart  //启动桌面
```

### 生产

需要将 `package.json` 中的 `DEV` 值改为 `false`

```js
yarn build  
yarn estart
```

## 参考资料

### Electron 相关

* [Electron官网](https://electronjs.org/)
* [Electron@w3c](https://www.w3cschool.cn/electronmanual/wcx31ql6.html)
* [使用Electron+React构建桌面应用@简书](https://www.jianshu.com/p/2057835c18e2)
* [Electron结合React开发桌面应用](https://blog.csdn.net/yaodong379/article/details/78396945)
* [Electron + React DeskTop开发环境搭建@解释homepage](https://www.jianshu.com/p/785ed0ac08ee)

### 路由相关

* [React-router4简约教程](http://react-china.org/t/react-router4/15843)
* [React-router 中的BrowserRouter 和 HashRouter](https://blog.csdn.net/aaa333qwe/article/details/79557044)
* [react本地执行npm run build打包之后，本地打开index.html文件，出现空白页面](https://segmentfault.com/q/1010000010770354)

### 配置文件

* [npm package.json属性详解](https://www.cnblogs.com/tzyy/p/5193811.html#_h1_5)
