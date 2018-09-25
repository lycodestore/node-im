# node-im
使用node.js构建的web版聊天软件

## 项目文件目录
```
node-im ----  app.js   入口文件，项目启动文件
          |---  config.js 配置文件
          |-  database.js  创建数据库连接对象
          |-  mime.js   存储服务器返回客户端的mime类型合集
          |----  router   路由文件，拦截所有请求，对请求进行分发
          |   |-  index.js  根据请求的路径对请求进行分发，对于Content-Type为application/json
          |   |             类型的请求的req和res对象进行封装
          |
          |
          |
          |-  public  静态资源目录文件夹
          |-  service  业务逻辑处理文件夹
          |-  util  基础工具函数和基础类存放文件夹
          |-  package.json
          |-  package-lock.json
          
       

```
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
