import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { checkDraw, checkWinner } from './logic/board'
import { TURNS } from './constants'
import { resetStoredGame, storeGame } from './logic/storage'

function App () {
  // Initial board state
  const [board, setBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
  })
  // Initial player turn
  const [turn, setTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
    return storedTurn ?? TURNS.X
  })
  // Winner State
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    resetStoredGame()
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkDraw(newBoard)) {
      setWinner('draw')
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    storeGame(newTurn, newBoard)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button className='resetGame' onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {board.map((square, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
