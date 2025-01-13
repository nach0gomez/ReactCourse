import './App.css'
// import mockResponse from './mocks/results.json'
import mockNoResponse from './mocks/no-results.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useState } from 'react'

function App () {
  const { movies: mappedMovies } = useMovies()
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(title)
  }

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  useEffect(() => {
    if (title === '') {
      setError('Title can not be empty')
      return
    }

    if (title.match(/^\d+$/)) {
      setError('Title can not be a digit')
      return
    }

    if (title.length < 3) {
      setError('Title should be at least 3 characters long')
      return
    }

    setError('')
  }, [title])

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
