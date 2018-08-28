import React, { Component } from 'react';
import './App.css';
import currencies from './currencies'
import Ticker from './Ticker/Ticker'

class App extends Component {
  state = {
    selectedPairs: ['eth_usd']
  }


  // handleCheckbox() {

  // }


  // handleCheckbox(currency) {
  //   return function(event){
  //     ...
  //   }
  // }


  handleCheckbox = currency => event => {
    // console.log(event.target);
    const { checked } = event.target;
    this.setState (({ selectedPairs }) => {
      let pairs =  [...selectedPairs];
      if (checked) {
        pairs.push(currency)
      } else {
        pairs = pairs.filter(pair => pair !== currency)
      }
      return {
        selectedPairs: pairs
      } 
    })
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
            {currencies.map(curr => (
              <li key={curr} className="currItem">
                <input type="checkbox" id={curr} onChange={this.handleCheckbox(curr)}/>              
                <label htmlFor={curr}>{curr.toUpperCase()}</label>
              </li>
              ))}
          </ul>
        </aside>
        <main>
          {this.state.selectedPairs.map(pair => <Ticker pair={pair}/>) }
        </main>
      </div>
    );
  }
}

export default App;
