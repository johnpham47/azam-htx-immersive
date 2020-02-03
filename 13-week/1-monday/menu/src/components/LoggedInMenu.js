import React from 'react';
import {Link} from 'react-router-dom'

const LoggedInMenu = (props) => {
    return (
        <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Logout</Link></li>
        </ul>
    )
}

export default LoggedInMenu