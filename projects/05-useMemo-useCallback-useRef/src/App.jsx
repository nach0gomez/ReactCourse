import './App.css'
// import mockResponse from './mocks/results.json'
import mockNoResponse from './mocks/no-results.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useTitle } from './hooks/useTitle'

function App () {
  const { movies: mappedMovies } = useMovies()
  const { title, error, updateTitle } = useTitle()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(title)
  }

  const handleChange = (event) => {
    updateTitle(event.target.value)
  }

  return (
    <div className='index'>
      <header>
        <h2>Movie Finder</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input value={title} onChange={handleChange} id='input' name='title' type='text' placeholder='Avengers, StarWars, Matrix...' />
          <button type='submit'>Search</button>
          {error && (<p style={{ color: 'red' }}>{error}</p>)}
        </form>
      </header>
      <Movies onChange={handleChange} value={title} movies={mappedMovies} handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
