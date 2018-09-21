function dialog(title, content, onConfirm) {
    let dialogFrame = `
    <div class="dialog">
    <div class="frame">
    <div class="title">
    ${title}
    </div>
    <div class="content">
    ${content}
    </div>
    <div class="bottom">
    <div class="cancel" onclick="cancel()">取消</div>
    <div class="confirm" onclick=${onConfirm}>确定</div>
    </div>
    </div>`

    return dialogFrame
}

function cancel() {
    setTimeout(function () {
        let index = document.body.children.length - 1
        document.body.removeChild(document.body.children[index])
    }, 300)
    getElement('.dialog').style.animation = 'notShow 0.3s ease-in-out 0.2s backwards'
}