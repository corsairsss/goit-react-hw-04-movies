import React, { Component, Suspense, lazy } from 'react';
import { Link, Route } from 'react-router-dom';

import apiMovies from '../../Services/apiMovie.js';
import routes from '../routes.js';

import s from './MovieDetails.module.css';

const AsyncCast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "Cast" */),
);
const AsyncReview = lazy(() =>
  import('../Review/Reviews.js' /* webpackChunkName: "Review" */),
);

export default class MovieDetails extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    this.getInfoMovieFromId(this.props.match.params.movieId);
  }
  getInfoMovieFromId = async movieId => {
    const results = await apiMovies.fetchMovieId(movieId);
    this.setState({ movieDetails: results });
  };

  goBackToMoviesList = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    if (state) history.push(state.from);
    else history.push('/movies');
  };

  render() {
    const { movieDetails } = this.state;
    const { match } = this.props;
    const { state } = this.props.location;
    return (
      <>
        <button
          className={s.btn_goback}
          type="button"
          onClick={this.goBackToMoviesList}
        >
          Go back
        </button>
        {Object.keys(movieDetails).length && (
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
        )}
        <hr />
        <Link
          to={{
            pathname: `${match.url}/cast`,
            state: { from: state.from },
          }}
        >
          Cast
        </Link>

        <br />
        <Link
          to={{
            pathname: `${match.url}/review`,
            state: { from: state.from },
          }}
        >
          Reviews
        </Link>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${routes.moviesDetails}/cast`} component={AsyncCast} />
          <Route
            path={`${routes.moviesDetails}/review`}
            component={AsyncReview}
          />
        </Suspense>
      </>
    );
  }
}
