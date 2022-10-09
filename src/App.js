import React, { useState } from "react";
import client from "./clients/client";
import Convert from "./components/Convert";
import ConvertResult from "./components/ConvertResult";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KZT");
  const [altCurrency, setAltCurrency] = useState([fromCurrency, toCurrency]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [fixedAmount, setFixedAmount] = useState(amount);
  const [response, setResponse] = useState({});

  const currencySearch = async () => {
    if (amount && amount > 0) {
      const response = await client.get("/convert", {
        params: {
          from: fromCurrency,
          to: toCurrency,
          amount: amount
        },
      });
      setResponse(response);
      setResult(response.data.result);
      setAltCurrency([fromCurrency, toCurrency]);
      setFixedAmount(amount);
    }
  };

  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <div className="ui container">
          <div className="content">
            <Convert
              currencySearch={currencySearch}
              setToCurrency={setToCurrency}
              setFromCurrency={setFromCurrency}
              setAmount={setAmount}
              fromCurrency={fromCurrency}
            />
            <ConvertResult
              result={result}
              toCurrency={toCurrency}
              altCurrency={altCurrency}
              fixedAmount={fixedAmount}
            />
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
