import React, { Component } from 'react'

export default class Equal extends Component {
    render() {

        return (
            <button  onClick={this.props.equal} className="btn-lg bg-danger">
                =
            </button>
        )
    }
}
