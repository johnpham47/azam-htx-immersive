import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props) 
        this.state = {
           ctr: 0
        }
        
    }
    minusOne =() => {
        console.log("Minus One")
        this.setState({
            ctr: this.state.ctr - 1
        })
    }

    addOne = () => {
        this.setState({
            ctr: this.state.ctr + 1
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.minusOne}>-</button>
                <label>{this.state.ctr}</label>
                <button onClick={this.addOne}>+</button>
            </div>
        )
    }
}

export default Counter
