import React from 'react';
import { Link } from 'react-router-dom'

const LoggedOutMenu = (props) => {
    return (
        <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">Register</Link></li>
        </ul>
    )
}

export default LoggedOutMenu