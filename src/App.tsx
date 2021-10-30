import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={LandingPage} />
                <Route path={'/dine-aksjer'} component={Portfolio} />
            </Switch>
        </Router>
    );
}

export default App;
