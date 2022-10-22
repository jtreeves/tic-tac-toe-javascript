function findCellByIndex(index) {
    const id = 'square-' + index
    const cell = document.getElementById(id)

    return cell
}

export default findCellByIndex
