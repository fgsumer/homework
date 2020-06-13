import React from 'react';

const SelectCurrency = props => {
  const { onSelectCurrency, currencies } = props;

  const filteredCurrencies = currencies.filter(currency => currency.code !== 'EUR');

  return (
    <div>
      <h2>Select Currency</h2>
      <select onChange={e => onSelectCurrency(e.target.value)}>
        {filteredCurrencies.map(currency => {
          return (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCurrency;
