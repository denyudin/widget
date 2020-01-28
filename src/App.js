import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page from './Components/Page';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Page}/>
            </Switch>
        </Router>
    );
}

export default App;
