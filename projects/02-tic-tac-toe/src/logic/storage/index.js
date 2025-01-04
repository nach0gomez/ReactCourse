
export const storeGame = ({newTurn, newBoard}) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const resetStoredGame = () => {
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
}
