import setInitialStates from '../storers/setInitialStates.js'
import updateScreenWithOptions from '../mutators/updateScreenWithOptions.js'

function handleReset() {
    const board = document.querySelector('section')
    
    board.remove()
    updateScreenWithOptions()
    setInitialStates()
}

export default handleReset
