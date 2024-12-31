import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return(
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
} 

const WINNER_COMBINATIONS = [
  // horizontal
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // vertical
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // diagonal
  [0,4,8],
  [6,4,2],
]

function App() {
  // Initial board state
  const [board, setBoard] = useState(Array(9).fill(null))
  // Initial player turn
  const [turn, setTurn] = useState(TURNS.X)
  // Winner State
  const [winner, setWinner] = useState(null)

  const checkWinner = (currentBoard) => {
    for(let i = 0; i<WINNER_COMBINATIONS.length; i++){
      // array desconstructing
      const [a, b, c] = WINNER_COMBINATIONS[i]
      if(currentBoard[a] && 
        currentBoard[a] === currentBoard[b] && 
        currentBoard[a] === currentBoard[c]){
        return currentBoard[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
  
    const newBoard = [...board]
    newBoard[index] = turn    
    setBoard(newBoard)
    setWinner((checkWinner(newBoard)));

    // Changing Turns between players
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  } 

  const winnerMessage = () => {
    if(winner) return `The winner is:`
    if(!winner && !board.includes(null)) return 'We have a draw!'
    return null
  }


  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map( (_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winnerMessage()
        && (<section className="winner">
            <div className="text">
              <h2>
                {
                  winnerMessage()
                }
              </h2>
              <header className="win">
                {winnerMessage() && <Square>{winner}</Square>}
              </header>
              <footer>
                <button>
                  Try Again
                </button>
              </footer>
            </div>
            </section>
          )
      }
      
    </main>
  )
}

export default App
