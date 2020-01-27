import React, { Component } from 'react'
import HeaderHeadline from './HeaderHeadline'
import BodyHeadline from './BodyHeadline'

export class Headline extends Component {
    render() {
        return (
            <div className="headline">
                <HeaderHeadline />
                <BodyHeadline />
            </div>
        )
    }
}

export default Headline
