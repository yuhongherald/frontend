import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Switch} from 'react-router-dom';
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom';
import Index from './components/Main/Index.jsx';


ReactDOM.render(
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
        </Switch>
    </Router>,

    document.getElementById('main-content')
);