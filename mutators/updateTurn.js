import getTurn from '../accessors/getTurn.js'
import setTurn from '../storers/setTurn.js'

function updateTurn(winner) {
    const turn = getTurn()

    if (!winner) {
        const newTurn = turn * -1

        setTurn(newTurn)
    }
}

export default updateTurn
