function answer(answerBody, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
    res.end(JSON.stringify(answerBody))
}

module.exports = answer