import { Square } from "./Square"

export const WinnerModal = ({winner, resetGame}) => {
    const winnerText = winner === "draw" ? "We have a draw!" : 'The winner is:'
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {winnerText}
                </h2>
                {winner !== "draw" && (
                    <header className="win">
                        {<Square>{winner}</Square>}
                    </header>)
                }
                <footer>
                    <button onClick={resetGame}>
                        Try Again
                    </button>
                </footer>
            </div>
        </section>)}