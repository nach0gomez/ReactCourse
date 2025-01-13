/* eslint-disable react/prop-types */

export const Movies = ({ movies }) => {
  const hasMovies = movies.length > 0
  return (hasMovies
    ? (
      <main>
        {movies.map(movie => {
          return (
            <article key={movie.id}>
              <label className='title'>{movie.title}</label>
              <label>{movie.year}</label>
              <img src={movie.poster} alt={movie.title} />
            </article>
          )
        })}
      </main>
      )
    : <p>There are no movies found.</p>
  )
}
