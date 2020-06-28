import React, { Component } from 'react';

import apiMovies from '../../Services/apiMovie.js';

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
    return (
      <>
        <div>
          <h2>REVIEWS</h2>
        </div>
        <div>
          {reviews.length > 0 && (
            <>
              <ul>
                {reviews.map(review => (
                  <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {reviews.length === 0 && (
            <>
              <p>We don't have any reviews for this movie</p>
            </>
          )}
        </div>
      </>
    );
  }
}
