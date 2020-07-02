import React from 'react';
import { Link } from 'react-router-dom';

const HomeView=({trendMovie,props})=>{
    
    return <div>
    {trendMovie.length > 0 && (
      <>
        <ul>
          {trendMovie.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${props.match.url}movies/${movie.id}`,
                  state: { from: props.location },
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
}
export default HomeView;