import { VITE_MOVIE_API_KEY } from '../constants'

export const searchMovies = async ({ title }) => {
  if (title === '') return

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${VITE_MOVIE_API_KEY}&s=${title}`)
    const data = await response.json()
    const movies = data.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error fetching movies', e)
  }
}
