import React from 'react'
import { Route } from 'react-router-dom'
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/Nav'

export default () => (
    <React.Fragment>
        <Route render={props => (
            <NavBar {...props} />
        )} />
        <ApplicationViews />
    </React.Fragment>
)
