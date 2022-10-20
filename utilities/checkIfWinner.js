export function checkIfWinner(board) {
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.some(combo => Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3 )
}
