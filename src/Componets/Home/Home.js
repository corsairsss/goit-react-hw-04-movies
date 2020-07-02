import React, { Component } from 'react';

import HomeView from '../../Views/Home/home.js';

import apiMovies from '../../Services/apiMovie.js';

export default class Home extends Component {
  state = {
    trendMovie: [],
    error: false,
  };
  componentDidMount() {
    this.fetchTrendingMovie();
  }

  fetchTrendingMovie = async () => {
    try {
      const results = await apiMovies.fetchTrendingMovie();
      results
        ? this.setState({ trendMovie: results })
        : this.setState({ error: true });
    } catch (error) {}
  };

  render() {
    const { trendMovie, error } = this.state;
    return (
      <>
        {!error && <HomeView trendMovie={trendMovie} props={this.props} />}
        {error && <h1>Error 404...</h1>}
      </>
    );
  }
}
