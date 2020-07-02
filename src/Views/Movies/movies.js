import React from 'react';
import { Link } from 'react-router-dom';

const MoviesView = ({ movies, props }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${props.match.url}/${movie.id}`,
              state: { from: props.location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesView;
