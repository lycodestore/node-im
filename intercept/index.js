const router = require('../router')

function getParamsObject(req) {
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
}

function intercept(req, res) {
    getParamsObject(req).then(body => {
        req.body = body
        router(req, res)
    })
    res.send = (result) => {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
        res.end(JSON.stringify(result))
    }
}

module.exports = intercept