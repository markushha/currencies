import React, { useState } from "react";
import client from "./client";
import Convert from "./Convert";
import ConvertResult from "./ConvertResult";
import "./App.css";

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KZT");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [response, setResponse] = useState({});

  const currencySearch = async () => {
    if (amount) {
      const response = await client.get("/convert", {
        params: {
          from: fromCurrency,
          to: toCurrency,
          amount: amount
        },
      });
      setResponse(response);
      setResult(Math.round(parseFloat(response.data.result) * 100) / 100);
    }
  };

  return (
    <div className="ui container">
      <div className="content">
        <Convert
          currencySearch={currencySearch}
          setToCurrency={setToCurrency}
          setFromCurrency={setFromCurrency}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
        />
        <ConvertResult result={result} toCurrency={toCurrency} />
      </div>
    </div>
  );
}

export default App;
