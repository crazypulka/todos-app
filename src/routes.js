import React from 'react'
import {Route, IndexRedirect} from 'react-router';
import Application from './containers/Root/Application';

const router =
    <Route path="/" component={Application}>

        <Route path='*' component={Application} />

    </Route>

export default router;