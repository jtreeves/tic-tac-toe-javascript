import { createOptionButtons } from '../generators/createOptionButtons.js'

export function updateScreenWithOptions() {
    const body = document.querySelector('body')
    const p = document.querySelector('p')
    const button = document.querySelector('button')
    const article = createOptionButtons()

    p.textContent = 'Which option do you want to play?'
    button.remove()
    body.appendChild(article)
}