import setValue from './setValue.js'

function setTie(tie) {
    const stringTie = String(tie)
    
    setValue('tie', stringTie)
}

export default setTie
