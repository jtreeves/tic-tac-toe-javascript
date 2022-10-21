export function clearBoard() {
    const cells = document.querySelectorAll('article')

    cells.forEach(cell => {
        cell.textContent = ''
    })
}
