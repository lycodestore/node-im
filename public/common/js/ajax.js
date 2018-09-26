function post(url, params) {
    let xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(params))
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(new Error('请求发生错误'))
                }
            }
        }
    })
}
