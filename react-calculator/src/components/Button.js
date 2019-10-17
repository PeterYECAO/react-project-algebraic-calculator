import React, { Component } from 'react'

export default class Button extends Component {

    handleClick = (e) => {
        this.props.addButton(e.target.id);
    }   

    render() {
        const number = this.props.number;

        return (
            <button id={number}  className="ml-1 mt-1 btn-lg bg-info" onClick={this.handleClick}>
                {number}
            </button>
        )
    }
}
