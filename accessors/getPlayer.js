import getValue from './getValue.js'

function getPlayer() {
    const singleString = getValue('player')
    const singleNumber = Number(singleString)

    return singleNumber
}

export default getPlayer
