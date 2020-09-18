import '@/styles/reset.css';
import { Home } from '@/pages/home-page/home/home';
import { Page404 } from '@@/404/page-404';
import { Loadable } from '@/pages/album-info-page/loadable-component/loadable-component';
import { Albums } from '@/pages/home-page/components/albums-links/albums-links';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@/app.css'

export const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/albums' component={Albums} />
        <Route path='/albums/:albumName' component={Loadable} />
        <Route path='*' component={Page404} /> 
    </Switch>
);