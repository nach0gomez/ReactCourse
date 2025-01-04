import { WINNER_COMBINATIONS } from '../constants'

export const checkWinner = (board) => {
  for (const [a, b, c] of WINNER_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkDraw = (board) => {
  return board.every((square) => square !== null)
}
