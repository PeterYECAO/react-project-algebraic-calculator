import React, { Component } from 'react';
import Button from './Button';
import Symbol from './Symbol';
import Clearbutton from './Clearbutton';
import Equal from './Equal'

export default class Panel extends Component {

    addSymbol = (s) => {
        this.props.addSymbol(s);
    }
    addButton = (b) =>{
        this.props.addButton(b);
    }

    render() {
        const thisStyle = {
             position:'absolute',
             left:'41.3%',
             top:'34%'
        }

        return (
            <div className="container" style={thisStyle}>
                <div className="row">
                    <Clearbutton className="col" clearAll={this.props.clearAll}/>
                    <Equal className="col" equal={this.props.equal}/>
                </div>

                <div className="row">
                    <Button className="col" number="1" addButton={this.addButton}/>
                    <Button className="col" number="2" addButton={this.addButton}/>
                    <Button className="col" number="3" addButton={this.addButton}/>
                    <Symbol className="col" symbol="+" addSymbol={this.addSymbol}/>
                </div>
                
                <div className="row">
                    <Button className="col" number="4" addButton={this.addButton}/>
                    <Button className="col" number="5" addButton={this.addButton}/>
                    <Button className="col" number="6" addButton={this.addButton}/>
                    <Symbol className="col" symbol="-" addSymbol={this.addSymbol}/>
                </div>

                <div className="row">
                    <Button className="col" number="7" addButton={this.addButton}/>
                    <Button className="col" number="8" addButton={this.addButton}/>
                    <Button className="col" number="9" addButton={this.addButton}/>
                    <Symbol className="col" symbol="*" addSymbol={this.addSymbol}/>
                </div>

                <div className="row">
                    <Button className="col" number="0" addButton={this.addButton}/>
                    <Symbol className="col" symbol="/" addSymbol={this.addSymbol}/>
                </div>
               
            </div>
        )
    }
}
