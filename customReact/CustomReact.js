function customRender(reactElement, container) {

    // This is basic and lenthy process not best practice.

    /*  const DomElement = document.createElement(reactElement.type)
     DomElement.innerHTML = reactElement.children
     DomElement.setAttribute('href', reactElement.props.href)
     DomElement.setAttribute('target', reactElement.props.target)
 
     container.appendChild(DomElement) */

    const DomElement = document.createElement(reactElement.type)
    DomElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        DomElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(DomElement)


}
const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainConatiner = document.querySelector('#root')

customRender(reactElement, mainConatiner)
