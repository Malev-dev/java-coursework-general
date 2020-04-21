import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc'



class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.getRate();
    this.currency = ["USD", "RUB", "CAD", "PHP", "BRL"];
  }
  getRate = () => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]]
        }
        console.log(result);
        this.setState({ currencyRate: result });
      });
  }

  render() {
    return (<div className="rate">
      
      <div className="blockmoney">
        {Object.keys(this.state.currencyRate).map((keyName, i) =>
          (
            <div className="WAR" key={keyName}>
              
              <div className="flex-block">{keyName}</div>
              <div className="flex-block">{this.state.currencyRate[keyName].toFixed(2)
              }
              </div>
              <p className="par"> *You can buy for one euro</p>
              <img src="European-union-icon.png" className="iconeur"></img>
            </div>
          )
        )}
         
         </div>
        <Calc  rate={this.state.currencyRate}/>
        <div className="soc">
          <ul>
            <li claaName="soc_item">
            </li>
            <li claaName="soc_item"></li>
            <li claaName="soc_item"></li>
            <li></li>
          </ul>
        </div>
    </div>
    );
  }
}
export default Rate;