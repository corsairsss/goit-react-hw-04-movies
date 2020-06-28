import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import apiMovies from '../../Services/apiMovie.js';

export default class Home extends Component {
  state = {
    trendMovie: '',
  };
  componentDidMount() {
    this.fetchTrendingMovie();
  }

  fetchTrendingMovie = async () => {
    const results = await apiMovies.fetchTrendingMovie();
    this.setState({ trendMovie: results });
  };

  render() {
    const { trendMovie } = this.state;
    const { match } = this.props;
    return (
      <>
        <div>
          {trendMovie.length > 0 && (
            <>
              <ul>
                {trendMovie.map(movie => (
                  <li key={movie.id}>
                    <Link
                      to={{
                        pathname: `${match.url}movies/${movie.id}`,
                        state: { from: this.props.location },
                      }}
                    >
                      {movie.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    );
  }
}
