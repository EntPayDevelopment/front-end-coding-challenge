import React from 'react'
import PropTypes from 'prop-types';
import './MovieList.scss'

const MovieList = (props) => {
  const AddToWatchListComponent = props.componentWatchList;

  return (
    <div>
      <div className='movies__container'>
        {props.movies.map((movie) => (
          <div className='MovieCard'
            key={movie.id}
            onClick={() => props.handleWatch(movie)} >
            <img src={movie.image} className="card__image" alt="movie-image" />
            <p>{movie.title}</p>
            <AddToWatchListComponent />
          </div>
        ))
        }
      </div>
    </div>
  )
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MovieList;