import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home'
import SignUp from '../SignUp/SignUp'
import Dashboard from '../Dashboard/Dashboard'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
    );
}

export default Main;