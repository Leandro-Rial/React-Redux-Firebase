import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/config-firebase';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import AppScreen from '../pages/AppScreen';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import pageNotFound from '../utils/pageNotFound';

const AppRouter = () => {

    const [log, setLog] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user) {
                    dispatch(login(user.uid, user.displayName))
                    setLog(true)
                } else {
                    setLog(false)
                }
            }
        )
    }, [dispatch, setLog])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter path="/auth" component={AuthRouter} isAuthenticated={log} />

                    <PrivateRouter exact path="/" component={AppScreen} isAuthenticated={log} />

                    <Route path="*" component={pageNotFound} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
