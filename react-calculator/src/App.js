import React, { Component } from 'react';
import './App.css';
import Rscreen from './components/Rscreen'
import Panel from './components/Panel';

export default class App extends Component {

  state = {
      symbols: [],
      buttons: [],
      value: 0,
      recorder_of_first: 0,
      recorder_of_last:0
  }
  
  addSymbol = (s)=>{
    
    if(this.state.buttons.length===1&&this.state.recorder_of_first===0&&this.state.recorder_of_last===0){
      this.setState({recorder_of_first: 1});
    }

    this.setState({symbols : [...this.state.symbols,s]})
  }

  addButton = (b)=>{

      if(this.state.symbols.length===0){
        this.setState({recorder_of_first:this.state.recorder_of_first+1})
      }else{
        this.setState({recorder_of_last:this.state.recorder_of_last+1})
      }
      this.setState({ buttons:[...this.state.buttons,b] })
  }



    clearAll = () => { 
      this.setState({
        symbols:[],
        buttons:[],
        value:0,
        recorder_of_first: 0,
        recorder_of_last:0
      })
    }

    equal = () => {
    
        if(this.state.symbols.length===1&&this.state.buttons.length>=2){
          
          var sum;

          var first_number=0;
          var second_number=0;

          var F=this.state.recorder_of_first;
          var S=this.state.recorder_of_last;

          var degree=0;

          while(F>0){
            first_number += this.state.buttons[F-1]*Math.pow(10,degree);
            degree++;
            F--;
          }

          degree=0;

          while(S>0){
            second_number += this.state.buttons[this.state.recorder_of_first-1+S]*Math.pow(10,degree);
            degree++;
            S--;
          }

          console.log(first_number)
          console.log(second_number)

          if(this.state.symbols[0]==='+'){
             sum = parseFloat(first_number)+ parseFloat(second_number);
          }else if(this.state.symbols[0]==='-'){
             sum = parseFloat(first_number)- parseFloat(second_number);
          }else if(this.state.symbols[0]==='*'){
             sum = parseFloat(first_number)* parseFloat(second_number);
          }else{
             sum = parseFloat(first_number)/ parseFloat(second_number);
          }

          console.log(sum);

              this.setState({
                symbols: [],
                buttons: [sum],
                recorder_of_first: 0,
                recorder_of_last:0
              },()=>{
                  this.setState({
                  value: this.state.buttons[0]
              })})
      }
    }

    

render(){


    return (
            <div className="App jumbotron jumbotron-fluid">
                <Rscreen id="screen" value={this.state.value}/>
                <Panel addSymbol={this.addSymbol} addButton={this.addButton} clearAll={this.clearAll} equal={this.equal}/>
            </div>
          );
    }
}


