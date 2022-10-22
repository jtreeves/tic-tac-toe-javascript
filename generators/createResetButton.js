import { handleReset } from '../handlers/handleReset.js'

export function createResetButton() {
    const button = document.createElement('button')
    button.textContent = 'Reset'
    button.addEventListener('click', handleReset)

    return button
}
