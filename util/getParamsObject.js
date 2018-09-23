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
            } catch(ex) {
                reject(ex)
            }
            
        })
    })
}

module.exports = getParamsObject