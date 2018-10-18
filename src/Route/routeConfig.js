import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Home } from './../Pages/Home';
import { FilmInfo } from './../Pages/FilmInfo';
import { Posts } from './../Pages/Posts';
import { PostDetail } from './../Pages/PostDetail';
import { Weather } from './../Pages/Weather';
import { LoginForm } from './../Organisms/LoginForm';

const RouteConfig = ({store, history}) => (
    <Provider store={ store }>
        <Router history={ history }>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/film-info" component={ FilmInfo } />
                <Route path="/posts" component={ Posts } />
                <Route path="/post-detail/:id" component={ PostDetail } />
                <Route path="/weather" component={ Weather } />
                <Route path="/login" component={ LoginForm } />
                <Redirect to = "/" />
            </Switch>
        </Router>
    </Provider>
);

export default RouteConfig;
