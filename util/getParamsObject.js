function getParamsObject(req) {
    return new Promise((resolve, reject) => {
        let body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString()
            let result = JSON.parse(body)
            resolve(result)
        })
    })
}

module.exports = getParamsObject