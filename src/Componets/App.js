import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Section from './Section/Section.js';
import Navigation from './Navigation/Navigation.js';

import routes from './routes.js';

const AsyncHome = lazy(() =>
  import('./Home/Home.js' /* webpackChunkName: "Home" */),
);

const AsyncMovies = lazy(() =>
  import('./Movies/Movies.js' /* webpackChunkName: "movies" */),
);

const AsyncMovDetails = lazy(() =>
  import(
    './MovieDetails/MovieDetails.js' /* webpackChunkName: "MovieDetails" */
  ),
);

const AsyncNotFound = lazy(() =>
  import('./NotFound/NotFound.js' /* webpackChunkName: "NotFound" */),
);

export default class App extends Component {
  render() {
    return (
      <>
        <Section>
          <Navigation />

          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={routes.home} exact component={AsyncHome} />
              <Route path={routes.movies} exact component={AsyncMovies} />
              <Route path={routes.moviesDetails} component={AsyncMovDetails} />
              <Route component={AsyncNotFound} />
            </Switch>
          </Suspense>
        </Section>
      </>
    );
  }
}
