function send(reqBody, res) {
    console.log(reqBody)
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
    res.end('dfdfdfdfdfdfdfdfdf')
}

module.exports = send