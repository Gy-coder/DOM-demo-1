const div = dom.create(`<p><span>12</span></p>`)
console.log(div)

dom.after(test, div)




let nodes = dom.empty(window.em)
console.log(nodes)


dom.attr(test, 'title', 'baga')
const title = dom.attr(test, 'title')
console.log(`title:${title}`)


dom.text(test, 'Yoxi')


dom.style(test, { border: '1px solid black', color: 'red' })
const color = dom.style(test, 'color')
console.log(`color:${color}`)

const border = dom.style(test, 'border')
console.log(`border:${border}`)


dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'red'))

const fn = () => { alert(1) }
dom.on(test, 'click', fn)

dom.off(test, 'click', fn)


const divList = dom.find('#test')
console.log(divList)


console.log(dom.father(test))
console.log(dom.grandfather(test))
console.log(dom.children(test))





const s2 = dom.find('#s2')[0]
console.log(s2)
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))


const t = dom.find('#travel')[0]
console.log(t)
dom.each(dom.children(t), (n) => { dom.style(n, 'color', 'red') })
console.log(dom.index(t3))