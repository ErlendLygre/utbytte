import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import Portfolio from './pages/Portfolio';
import GlobalStyle from './styles/globalStyles';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path={'/'} component={LandingPage} />
                <Route path={'/dine-aksjer'} component={Portfolio} />
            </Switch>
        </Router>
    );
}

export default App;
