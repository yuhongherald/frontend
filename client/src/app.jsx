import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import { createBrowserHistory } from 'history';
import routes from './routes.js'

const history = createBrowserHistory();

ReactDOM.render((
        <Router history={browserHistory} routes={routes}/>),
    document.getElementById('main-content')
);

