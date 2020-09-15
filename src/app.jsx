import '@/styles/reset.css';
import { Home } from '@/pages/home-page/home/home';
import { Page404 } from '@@/404/page404';
import { AlbumInfo } from '@/pages/album-info/album-info/album-info';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@/app.css'

export const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/albums/:albumName' component={AlbumInfo} />
        <Route path='*' component={Page404} /> 
    </Switch>
);