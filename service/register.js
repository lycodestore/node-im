const resultUtil = require('../util/resultUtil')
const crypto = require('crypto')
const mysql = require('../database')

function register(req, res) {
    let username = req.body.username
    let password = req.body.password
    let hash = crypto.createHash('md5')
    hash.update(password)
    password = hash.digest('hex')
    let ifExistSql = `select * from users where username=${mysql.escape(username)}`
    mysql.query(ifExistSql, (err, rows, fields) => {
        if (err) {
            console.log(err)
            res.send(resultUtil.serverError())
            return
        }
        let user = rows[0]
        if (user) {
            res.send(resultUtil.error(411, '用户名已存在！'))
            return
        } else {
            let createSql = `insert into users(userName,password) values(${mysql.escape(username)}, ${mysql.escape(password)})`
            mysql.query(createSql, (err, rows, fields) => {
                if (err) {
                    res.send(resultUtil.serverError())
                    return
                } else {
                    res.send(resultUtil.success())
                    return
                }
            })
        }
    })
}

module.exports = register