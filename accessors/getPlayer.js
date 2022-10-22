import getValue from './getValue.js'

function getPlayer() {
    const stringValue = getValue('player')
    const numberValue = Number(stringValue)

    return numberValue
}

export default getPlayer
