import { createTitle } from './createTitle'
import { createMessage } from './createMessage'
import { createBoard } from './createBoard'
import { createReset } from './createReset'

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
