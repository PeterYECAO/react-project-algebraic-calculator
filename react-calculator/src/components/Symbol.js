import React, { Component } from 'react';

export default class Symbol extends Component {

    click = (e) => {
        this.props.addSymbol(e.target.id);
    }

    render() {

        const symbol = this.props.symbol;

        return (
            <button className="btn-lg bg-success ml-1 mt-1" id={symbol}  onClick={this.click}>
               {symbol}
            </button>
        )
    }
}
