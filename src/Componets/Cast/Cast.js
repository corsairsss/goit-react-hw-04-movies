import React, { Component } from 'react';

import apiMovies from '../../Services/apiMovie.js';

import CastView from '../../Views/Cast/cast.js';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    this.getCastMovie(match.params.movieId);
  }

  getCastMovie = async movId => {
    const results = await apiMovies.fetchCreditsMovie(movId);
    this.setState({ cast: results });
  };

  render() {
    const { cast } = this.state;
    return <CastView cast={cast} />;
  }
}
