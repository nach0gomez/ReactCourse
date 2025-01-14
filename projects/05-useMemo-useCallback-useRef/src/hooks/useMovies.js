import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ title }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setFetchError(null)
      const mappedMovies = await searchMovies({ title })
      setResponseMovies(mappedMovies)
    } catch (e) {
      setFetchError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies: responseMovies, getMovies, loading, fetchError }
}
