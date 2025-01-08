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
    try {
      const storedBoard = window.localStorage.getItem('board')
      return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
    } catch (error) {
      console.error('Error parsing board from localStorage:', error)
      return Array(9).fill(null) // Default empty board
    }
  })

  // Initial player turn
  const [turn, setTurn] = useState(() => {
    try {
      const storedTurn = window.localStorage.getItem('turn')
      return storedTurn && (storedTurn === TURNS.X || storedTurn === TURNS.O)
        ? storedTurn
        : TURNS.X
    } catch (error) {
      console.error('Error parsing turn from localStorage:', error)
      return TURNS.X // Default starting turn
    }
  })

  // Winner State
  const [winner, setWinner] = useState(null)

  // Reset the game state
  const resetGame = () => {
    resetStoredGame()
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  // Update board and handle game logic
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

    storeGame({ newBoard, newTurn })
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button className='resetGame' onClick={resetGame}>
        Reset Game
      </button>
      <section className='game'>
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
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
