import React, { Component } from 'react'
import {Link, Navlink} from 'react-router-dom'


export class Menu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>Contact</li>
            </ul>
        )
    }
}

export default Menu
