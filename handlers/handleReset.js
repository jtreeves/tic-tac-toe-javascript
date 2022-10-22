import updateScreenWithOptions from '../mutators/updateScreenWithOptions.js'
import setInitialStates from '../storers/setInitialStates.js'

function handleReset() {
    const board = document.querySelector('section')
    
    board.remove()
    updateScreenWithOptions()
    setInitialStates()
}

export default handleReset
