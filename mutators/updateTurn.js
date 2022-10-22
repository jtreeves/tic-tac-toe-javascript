import getTie from '../accessors/getTie.js'
import getTurn from '../accessors/getTurn.js'
import getWinner from '../accessors/getWinner.js'
import setTurn from '../storers/setTurn.js'

function updateTurn() {
    const winner = getWinner()
    const tie = getTie()
    const turn = getTurn()
    const newTurn = turn * -1

    if (winner || tie) {
        return
    } else {
        setTurn(newTurn)
    }
}

export default updateTurn
