const getParamsObject = require('../util/getParamsObject')
const answer = require('../util/answer')

function login(req, res) {
    getParamsObject(req).then(paramsObject => {
        answer(paramsObject, res)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = login