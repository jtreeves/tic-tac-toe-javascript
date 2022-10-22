import getTurn from '../accessors/getTurn.js'
import getWinner from '../accessors/getWinner.js'
import setTurn from '../storers/setTurn.js'

function updateTurn() {
    const turn = getTurn()
    const winner = getWinner()

    if (!winner) {
        const newTurn = turn * -1

        setTurn(newTurn)
    }
}

export default updateTurn
