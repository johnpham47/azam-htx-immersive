import React, { Component } from 'react'
import HeadlineArticle from './HeadlineArticle'
import BodyArticle from './BodyArticle'

export class Article extends Component {
    render() {
        return (
            <div>
                <HeadlineArticle />
                <BodyArticle />
            </div>
        )
    }
}

export default Article
