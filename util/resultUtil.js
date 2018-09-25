const Result = require('./result')

let resultUtil = {}

resultUtil.success = (content) => {
    let result = new Result(200, '成功', content)
    return result
}

resultUtil.paramsError = () => {
    let result = new Result(400, '请求参数错误', {errorMsg: '请求参数错误'})
    return result
}

resultUtil.serverError = () => {
    let result = new Result(500, '服务器错误', {errorMsg: '服务器错误'})
    return result
}

resultUtil.hasNotContent = () => {
    let result = new Result(216, '没有请求的相关内容', {errorMsg: '没有请求的相关内容'})
    return result
}

resultUtil.error = (stateCode, stateMsg) => {
    let content = {
        errorMsg: stateMsg
    }
    let result = new Result(stateCode, stateMsg, content)
    return result
}

module.exports = resultUtil