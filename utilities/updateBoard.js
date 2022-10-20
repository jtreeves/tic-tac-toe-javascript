export function updateBoard(board) {
    const squares = document.querySelectorAll('article')

    for (let index in board) {
        if (board[index] === 1) squares[index].innerText = 'X'
        if (board[index] === -1) squares[index].innerText = 'O'
        if (!board[index]) squares[index].innerText = ''
    }
}
