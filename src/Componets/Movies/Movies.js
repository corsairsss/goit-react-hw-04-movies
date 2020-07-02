import React, { Component } from 'react';

import MoviesView from '../../Views/Movies/movies.js';
import SearchBar from '../SearchBar/SearchBar.js';

import getQueryParams from '../../utils/getQueryParams.js';
import apiMovies from '../../Services/apiMovie.js';

export default class Movies extends Component {
  state = {
    movies: [],
    error: false,
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
    results
      ? this.setState({ movies: results })
      : this.setState({ error: true });
    // this.setState({ movies: results });
  };

  render() {
    const { movies, error } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {error && <h1>Error 404...</h1>}
        {!error && <MoviesView movies={movies} props={this.props} />}
      </>
    );
  }
}
