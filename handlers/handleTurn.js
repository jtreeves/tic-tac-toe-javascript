import { getPoints } from '../accessors/getPoints.js'
import { getTurn } from '../accessors/getTurn.js'
import { setPoints } from '../storers/setPoints.js'
import { updateTurn } from '../mutators/updateTurn.js'
import { updateMessage } from '../mutators/updateMessage.js'
import { checkIfTie } from '../utilities/checkIfTie.js'
import { checkIfWinner } from '../utilities/checkIfWinner.js'
import { selectBestCell } from '../utilities/selectBestCell.js'
import { extractIndexFromId } from '../utilities/extractIndexFromId.js'

export function handleTurn(event) {
    const target = event.target

    if (target.textContent !== '') {
        return
    } else {
        const id = target.id
        const index = extractIndexFromId(id)
        const points = getPoints()
        const turn = getTurn()
        const text = turn === 1 ? 'X' : 'O'
        target.textContent = text
        points[index] = turn
        setPoints(points)
        const tie = checkIfTie()
        const winner = checkIfWinner()
        updateTurn(winner)
        updateMessage(winner, tie)
        console.log(selectBestCell('O'))
    }
}
