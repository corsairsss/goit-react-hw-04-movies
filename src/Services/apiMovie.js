const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = 'ef7de6d7fd6f73413e8d5588f0c529fa';
const dynamicParams = `api_key=${API_KEY}&language=en-US&page=1`;

const fetchListMovies = async query => {
  try {
    const requestParam = `search/movie?query=${query}&${dynamicParams}`;
    const { results } = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return results;
  } catch (error) {
    throw error;
  }
};

const fetchMovieId = async movieId => {
  try {
    const requestParam = `movie/${movieId}?${dynamicParams}`;
    const results = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return results;
  } catch (error) {
    throw error;
  }
};

const fetchTrendingMovie = async () => {
  try {
    const requestParam = `trending/movie/day?${dynamicParams}`;
    const { results } = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return results;
  } catch (error) {
    throw error;
  }
};

const fetchCreditsMovie = async movId => {
  try {
    const requestParam = `movie/${movId}/credits?${dynamicParams}`;
    const { cast } = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return cast;
  } catch (error) {
    throw error;
  }
};

const fetchReviewsMovie = async movId => {
  try {
    const requestParam = `movie/${movId}/reviews?${dynamicParams}`;
    const { results } = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return results;
  } catch (error) {
    throw error;
  }
};
export default {
  fetchListMovies,
  fetchMovieId,
  fetchTrendingMovie,
  fetchCreditsMovie,
  fetchReviewsMovie,
};
