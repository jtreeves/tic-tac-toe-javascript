import { getTurn } from '../accessors/getTurn.js'

export function updateMessage(winner, tie) {
    const turn = getTurn()
    const msg = document.querySelector('p')
    msg.innerText = `It's ${turn > 0 ? 'X' : 'O'}'s turn`
    if (winner) msg.innerText = `${turn > 0 ? 'X' : 'O'} wins`
    if (tie) msg.innerText = `Tie game`
}
