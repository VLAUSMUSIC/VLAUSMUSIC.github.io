import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@/styles/reset.css';
import '@/app.css';

import { Page404 } from '@@/404/page-404';

import { Home } from '@/pages/home/home';
import { Album } from '@/pages/album/album';
import { Albums } from '@/pages/albums/albums';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/albums" component={Albums} />
    <Route path="/albums/:albumName" component={Album} />
    <Route path="*" component={Page404} />
  </Switch>
);
