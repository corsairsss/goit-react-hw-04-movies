import React, { Component } from 'react';

import apiMovies from '../../Services/apiMovie.js';

import ReviewsView from '../../Views/Reviews/reviews.js';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const { match } = this.props;
    this.getReviewsMovie(match.params.movieId);
  }

  getReviewsMovie = async movId => {
    const results = await apiMovies.fetchReviewsMovie(movId);
    this.setState({ reviews: results });
  };
  render() {
    const { reviews } = this.state;
    return <ReviewsView reviews={reviews}/>;
  }
}
