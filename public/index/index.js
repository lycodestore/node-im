//切换tab
function changePage(pageIndex) {
    var main = getElementById('main')
    switch (pageIndex) {
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
                window.location.pathname = '/main/main.html'
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
    let username = getElement('#register-username').value
    let password = getElement('#register-password').value
    let confirm = getElement('#register-password-confirm').value
    if (username == '' || password == '' || confirm == '') {
        addChild('body', dialog('提示', '请完整填写注册信息'))
    } else if (password != confirm) {
        addChild('body', dialog('提示', '两次输入密码不一致'))
    } else {
        getElement('.submit-button').value = '注册中  ......'
        post('/register', {
            username: username,
            password: password
        }).then(res => {
            getElement('.submit-button').value = '注册'
            if (res.stateCode == 200) {
                console.log(res)
                addChild('body', dialog('提示', '恭喜你注册成功！'))
                changePage(2)
                getElement('#register-username').value = ''
                getElement('#register-password').value = '' 
                getElement('#register-password-confirm').value = ''
            } else {
                addChild('body', dialog('提示', res.stateMsg))
            }
        }).catch(err => {
            getElement('.submit-button').value = '注册'
            addChild('body', dialog('提示', '真抱歉，出了点问题！'))
        })
    }
}
