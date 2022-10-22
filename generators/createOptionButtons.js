import handleOptionX from '../handlers/handleOptionX.js'
import handleOptionO from '../handlers/handleOptionO.js'

function createOptionButtons() {
    const container = document.createElement('article')
    const optionX = document.createElement('button')
    const optionO = document.createElement('button')

    optionX.textContent = 'Play X'
    optionO.textContent = 'Play O'

    optionX.addEventListener('click', handleOptionX)
    optionO.addEventListener('click', handleOptionO)

    container.appendChild(optionX)
    container.appendChild(optionO)

    return container
}

export default createOptionButtons
