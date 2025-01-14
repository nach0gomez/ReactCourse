import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ title, sort }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const prevSearch = useRef(title)

  const getMovies = useCallback(async ({ title }) => {
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
  }, [])

  // before returning movies, sort them if 'sort' or 'movies' changed
  const sortedMovies = useMemo(() => {
    return sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
  }, [sort, responseMovies])

  return { movies: sortedMovies, getMovies, loading, fetchError }
}
