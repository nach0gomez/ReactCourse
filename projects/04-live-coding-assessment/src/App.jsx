import './App.css'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { catFact, catImage, refreshCatData } = useCatFact()

  return (
    <main>
      <h1>Fact API :o</h1>
      {catFact
        ? <p>{catFact}</p>
        : <p>Loading curious fact...</p>}
      <h2>Cat API :3</h2>
      {catImage
        ? <img src={catImage} alt='cat image' />
        : <p>Loading image...</p>}
      <button onClick={refreshCatData}>Refresh Fact</button>
    </main>
  )
}
