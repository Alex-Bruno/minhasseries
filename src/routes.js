import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//
import Menu from './components/Menu'
import Home from './pages/Home';
import EditSerie from './pages/New';
import Series from './pages/Series';
import NewSerie from './pages/New';
import About from './pages/About';

const Routes = () => (
    <Router>
        <div>
            <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/series/:id/edit" exact component={EditSerie} />
            <Route path="/:genre/series/" exact component={Series} />
            <Route exact path='/new' component={NewSerie} />
            <Route exact path='/about' component={About} />
        </div>
    </Router>
);

export default Routes;