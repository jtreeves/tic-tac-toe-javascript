import { updateScreenWithOptions } from '../mutators/updateScreenWithOptions.js'
import { setInitialStates } from '../storers/setInitialStates.js'

export function handleReset() {
    const board = document.querySelector('section')
    
    board.remove()
    updateScreenWithOptions()
    setInitialStates()
}
