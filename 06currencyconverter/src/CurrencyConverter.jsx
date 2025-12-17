import React from "react";
import { useState } from "react";

const CurrencyConverter = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const currencyobject ={
  //     USD: 1,
  //   INR: 83,
  //   EUR: 0.92,
  //   GBP: 0.81
  // }

  // const conveted=(inputAmount / currencyobject[fromCurrency]) * currencyobject[toCurrency];

  // function handleConvert() {
  //   setConvertedAmount(conveted.toFixed(2));
  // }

  async function convert(inputAmount, fromCurrency, toCurrency) {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.frankfurter.dev/v1/latest?amount=" +
          inputAmount +
          "&from=" +
          fromCurrency +
          "&to=" +
          toCurrency
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const result = data.rates[toCurrency];
      setConvertedAmount(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }

    // let newConvertedAmount = await fetch(`https://api.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`)
    // .then((res)=>res.json())
    // .then((data)=>data.rates[toCurrency] * inputAmount);
    // setConvertedAmount(newConvertedAmount.toFixed(2));
  }

  return (
    <div>
      <label>Amount:</label>
      <input
        type="text"
        placeholder="Enter the amount"
        className="border p-2 ml-2"
        onChange={(e) => setInputAmount(e.target.value)}
      />
      <label>From</label>
      <select
        id="from-currency"
        className="border p-2 ml-2"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <label>To</label>
      <select
        id="to-currency"
        className="border p-2 ml-2"
        value={toCurrency}
        onChange={(x) => {
          setToCurrency(x.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 ml-2 hover:bg-blue-600 disabled:bg-red-400
    disabled:opacity-60
    disabled:cursor-not-allowed"
        onClick={() => convert(inputAmount, fromCurrency, toCurrency)}
        disabled={isLoading}
      >
        Convert
      </button>

      {isLoading && <p>Converting...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <p>Amount: {inputAmount}</p>
      <p>From: {fromCurrency}</p>
      <p>To: {toCurrency}</p>

      {convertedAmount && !isLoading && !error && (
        <p>Converted Amount: {convertedAmount}</p>
      )}
    </div>
  );
};

export default CurrencyConverter;
