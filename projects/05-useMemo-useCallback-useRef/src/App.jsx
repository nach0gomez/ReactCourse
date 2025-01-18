import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useTitle } from './hooks/useTitle'

import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { title, error, updateTitle } = useTitle()
  const { movies: mappedMovies, getMovies, loading } = useMovies({ title, sort })

  const debouncedSearchMovies = useCallback(
    debounce(title => getMovies({ title }), 300), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(title)
    getMovies({ title })
  }

  const handleChange = (event) => {
    const newTitle = event.target.value
    updateTitle(event.target.value)
    debouncedSearchMovies(newTitle)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='index'>
      <header>
        <h2>Movie Finder</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input value={title} onChange={handleChange} id='input' name='title' type='text' placeholder='Avengers, StarWars, Matrix...' />
          <input type='checkbox' onChange={handleSort} id='sort' checked={sort} />
          <button type='submit'>Search</button>
          {error && (<p style={{ color: 'red' }}>{error}</p>)}
        </form>
      </header>
      {
        loading ? <p>Loading...</p> : <Movies movies={mappedMovies} />
      }
    </div>
  )
}

export default App
