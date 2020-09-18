import '@/pages/home-page/components/albums-links/albums-links.css'
import React from 'react';
import { Link } from 'react-router-dom';
import kazhdomu_svoyo from '@/assets/images/albums-images/kazhdomu-svoyo/kazhdomu-svoyo.jpg';

const ALBUMS = [
    {
        id: 1,
        title: 'Каждому своё',
        link: 'kazhdomu-svoyo',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    }
];

export const Albums = () => (
    <div className='albums'>
            {ALBUMS.map((album) => {
                return (
                    <Link 
                        to={`/albums/${album.link}`}
                        className='album__item'
                        key={album.id}
                    >
                        <img 
                            className='album__poster'
                            src={album.poster_path}
                            alt='poster'
                            title={album.title}
                        />
                        <div className='album__name'>
                            {album.title}
                        </div>
                    </Link>
                );
            })}
    </div>
);
