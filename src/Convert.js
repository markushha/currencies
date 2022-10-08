import React from "react";
import "./Convert.css";

function Convert({
  currencySearch,
  setFromCurrency,
  setToCurrency,
  setAmount,
  fromCurrency,
}) {
  return (
    <div className="ui form">
      <div className="flexbox">
        <div className="left-side">
        <div class="field">
          <label>Enter amount of {fromCurrency} you want to convert</label>
          <input
            type="text"
            placeholder="Enter value..."
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="ui button" onClick={() => currencySearch()}>
        Convert
      </button>
        </div>
        
        <div className="options">
          <div className="selector">
            <select onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
              <option value="KZT">KZT</option>
              <option value="CNY">CNY</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
              <option value="THB">THB</option>
            </select>
          </div>
          <div className="selector">
            <select className="to-selector" onChange={(e) => setToCurrency(e.target.value)}>
              <option value="KZT">KZT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
              <option value="CNY">CNY</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
              <option value="THB">THB</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;
