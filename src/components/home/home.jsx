import React from 'react';
import { Albums } from '../albums/albums';
import { Logotype } from '../logotype/logotype';
import '../../styles/reset.css';
import '../../styles/home.css';

const albums = [
    {
        id: 1,
        title: 'Каждому своё',
        release_date: '2020-07-20'
    }
]

export const Home = () => (
    <div className='container'>
        <Logotype />
        <Albums albums={albums} />
    </div>
);