import createTitle from './createTitle.js'
import createMessage from './createMessage.js'
import createStartButton from './createStartButton.js'

function createInitialScreen() {
    const body = document.querySelector('body')
    const h1 = createTitle()
    const p = createMessage()
    const button = createStartButton()

    body.appendChild(h1)
    body.appendChild(p)
    body.appendChild(button)
}

export default createInitialScreen
