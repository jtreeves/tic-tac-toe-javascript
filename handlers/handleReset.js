import setInitialStates from '../storers/setInitialStates.js'
import updateScreenWithOptions from '../mutators/updateScreenWithOptions.js'

function handleReset() {
    const reminder = document.querySelector('h2')
    const board = document.querySelector('section')
    
    reminder.remove()
    board.remove()
    
    updateScreenWithOptions()
    setInitialStates()
}

export default handleReset
