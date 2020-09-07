import '@/styles/reset.css';
import '@/styles/app.css';
import { Home } from '@/pages/home-page/home/home';
import { Page404 } from '@@/404/page404';
import { AlbumInfo } from '@/pages/album-info/album-info/album-info';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const App = () => (
    <div className='container'>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/albums/:albumName' component={AlbumInfo} />
            <Route path='*' component={Page404} /> 
        </Switch>
    </div>
);