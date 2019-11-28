import React, { useRef } from "react"
import { withRouter } from "react-router-dom"
import authHandling from '../../hooks/authHandling'

const Login = props => {
    const email = useRef()
    const password = useRef()
    const { login } = authHandling()

    const handleLogin = (e) => {
        e.preventDefault()

        login(email.current.value, password.current.value, localStorage)

        props.history.push({
            pathname: "/locations"
        })
    }

    return (
        <form className="" onSubmit={handleLogin}>
            <h1>Login</h1>
            <fieldset>
                <label htmlFor="emailInput">Email Address</label>
                <input ref={email} type="email" placeholder="you@you.com" 
                required />
            </fieldset>
            <fieldset>
                <label htmlFor="passwordInput">Password</label>
                <input ref={password} type="email" placeholder="password"
                required />
            </fieldset>
            <fieldset>
                <button type="submit">
                    Sign input
                </button>
            </fieldset>
        </form>
    )
}

export default withRouter(Login)