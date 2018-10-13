//切换tab
function changeTab(pageIndex) {
    var main = getElement('.content-wrapper')
    switch (pageIndex) {
        case 1:
            main.style.transform = 'translateX(0)'
            break
        case 2:
            main.style.transform = 'translateX(-25%)'
            break
        case 3:
            main.style.transform = 'translateX(-50%)'
            break
    }
}