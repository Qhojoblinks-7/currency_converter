

# Currency Converter Application

This application allows users to convert currencies and view historical exchange rates for different currency pairs. It also displays the current exchange rate and the date of the last update. The application is built using React and styled with Tailwind CSS.

## Features

- Convert between different currencies.
- Display current exchange rates for selected currency pairs.
- Show the last updated date for the exchange rates.
- Fetch historical exchange rates for specified date ranges.
- Fetch and display flag information for base and target currencies.
- Style the application with Tailwind CSS for a modern, responsive UI.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Tailwind CSS

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Qhojoblinks-7/currency_converter.git
   ```

2. Navigate to the project directory:

   ```sh
   cd currency-converter
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following environment variables:

   ```sh
   VITE_EXCHANGERATE_API_KEY=your_exchange_rate_api_key
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Project Structure

- `src/components/CurrencyConverter.jsx`: Contains the main component for currency conversion.
- `src/components/HistoricalRates.jsx`: Contains the component for displaying historical exchange rates.
- `src/services/historyService.js`: Handles API requests to fetch exchange rates and currency information.

## Services

### `historyService.js`

Handles API requests using Axios and LRU cache.

#### Functions

- `fetchCurrencyInfo(currencyCode)`: Fetches currency information including flag URL.
- `fetchExchangeRates(baseCurrency)`: Fetches the latest exchange rates for the base currency.
- `fetchHistoricalRates(baseCurrency, targetCurrency, startDate, endDate)`: Fetches historical exchange rates for the specified date range.

### Components

#### `CurrencyConverter.jsx`

Renders the currency conversion interface.

##### Hooks

- `useState()`: Manages state for base and target currencies, input amounts, and conversion results.
- `useEffect()`: Fetches data when the component mounts or dependencies change.

##### Elements

- Input fields for entering amounts to be converted.
- Dropdowns for selecting base and target currencies.
- Display for the converted amount.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchExchangeRates, fetchCurrencyInfo } from '../services/historyService';

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);
  const [baseCurrencyInfo, setBaseCurrencyInfo] = useState(null);
  const [targetCurrencyInfo, setTargetCurrencyInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrencyInfoData(baseCurrency, setBaseCurrencyInfo);
    fetchCurrencyInfoData(targetCurrency, setTargetCurrencyInfo);
    convertCurrency();
  }, [baseCurrency, targetCurrency, amount]);

  const fetchCurrencyInfoData = async (currencyCode, setCurrencyInfo) => {
    try {
      const data = await fetchCurrencyInfo(currencyCode);
      setCurrencyInfo(data);
    } catch (error) {
      setError('Failed to fetch currency info: ' + error.message);
      console.error('Error fetching currency info:', error);
    }
  };

  const convertCurrency = async () => {
    try {
      const exchangeRates = await fetchExchangeRates(baseCurrency);
      const result = amount * exchangeRates[targetCurrency];
      setConversionResult(result.toFixed(2));
    } catch (error) {
      setError('Failed to convert currency: ' + error.message);
      console.error('Error converting currency:', error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="base-currency" className="block text-sm font-medium text-gray-700">Base Currency:</label>
          <select
            id="base-currency"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {Object.keys(defaultCurrencyCountryMap).map(currency => (
              <option key={currency} value={currency}>{defaultCurrencyCountryMap[currency]} ({currency})</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="target-currency" className="block text-sm font-medium text-gray-700">Target Currency:</label>
          <select
            id="target-currency"
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {Object.keys(defaultCurrencyCountryMap).map(currency => (
              <option key={currency} value={currency}>{defaultCurrencyCountryMap[currency]} ({currency})</option>
            ))}
          </select>
        </div>
        {conversionResult && (
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-2">Conversion Result</h2>
            <p className="text-lg">{amount} {baseCurrency} = {conversionResult} {targetCurrency}</p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
```

#### `HistoricalRates.jsx`

Renders the historical exchange rates and current exchange rate information.

##### Hooks

- `useState()`: Manages state for base and target currencies, exchange rates, historical data, etc.
- `useEffect()`: Fetches data when the component mounts or dependencies change.

##### Components

- Input fields for selecting start and end dates.
- Dropdowns for selecting base and target currencies.
- Display for the current exchange rate and last updated date.
- Chart for displaying historical exchange rates.

### Styling

The application is styled using Tailwind CSS for a modern, responsive user interface.

- **Container and Header**: Centered with padding.
- **Form Elements**: Styled using Tailwind's input and select classes.
- **Current Exchange Rate**: Displayed in a card with shadow and rounded corners.
- **Error Messages**: Displayed in red text.

### Example Usage

```jsx
import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import HistoricalRates from './components/HistoricalRates';

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
      <HistoricalRates />
    </div>
  );
}

export default App;
```

## Built With

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Exchange Rate API](https://exchangerate-api.com/)
- [Free Currency API](https://freecurrencyapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
