import './App.css'
// import mockResponse from './mocks/results.json'
import mockNoResponse from './mocks/no-results.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies: mappedMovies } = useMovies()

  const handleSubmit = (event) => {
    // TODO: check form validation and access
    console.log(event.value)
    event.preventDefault()
  }

  return (
    <Movies movies={mappedMovies} handleSubmit={handleSubmit} />
  )
}

export default App
