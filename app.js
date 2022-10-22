import createInitialScreen from './generators/createInitialScreen.js'
import setInitialStates from './storers/setInitialStates.js'

function app() {
    createInitialScreen()
    setInitialStates()
}

export default app
