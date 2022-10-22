import { updateScreenWithOptions } from '../mutators/updateScreenWithOptions.js'

export function createStartButton() {
    const button = document.createElement('button')
    button.textContent = 'Start'
    button.addEventListener('click', updateScreenWithOptions)

    return button
}
