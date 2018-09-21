function getElementByClassName(name, index) {
    var domObjects = document.getElementsByClassName(name)
    if (index) {
        return domObjects[index - 1]
    } else {
        return domObjects[0]
    }
}

function getElementById(id) {
    return document.getElementById(id)
}

function getElement(selector, index) {
    if (selector[0] == '.') {
        if (index) {
            return getElementByClassName(selector.substring(1, selector.length), index)
        }
        return getElementByClassName(selector.substring(1, selector.length))
    } else if (selector[0] == '#') {
        return getElementById(selector.substring(1, selector.length))
    }
}

function addClassName(selector, newClass) {
    var domObject
    if (selector[0] == '.') {
        var className = selector.substring(1, selector.length)
        domObject = getElementByClassName(className)
    } else if (selector[0] == '#'){
        var Id = selector.substring(1, selector.length)
        domObject = document.getElementById(Id)
    } else {
        return
    }
    if (Array.isArray(newClass)) {
        newClass.map(function(ele) {
            domObject.classList.add(ele)
        })
    } else {
        domObject.classList.add(newClass)
    }
}

function removeClassName(selector, oldClass) {
    var domObject
    if (selector[0] == '.') {
        var className = selector.substring(1, selector.length)
        domObject = getElementByClassName(className)
    } else if (selector[0] == '#'){
        var Id = selector.substring(1, selector.length)
        domObject = document.getElementById(Id)
    } else {
        return
    }
    if (domObject.className.indexOf(oldClass) < 0) {
        return
    } else {
        if (Array.isArray(oldClass)) {
            oldClass.map(function(ele) {
                domObject.classList.remove(ele)
            })
        } else {
            domObject.classList.remove(oldClass)
        }
    }
    
}

function addChild(selector, domStr) {
    var parent
    if (selector == 'body') {
        parent = document.body
    } else {
        parent = getElement(selector)
    }
    var child = document.createElement('div')
    child.innerHTML = domStr
    parent.appendChild(child)
}

function removeChild(selector, child) {
    var parent
    if (selector == 'body') {
        parent = document.body
    } else {
        parent = getElement(selector)
    }
    var child = getElement(child)
    parent.removeChild(child)
}