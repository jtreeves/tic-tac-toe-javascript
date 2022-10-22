import setValue from './setValue.js'

function setTurn(newTurn) {
    const stringTurn = String(newTurn)

    setValue('turn', stringTurn)
}

export default setTurn
