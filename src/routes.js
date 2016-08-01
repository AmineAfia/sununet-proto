import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import Projects from './components/home/projects';
import Help from './components/help/help';
import About from './components/about/about';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component="Home">
            <Route path="/projects" component={Projects}/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/help" component={Help}/>
    </Route>
);