const login = require('../../service/login')
const register = require('../../service/register')

const appRouters = [
    {
        path: '/login',
        method: 'POST',
        service: login
    },
    {
        path: '/register',
        method: 'POST',
        service: register
    }
]

module.exports = appRouters