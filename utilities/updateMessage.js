export function updateMessage(turn, tie, winner) {
    const msg = document.querySelector('p')
    msg.innerText = `It's ${turn > 0 ? 'X' : 'O'}'s turn`
    if (tie) msg.innerText = `Tie game`
    if (winner) msg.innerText = `${turn > 0 ? 'X' : 'O'} wins`
}
