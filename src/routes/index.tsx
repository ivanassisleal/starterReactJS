
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';


const Routes: React.FC = () => (
    <Switch>
        {/* Rotas Publicas */}
        <Route path="/" component={SignIn} exact  />
        <Route path="/contact" component={Contact}  />

        {/* Rotas Privadas */}
        <Route path="/dashboard" component={Dashboard} isPrivate />

    </Switch>
)

export default Routes;