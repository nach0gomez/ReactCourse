import { useState } from 'react'
import mockResponse from '../mocks/results.json'
import mockNoResponse from '../mocks/no-results.json'

export function useMovies ({ title }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (title) {
      setResponseMovies(mockResponse)
    } else {
      setResponseMovies(mockNoResponse)
    }
  }

  return { movies: mappedMovies, getMovies }
}
