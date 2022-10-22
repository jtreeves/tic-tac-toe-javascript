import getValue from './getValue.js'

function getTurn() {
    const singleString = getValue('turn')
    const singleNumber = Number(singleString)

    return singleNumber
}

export default getTurn
