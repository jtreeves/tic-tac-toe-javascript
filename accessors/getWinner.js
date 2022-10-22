import getValue from './getValue.js'

function getWinner() {
    const stringValue = getValue('winner')
    const booleanValue = stringValue === 'true' ? true : false

    return booleanValue
}

export default getWinner
