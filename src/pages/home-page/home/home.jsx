import { Albums } from '@/pages/home-page/components/albums-links/albums-links';
import { Logotype } from '@/pages/home-page/components/logotype/logotype';
import kazhdomu_svoyo from '@/assets/images/albums-images/kazhdomu-svoyo/kazhdomu-svoyo.jpg';
import '@/pages/home-page/home/home.css';
import React from 'react';

const ALBUMS = [
    {
        id: 1,
        title: 'Каждому своё',
        link: 'kazhdomu-svoyo',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    },
    {
        id: 2,
        title: 'test',
        link: 'test',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    },
    {
        id: 3,
        title: '3',
        link: '3',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    },
    {
        id: 4,
        title: '4',
        link: '4',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    },
    {
        id: 5,
        title: '5',
        link: '5',
        release_date: '2020-07-20',
        poster_path: kazhdomu_svoyo
    },
];

export const Home = () => <Logotype />;
{/* <Albums albums={ALBUMS} /> */}