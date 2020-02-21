const data = [1, 2, 3]

const list = document.querySelector('ul')
const button = document.querySelector('button')

const render = () => {
    const html = data.map((num) => {
        return `<li>${num}</li>`
    }).join('')
    list.innerHtml = html
}

list.addEventListener('click', (ev) => {
    const target = ev.target
    if (target.tagName === 'LI') {
        const idx = [...list.children.indexOf(target)]
        data.splice(idx, 1)
        render()
    }
})

button.addEventListener('click', () => {
    const number = Math.ceil(Math.random() * 10)
    data.push(number)
    render()
})

            // const list = document.querySelectorAll('ul')
            // list.innerHtml = '<li>Foo</li>'

            // const divs = [...document.querySelectorAll('div')]
            // const hasFoo = divs.find(div => div.innerHTML === 'Foo')
            // console.log(hasFoo)