import React, { useState } from 'react';
import './ConvertResult.css'

function ConvertResult({ result, altCurrency, fixedAmount }) {

  if (result) {
    return (
      <div className="ui segment">
        <label>Convert results:</label>
        <p className="results">
          {fixedAmount} {altCurrency[0]} to {altCurrency[1]} is - {result} {altCurrency[1]}
        </p>
      </div>
    );
  }
}

export default ConvertResult
