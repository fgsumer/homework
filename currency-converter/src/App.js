import React from 'react';
import './App.css';
import data from './Components/Data/Data.js';
import SelectCurrency from './Components/SelectCurrency';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAVal: data.currencies[0].sellRate,
      currencyBVal: data.currencies[1].sellRate,
    };

    this.onSelectCurrency = this.onSelectCurrency.bind(this);
  }
  onChangeHandler(e, currency) {
    const { currencyB } = this.state;
    if (currency === 'A') {
      const newValueA = e.target.value;
      this.setState({
        currencyAVal: newValueA,
        currencyBVal: newValueA * currencyB.sellRate,
      });
      // console.log('currency A');
    } else if (currency === 'B') {
      const newValueB = e.target.value;
      this.setState({
        currencyAVal: newValueB / currencyB.sellRate,
        currencyBVal: newValueB,
      });
      // console.log('changing currency b');
    }
  }

  onSelectCurrency(code) {
    // console.log('selecting currency :' + code);
    const { currencies, currencyAVal } = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0],
      currencyBVal: currencyAVal * currency[0].sellRate,
    });
  }
  render() {
    const { currencies, currencyA, currencyB, currencyAVal, currencyBVal } = this.state;
    return (
      <div className="form">
        <header>
          <h1>Currency Converter</h1>
        </header>

        <div>
          <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
        </div>
        <div>
          <p>
            Exchange Rate € 1 EUR = {currencyB.sign} {currencyB.sellRate} {currencyB.code}
          </p>
        </div>

        <div className="row">
          {/* <h3 className="currency-flag AUD">{currencyA.name}</h3> */}
          {/* Currency A input */}
          <div>
            <span>{currencyA.sign}</span>
            <input
              type="number"
              value={currencyAVal}
              step="1"
              pattern="\d\.\d{2}"
              onChange={e => {
                this.onChangeHandler(e, 'A');
              }}
            />
            <span>EUR</span>
          </div>

          <img src="/equal.png" alt="equal sign"></img>

          {/* <h3>{currencyB.name}</h3> */}
          {
            //Currency B inputs
          }
          <div>
            <span>{currencyB.sign}</span>
            <input
              type="number"
              value={currencyBVal}
              step="1"
              pattern="\d\.\d{2}"
              onChange={e => {
                this.onChangeHandler(e, 'B');
              }}
            />
            <span>{currencyB.code}</span>
          </div>
        </div>
        <p>
          {currencyA.sign} {currencyAVal} {currencyA.name} equals to {currencyB.sign} {currencyBVal}{' '}
          {currencyB.name}
        </p>
      </div>
    );
  }
}

export default App;
