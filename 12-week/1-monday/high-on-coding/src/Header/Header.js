import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

export class Header extends Component {
    render() {
        return (
          <div className="header">
            <Logo />
            <div className="menu-items">
                <Menu />
                <Menu />
            </div>
          </div>
        )
    }
}

export default Header


