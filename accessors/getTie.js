import getValue from './getValue.js'

function getTie() {
    const stringValue = getValue('tie')
    const booleanValue = stringValue === 'true' ? true : false

    return booleanValue
}

export default getTie
