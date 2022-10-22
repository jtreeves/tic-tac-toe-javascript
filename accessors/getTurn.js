import getValue from './getValue.js'

function getTurn() {
    const stringValue = getValue('turn')
    const numberValue = Number(stringValue)

    return numberValue
}

export default getTurn
