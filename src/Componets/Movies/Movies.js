import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar.js';

import getQueryParams from '../../utils/getQueryParams.js';
import apiMovies from '../../Services/apiMovie.js';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  handleChangeQuery = query => {
    if (query) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`,
      });
    }
  };

  componentDidMount() {
    const { location } = this.props;
    const { query } = getQueryParams(location.search);
    if (query) this.fetchMovies(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = async query => {
    const results = await apiMovies.fetchListMovies(query);
    this.setState({ movies: results });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
