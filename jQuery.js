window.jQuery = function (selectorOrArrayOrTemplate) {
    let elements
    if (typeof selectorOrArrayOrTemplate === 'string') {

        elements = document.querySelectorAll(selectorOrArrayOrTemplate)

    } else if (selectorOrArrayOrTemplate instanceof Array) {
        elements = selectorOrArrayOrTemplate
    }

    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            return jQuery(array)
        }
    }
}
window.$ = window.jQuery