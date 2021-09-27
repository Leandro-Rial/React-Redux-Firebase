import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    )
}

export default PublicRouter
