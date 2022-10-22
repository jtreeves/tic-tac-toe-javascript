import { createInitialScreen } from './generators/createInitialScreen.js'
import { setInitialStates } from './storers/setInitialStates.js'

export function app() {
    createInitialScreen()
    setInitialStates()
}
