# react-router V6

在此版本中无法使用 history 库，同时不能优雅的在函数组件外进行路由的跳转

## 解决方案

通过`react-router`的`Router`组件，进行底层路由的配置

仅需要给Router组件传递`location`和`navigator`属性
- location：用来找到当前路由需要渲染的组件
- navigator：用来进行路由的跳转

## 示例
参考App.tsx

> 关键是路由跳转后，组件需要重新渲染，否则无法展示正确的路由
> 甚至你可以删除`react-router-dom`库，你会发现一切正常

## 封装
也可以手动封装一个`BrowserRouter`组件来使用

参考 "./src/components/BrowserRouter.tsx"