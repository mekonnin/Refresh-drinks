import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignIn from '../src/containers/Signin'
import Signup from '../src/containers/SignUp'
const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={SignIn} />
                <Route exact path={'/signup'} component={Signup} />
            </Switch>
        </>
    );
};
export default Router;
