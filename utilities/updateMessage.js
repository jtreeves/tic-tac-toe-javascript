import { getTurn } from '../accessors/getTurn.js'

export function updateMessage(tie, winner) {
    const turn = getTurn()
    const msg = document.querySelector('p')
    msg.innerText = `It's ${turn > 0 ? 'X' : 'O'}'s turn`
    if (tie) msg.innerText = `Tie game`
    if (winner) msg.innerText = `${turn > 0 ? 'X' : 'O'} wins`
}
