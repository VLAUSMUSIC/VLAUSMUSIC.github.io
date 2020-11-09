import '@/pages/home-page/components/albums-links/albums-links.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ALBUMS } from '@/store/albums';
import { BackButton } from '@@/back-button/back-button'

export const Albums = () => (
  <div className="albums">
    <BackButton />
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
