import React from 'react'
import { Route } from 'react-router-dom'
import useAuthCheck from '../../hooks/authHandling'
import Login from '../auth/Login'

//Function returns a route, the path is a string and th destination is a component
const AuthCheckRoute = ({path, Destination}) => {


    //object destructuring- useAuthCheck
    //properties get assigned to the variables on the left
    //order doesn't matter but the const must match the property-- they are NOT taco
    const { isAuthenticated } = useAuthCheck()


    //returns a route, if the user is authenticated return the destination component
    //if not authenticated, return the login component
    return(
        <Route exact path={path} render=
        {props => {
            if (isAuthenticated())
            {
                return <Destination
                {...props} />
            }
            else
            {
                return <Login />
            }
        }} />
    )
}

export default AuthCheckRoute