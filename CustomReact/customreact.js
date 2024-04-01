function customRender(newElement, container){
    const newDomElement = document.createElement(newElement.type)
    newDomElement.innerHTML = newElement.text
    newDomElement.setAttribute('href', newElement.props.href)
    newDomElement.setAttribute('target', newElement.props.target)

    container.appendChild(newDomElement)
}

const newElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
        },
    text: 'Click me to visit google'
} //this is used by react under the hood generally. Just for knowledge we are learning this.

const mainContainer = document.querySelector('#root')

// to render

customRender(newElement, mainContainer)

