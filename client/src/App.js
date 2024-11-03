import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/map" component={MapPage} />
            </Switch>
        </Router>
    );
};

export default App;
