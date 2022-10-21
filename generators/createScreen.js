import { createTitle } from './createTitle.js'
import { createMessage } from './createMessage.js'
import { createBoard } from './createBoard.js'
import { createReset } from './createReset.js'

export function createScreen() {
    const body = document.querySelector('body')
    const h1 = createTitle()
    const p = createMessage()
    const section = createBoard()
    const button = createReset()

    body.appendChild(h1)
    body.appendChild(p)
    body.appendChild(section)
    body.appendChild(button)
}
