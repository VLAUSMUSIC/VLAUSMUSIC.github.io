import React from 'react';
import { Link } from 'react-router-dom';
import '@/pages/albums/albums.css';

import { ALBUMS } from '@/store/albums';
import { BackHomeButton } from '@@/back-home-button/back-home-button'

export const Albums = () => (
  <div className="albums">
    <BackHomeButton />
    {ALBUMS.map(album => {
      return (
        <Link to={`/albums/${album.id}`} className="album__item" key={album.id}>
          <img
            className="album__poster"
            src={album.images.image}
            alt="poster"
          />
          <div className="album__name">{album.trackName}</div>
        </Link>
      );
    })}
  </div>
);
