//切换tab
function changePage(pageIndex) {
    var main = getElementById('main')
    switch(pageIndex) {
        case 1:
            main.style.transform = 'translateX(0)'
            break
        case 2:
            main.style.transform = 'translateX(-33%)'
            break
        case 3:
            main.style.transform = 'translateX(-66%)'
            break
    }
}
//登录
function login() {
    let username = getElement('#login-username').value
    let password = getElement('#login-password').value
    if (username == '' || password == '') {
        addChild('body', dialog('提示', '用户名和密码不能为空'))
    } else {
        getElement('.submit-button').value = '登录中  ......'
        post('/login', {
            username: username,
            password: password
        }).then(res => {
            if (res.stateCode == 200) {
                console.log(res)
                console.log(window.history)
                console.log(window.location)
                console.log(window.location.href)
            } else {
                getElement('.submit-button').value = '登录'
                addChild('body', dialog('错误', res.stateMsg))
            }
        }).catch(err => {
            console.log(err)
            getElement('.submit-button').value = '登录'
        })
    }

}
//注册
function register() {
    console.log('register')
}
window.onload = function() {
    // post('/login', {username: 'ly', password: 'ly'}).then((res) => {console.log(res)})
    //addChild('body', dialog('标题', '内容','dfdfd'))
    // var a = document.createElement('div')
    // a.innerHTML = '你好'
    // document.body.appendChild(a)
}