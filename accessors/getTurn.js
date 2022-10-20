export function getTurn() {
    const singleString = localStorage.getItem('turn')
    const singleNumber = Number(singleString)

    return singleNumber
}
