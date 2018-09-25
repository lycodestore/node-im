const getStaticResource = require('./modules/static')
const appRouter = require('./modules/app')
const resultUtil = require('../util/resultUtil')

//获取请求的参数对象
function getParamsObject(req, res) {
    if (req.method == 'POST') {
        return new Promise((resolve, reject) => {
            let body = []
            req.on('data', (chunk) => {
                body.push(chunk)
            }).on('end', () => {
                body = Buffer.concat(body).toString()
                try {
                    let result = JSON.parse(body)
                    resolve(result)
                } catch (ex) {
                    reject(ex)
                }
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            let body = {}
            try {
                let params = req.url.split('?')[1]
                if (params) {
                    let paramsArr = params.split('&')
                    paramsArr.forEach((ele) => {
                        let key = ele.split('=')[0]
                        let value = ele.split('=')[1]
                        body.key = value
                    })
                    req.url = req.url.split('?')[0]
                }
                resolve(body)
            } catch (err) {
                reject(err)
            }
        })
    }
}

//封装req和res对象
function dealRequest(req, res) {
    res.send = (result) => {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
        res.end(JSON.stringify(result))
    }
    getParamsObject(req).then(body => {
        req.body = body
        let service = inRouterMap(req)
        service(req, res)
    }).catch(err => {
        let result = resultUtil.paramsError()
        res.send(result)
    })
}

//判断请求是否在Restful接口的路由表里
function inRouterMap(req) {
    let url = req.url.split('?')[0]
    let method = req.method
    for (let i = 0; i < appRouter.length; i++) {
        if (appRouter[i].path == url && appRouter[i].method == method) {
            return appRouter[i].service
        }
    }
    return false
}

//拦截所有请求处理后进行分发
function router(req, res) {
    //如果请求路径在restful api的路由列表里，需要对请求进行封装
    if (inRouterMap(req)) {
        dealRequest(req, res)
    } else {
        getStaticResource(req, res)
    }
}

module.exports = router