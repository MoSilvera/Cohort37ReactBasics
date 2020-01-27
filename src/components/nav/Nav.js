import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import authHandling from '../../hooks/authHandling'


export default (props) => {

    const { logout } = authHandling()

    return (
        <nav className="navbar">
                <Link className="navbar-brand" to="/">All Kreatures Kennel </Link>

                <Link className="nav-link" to="/animals">Animals</Link>

                <Link className="nav-link" to="/owners">Owners</Link>

                <Link className="nav-link" to="/locations">Locations</Link>

                <Link className="nav-link" to="/employees">Employees</Link>


                {
                    sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null
                         ? <li className="navbar__item">
                         <Link className="navbar__link"
                         to=""
                         onClick={e => {
                         e.preventDefault()
                        logout()
                        props.history.push("/")
                        }}
                        >Logout</Link>
                         </li>
                         : ""
                        }
        </nav>
    )
}