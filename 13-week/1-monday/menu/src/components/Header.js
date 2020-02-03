import React from 'react'
import { connect } from 'react-redux'
import LoggedInMenu from '../components/LoggedInMenu'
import LoggedOutMenu from '../components/LoggedOutMenu'

const Header = (props) => {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <LoggedInMenu />
    }
    else {
        return <LoggedOutMenu />
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuth
    }
}

export default connect(mapStateToProps, null) (Header)