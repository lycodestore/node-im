const http = require('http')
const config = require('./config')
const router = require('./router/index')


const server = http.createServer((req, res) => {
    router.getStaticResource(req, res)
})

server.listen(config.port, config.hostname, () => {
    console.log(`listening......${config.hostname}:${config.port}`)
})