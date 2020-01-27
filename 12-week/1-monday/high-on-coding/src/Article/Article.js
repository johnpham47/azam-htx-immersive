import React, { Component } from 'react'
import HeadlineArticle from './HeadlineArticle'
import CLBar from './CLBar'
import BodyArticle from './BodyArticle'

export class Article extends Component {
    render() {
        return (
            <div>
                <HeadlineArticle />
                <BodyArticle />
                <CLBar />
            </div>
        )
    }
}

export default Article
