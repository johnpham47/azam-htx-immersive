import React, { Component } from 'react'
import HeaderHeadline from './HeaderHeadline'
import BodyHeadline from './BodyHeadline'

export class Headline extends Component {
    render() {
        return (
            <div>
                <HeaderHeadline />
                <BodyHeadline />
            </div>
        )
    }
}

export default Headline
