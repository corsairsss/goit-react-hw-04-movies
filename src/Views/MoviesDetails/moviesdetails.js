import React from 'react';

import s from '../../Componets/MovieDetails/MovieDetails.module.css';

const MovieDetailsView = ({ movieDetails }) => {
  return (
    <div className={s.movieDetails}>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
            : 'http://placehold.it/200x300'
        }
        alt="movie"
        width="200"
      />
      <div>
        <h1>{`${movieDetails.title} (${movieDetails.release_date.slice(
          0,
          4,
        )})`}</h1>
        <p>{`User score:${movieDetails.vote_average * 10} %`}</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {movieDetails.genres.map(gen => (
          <span className={s.genres}>{gen.name}</span>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsView;
