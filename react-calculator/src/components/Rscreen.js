import React, { Component } from 'react'

export default class Rscreen extends Component {

    render() {
      const screenStyle = {
            position:'absolute',
            top:'20%',
            left:'40%'
      }

        return (
            <input style={screenStyle} type='text' className='bg-warning' value={this.props.value} readOnly></input>
        )
    }
}
