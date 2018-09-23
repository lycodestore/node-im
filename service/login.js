const getParamsObject = require('../util/getParamsObject')
const answer = require('../util/answer')

function login(req, res) {
    getParamsObject(req).then(paramsObject => {
        if (paramsObject.username == 'ly' && paramsObject.password == 'ly') {
            answer(paramsObject, res)
        } else {
            answer({result:'错了'}, res)
        }
    }).catch(err => {
        console.log(err)
    })
}

module.exports = login