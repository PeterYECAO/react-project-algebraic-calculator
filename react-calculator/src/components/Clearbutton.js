import React, { Component } from 'react';

export default class Clearbutton extends Component {
    render() {
            
        return (
            <button className="btn-lg bg-danger ml-1 mr-1" onClick={this.props.clearAll}>
                   C
            </button>
        )
    }
}
