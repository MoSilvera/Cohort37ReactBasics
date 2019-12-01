import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export default (props) => {

    return (
        <nav className="navbar">
                <Link className="navbar-brand" to="/">All Kreatures Kennel </Link>

                <Link className="nav-link" to="/Animals">Animals</Link>

                <Link className="nav-link" to="/Owners">Owners</Link>

                <Link className="nav-link" to="/Locations">Locations</Link>

                <Link className="nav-link" to="/login">Logout</Link>
        </nav>
    )
}