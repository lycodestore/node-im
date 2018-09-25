const resultUtil = require('../util/resultUtil')
const crypto = require('crypto')
const mysql = require('../database')

function login(req, res) {
    let username = req.body.username
    let password = req.body.password
    let hash = crypto.createHash('md5')
    hash.update(password)
    password = hash.digest('hex')
    let sql = `select * from users where username=${mysql.escape(username)} and password=${mysql.escape(password)}`
    mysql.query(sql, (err, rows, fields) => {
        if (err) {
            res.send(resultUtil.serverError())
            return
        }
        let user = rows[0]
        if (!user) {
            res.send(resultUtil.error(401, '用户名或密码错误！'))
            return
        }
        let content = {token: 'xxx'}
        res.send(resultUtil.success(content))
    })
}

module.exports = login