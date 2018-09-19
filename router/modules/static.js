const path = require('path')
const fs = require('fs')
const notFoundPath = path.join(__dirname, './../../public/404/index.html')
const getMimiType = require('./../../mime.js')

const getStaticResource = (req, res) => {
    let url = './../../public' + req.url
    let resourcePath = path.join(__dirname, url)
    console.log(resourcePath)
    fs.stat(resourcePath, (err, stats) => {
        if (err) {
            let contentType = getMimiType('html') + ';charset=UTF-8'
            res.writeHead(404, { 'Content-Type': contentType })
            let stream = fs.createReadStream(notFoundPath)
            stream.pipe(res)
            stream.on('end', () => {
                res.end()
            })
        } else {
            if (stats.isFile()) {
                let contentType = getMimiType(resourcePath) + ';charset=UTF-8'
                res.writeHead(200, { 'Content-Type': contentType })
                let stream = fs.createReadStream(resourcePath)
                stream.pipe(res)
                stream.on('end', () => {
                    res.end()
                })
            } else {
                let contentType = getMimiType('html') + ';charset=UTF-8'
                res.writeHead(404, { 'Content-Type': contentType })
                let stream = fs.createReadStream(notFoundPath)
                stream.pipe(res)
                stream.on('end', () => {
                    res.end()
                })
            }
        }

    })
}

module.exports = getStaticResource