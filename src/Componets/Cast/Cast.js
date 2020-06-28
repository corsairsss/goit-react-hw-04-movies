import React, { Component } from 'react';

import apiMovies from '../../Services/apiMovie.js';

import s from './Cast.module.css';
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
    return (
      <>
        <div>
          {cast.length > 0 && (
            <ul className={s.list}>
              {cast.map(person => (
                <li key={person.cast_id}>
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                        : 'http://placehold.it/200x300'
                    }
                    alt="movie"
                    width="200"
                    className={s.list__img}
                  />
                  <h2 className={s.list__name}> {person.name}</h2>
                  <p className={s.list__char}>{person.character}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
}
