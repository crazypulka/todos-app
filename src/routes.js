import React from 'react'
import {Route, IndexRedirect} from 'react-router';
import ENDPOINTS  from './constants/EndPoints';
import Application from './containers/Root/Application';
import RequireAuth from './containers/Root/Application/RequireAuth';
import Todos from './containers/Root/Application/RequireAuth/Todos';
import CheckProfile from './containers/Root/Application/CheckProfile';
import AuthorizedProfile from './containers/Root/Application/RequireAuth/Profile';

const USER_WILDCARD = "*";

const router =
    <Route path="/" component={Application}>

        <Route component={RequireAuth}>
            <Route path={ENDPOINTS.todos} component={Todos}/>
            <Route component={CheckProfile}>
                <Route path={USER_WILDCARD} component={AuthorizedProfile}/>
            </Route>
        </Route>

        {/*TODO: many more pages*/}

        <Route component={CheckProfile}>
            <Route path={USER_WILDCARD} component={AuthorizedProfile}/>
        </Route>

    </Route>;

export default router;