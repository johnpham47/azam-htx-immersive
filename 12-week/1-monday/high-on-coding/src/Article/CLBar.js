import React, { Component } from 'react'

export class CLBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            likes: 0,
            comments: 0
        }

    }
    likeIncrementer = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    commentIncrementer = () => {
        this.setState({
            comments: this.state.comments + 1
        })
    }

    render() {
        return (
            <div className="comments-likes">
                <button className="likes" onClick={this.likeIncrementer}>Likes: {this.state.likes}
                </button>
                <button className="comments" onClick={this.commentIncrementer}>Comments: {this.state.comments} </button>
            </div>
        )
    }
}

export default CLBar
