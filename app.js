const http = require('http')
const config = require('./config')
const router = require('./router')

const server = http.createServer((req, res) => {
    //拦截所有请求，对请求进行分发和封装
    router(req, res)
})

server.listen(config.server.port, config.server.hostname, () => {
    console.log(`listening......${config.server.hostname}:${config.server.port}`)
})

// const server = http.createServer((req, res) => {
//     let body = []
//     req.on('data', (chunk) => {
//         body.push(chunk)
//     }).on('end', () => {
//         body = Buffer.concat(body).toString()
//         console.log(typeof body)
//         let a = {
//             b: 8080909
//         }
//         res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
//         res.end(JSON.stringify(a))
//     })
// })

// server.listen(config.port, config.hostname, () => {
//     console.log(`listening......${config.hostname}:${config.port}`)
// })