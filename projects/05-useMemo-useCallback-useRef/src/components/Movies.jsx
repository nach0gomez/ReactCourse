/* eslint-disable react/prop-types */

export const Movies = ({ movies, handleSubmit }) => {
  const hasMovies = movies.length > 0
  return (hasMovies
    ? (
      <div className='index'>
        <header>
          <h2>Movie Finder</h2>
          <form className='form' onSubmit={handleSubmit}>
            <input id='input' type='text' placeholder='Avengers, StarWars, Matrix...' />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
          {movies.map(movie => {
            return (
              <article key={movie.id}>
                <label>{movie.title}</label>
                <label>{movie.year}</label>
                <img src={movie.poster} alt={movie.title} />
              </article>
            )
          })}
        </main>
      </div>)
    : <p>There are no movies found.</p>
  )
}
