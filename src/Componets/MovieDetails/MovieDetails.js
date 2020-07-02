import React, { Component, Suspense, lazy } from 'react';
import { Link, Route } from 'react-router-dom';

import apiMovies from '../../Services/apiMovie.js';
import routes from '../routes.js';

import s from './MovieDetails.module.css';

import MovieDetailsView from '../../Views/MoviesDetails/moviesdetails.js';

const AsyncCast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "Cast" */),
);
const AsyncReview = lazy(() =>
  import('../Review/Reviews.js' /* webpackChunkName: "Review" */),
);

export default class MovieDetails extends Component {
  state = {
    movieDetails: {},
    from: '/',
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
    if (state && state.from) history.push(state.from);
    else history.push('/movies');
  };

  defaultStateFrom = () => {
    if (!this.props.location.state) {
      this.props.location.state = {};
      this.props.location.state.from = {
        hash: '',
        key: '',
        pathname: '/movies',
        search: '',
        state: null,
      };
    }
  };

  render() {
    const { movieDetails } = this.state;
    const { match } = this.props;
    this.defaultStateFrom();
    const { state } = this.props.location;
    const isMovieDetails=Object.keys(movieDetails).length;
    return (
      <>
        <button
          className={s.btn_goback}
          type="button"
          onClick={this.goBackToMoviesList}
        >
          Go back
        </button>

        {isMovieDetails && (<MovieDetailsView movieDetails={movieDetails} />)}
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
