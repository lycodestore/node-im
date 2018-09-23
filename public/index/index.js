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
    console.log('login')
}
//注册
function register() {
    console.log('register')
}
window.onload = function() {
    //addChild('body', dialog('标题', '内容','dfdfd'))
    // var a = document.createElement('div')
    // a.innerHTML = '你好'
    // document.body.appendChild(a)
}