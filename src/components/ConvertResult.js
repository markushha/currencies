import React from 'react';
import './ConvertResult.css'

function ConvertResult({ result, altCurrency, fixedAmount }) {
  const finalRes = Math.round(parseFloat(result) * 100) / 100;

  if (result) {
    return (
      <div className="ui segment">
        <label>Convert results:</label>
        <p className="results">
          {fixedAmount} {altCurrency[0]} to {altCurrency[1]} is - {finalRes} {altCurrency[1]}
        </p>
      </div>
    );
  }
}

export default ConvertResult
