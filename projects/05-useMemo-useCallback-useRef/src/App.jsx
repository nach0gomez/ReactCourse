import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useTitle } from './hooks/useTitle'

function App () {
  const { title, error, updateTitle } = useTitle()
  const { movies: mappedMovies, getMovies } = useMovies({ title })

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(title)
    getMovies()
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
