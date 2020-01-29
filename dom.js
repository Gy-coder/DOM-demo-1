window.dom = {
    create(string) {  //创建节点
        let container = document.createElement('template')
        container.innerHTML = string.trim()
        console.log(container)
        return container.content.firstChild
    },
    after(node, node2) {    //新增弟弟
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2) {  //新增哥哥
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {  //新增儿子
        parent.appendChild(node)
    },
    warp(node, parent) {      //新增爸爸
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {    //重载
        if (arguments.length === 3) {
            return node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        } else {
            throw Error
        }
    },
    text(node, string) {     //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent = string
            }
        } else {
            return Error
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //    dom.style(test,'border',’1px solid red‘)
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(test,'border')
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                // dom.style(test, { border: '1px solid black', color: 'red' })
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    father(node) {
        return node.parentElement
    },
    grandfather(node) {
        return node.parentElement.parentElement
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        let x = Array.from(node.parentElement.children)
        let result = x.filter(n => n !== node)
        return result
    },
    next(node) {
        let x = node.nextSibling
        while (x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn(nodeList[i])
        }
    },
    index(node) {
        let i = 0
        let list = dom.children(node.parentElement)
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}




