# node-im
使用node.js构建的web版聊天软件
## 项目简介
```
本项目是一个web版的即时通讯软件，服务端使用node.js开发，基于node.js的http模块进行web服务开发，
不使用express和koa等框架，前端使用原生的html、css和JavaScript开发，项目中的js代码使用es6语法
。
```

## 项目文件目录
```
node-im ----  app.js   入口文件，项目启动文件
          |---  config.js 配置文件
          |-  database.js  创建数据库连接对象
          |-  mime.js   存储服务器返回客户端的mime类型合集
          |   路由文件，拦截所有请求，对请求进行分发         
          |-- router --|-  index.js  根据请求的路径对请求进行分发，对于Content-Type为application/json
          |            |   类型的请求的req和res对象进行封装
          |              
          |
          |
          |
          |-  public  静态资源目录文件夹
          |-  service  业务逻辑处理文件夹
          |-  util  基础工具函数和基础类存放文件夹
          |-  package.json
          |-  package-lock.json
```
## 项目特点介绍
### 1、对REST API 的封装
```
本项目的前后端交互使用json数据进行通信，同时web服务器也会提供静态文件托管的服务，在接收到来自客户端
的请求时，编写拦截器，拦截所有来自客户端的请求，根据请求的路由和请求的方式等进行判断，在路由配置文件
中查找对应的处理方法，若请求不在restful api接口的列表中，则作为对静态资源的请求来处理。若路由配置中
有相应的信息，则对请求的request对象和response对象进行封装，通过rep.body可以获取请求的参数，通过
res.send可以向客户端返回json数据。这部分的逻辑写在router文件下的index.js文件中。
```
### 2、统一响应格式
```
在util文件夹下的result.js中编写了以个result类，所有restful api返回的json均为result类的实例，
resultUtil.js文件中编写一些函数用来返回使用频次较高的result对象实例。
```
### 3、使用promise封装使用XMLHttpRequest对象进行前后端通信的方法
```
相应js文件: /public/common/js/ajax.js
```
### 4、封装常用dom操作方法
```
相应js文件: /public/common/js/dom.js
```
## 项目所使用的node版本和node插件名称
##### node.js  v8.11.2
##### crypto
##### mysql

## 状态码
<table>
    <tr>
        <td>状态码</td>
        <td>状态信息</td>
    </tr>
    <tr>
        <td>200</td>
        <td>成功</td>
    </tr>
    <tr>
        <td>400</td>
        <td>请求体格式错误</td>
    </tr>
    <tr>
        <td>500</td>
        <td>服务器错误</td>
    </tr>
    <tr>
        <td>216</td>
        <td>没有相关内容</td>
    </tr>
    <tr>
        <td>401</td>
        <td>未成功登录</td>
    </tr>
</table>
