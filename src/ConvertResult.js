import React, { useState } from 'react';
import './ConvertResult.css'

function ConvertResult({ result, toCurrency }) {

  if (result) {
    return (
      <div className='ui segment'>
        <label>Convert results:</label>
        <p className='results'>{result} {toCurrency}</p>
      </div>
    )
  }
}

export default ConvertResult
