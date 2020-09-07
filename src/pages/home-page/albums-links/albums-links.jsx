import '@/pages/home-page/albums-links/albums-links.css'
import React from 'react';
import { Link } from 'react-router-dom';

export const Albums = ({albums}) => (
    <div className='albums'>
            {albums.map((album) => {
                return (
                    <Link 
                        to={`/albums/${album.link}`}
                        className='album_item'
                        key={album.id}
                    >
                        <img 
                            className='album_poster'
                            src={album.poster_path}
                            alt='poster'
                            title={album.title}
                        />
                    </Link>
                );
            })}
    </div>
);
