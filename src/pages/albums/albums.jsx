import React from 'react';
import { Link } from 'react-router-dom';
import '@/pages/albums/albums.css';

import { ALBUMS } from '@/store/albums';
import { BackHomeButton } from '@@/back-home-button/back-home-button'

export const Albums = () => (
  <>
    <BackHomeButton />
    <div className="albums">
      {ALBUMS.map(album => (
        <Link to={`/albums/${album.id}`} className='album__item' key={album.id}>
          <img
            className="album__poster"
            src={album.images.image}
            alt={album.id}
          />
        </Link>
      ))}
    </div>
  </>
);
