import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ title }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const prevSearch = useRef(title)

  const getMovies = async () => {
    try {
      if (prevSearch.current === title) return

      setLoading(true)
      setFetchError(null)
      prevSearch.current = title
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
