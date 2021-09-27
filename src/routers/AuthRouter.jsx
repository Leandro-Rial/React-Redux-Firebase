import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import { firebase } from '../firebase/config-firebase';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import AppRouter from './AppRouter';

const AuthRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user) {
                    dispatch(login(user.uid, user.displayName))
                }
            }
        )
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/register" component={RegisterScreen} />

                <AppRouter />
            </Switch>
        </Router>
    )
}

export default AuthRouter
