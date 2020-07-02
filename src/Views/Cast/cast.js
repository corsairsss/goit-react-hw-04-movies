import React from 'react';

import s from '../../Componets/Cast/Cast.module.css';

const CastView = ({ cast }) => {
  return (
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
  );
};

export default CastView;
