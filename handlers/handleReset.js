import { clearBoard } from '../mutators/clearBoard.js'
import { clearMessage } from '../mutators/clearMessage.js'
import { setInitialStates } from '../storers/setInitialStates.js'

export function handleReset() {
    clearBoard()
    clearMessage()
    setInitialStates()
}
