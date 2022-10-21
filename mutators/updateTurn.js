import { getTurn } from '../accessors/getTurn.js'
import { setTurn } from '../storers/setTurn.js'

export function updateTurn(winner) {
    const turn = getTurn()

    if (!winner) {
        const newTurn = turn * -1

        setTurn(newTurn)
    }
}
