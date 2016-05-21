# antd-demo

## Environment

```
node >= 4

antD http://012x.ant.design/

G2 https://g2.alipay.com/
```

## Code Style

https://github.com/airbnb/javascript

## Develop

```
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm install
npm run dev
```

访问 http://127.0.0.1:8989

## Build

```

npm run build
```
##文件结构
/src

  --common 全局的样式

  --component 所有组件和页面(容器组件)

    ----complain 投诉功能

    ----event 事件功能

    ----redux 框架

      ------actions 触发器

      ------reducers 处理数据

      ------store 数据展示

      ----App.jsx 系统路由

  --entry

    ----index.js 系统入口
