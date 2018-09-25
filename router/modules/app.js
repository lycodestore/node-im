const login = require('../../service/login')


const appRouters = [
    {
        path: '/login',
        method: 'POST',
        service: login
    }
]

module.exports = appRouters