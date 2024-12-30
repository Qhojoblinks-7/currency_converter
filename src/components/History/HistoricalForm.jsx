import React from 'react';

const HistoricalForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  baseCurrency,
  setBaseCurrency,
  targetCurrency,
  setTargetCurrency,
  currencyCountryMap
}) => {
  return (
    <div className="historical-rates-form">
      <label htmlFor="start-date" className="historical-rates-label">Start Date:</label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="historical-rates-input"
      />
      <label htmlFor="end-date" className="historical-rates-label">End Date:</label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="historical-rates-input"
      />
      <label htmlFor="base-currency" className="historical-rates-label">Base Currency:</label>
      <div className="currency-select-container">
        <select
          id="base-currency"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="historical-rates-select"
        >
          {Object.keys(currencyCountryMap).map(currency => (
            <option key={currency} value={currency}>
              {currencyCountryMap[currency].country} ({currency})
            </option>
          ))}
        </select>
        {currencyCountryMap[baseCurrency] && (
          <img
            src={currencyCountryMap[baseCurrency].flag}
            alt={`${baseCurrency} flag`}
            className="currency-flag"
          />
        )}
      </div>
      <label htmlFor="target-currency" className="historical-rates-label">Target Currency:</label>
      <div className="currency-select-container">
        <select
          id="target-currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          className="historical-rates-select"
        >
          {Object.keys(currencyCountryMap).map(currency => (
            <option key={currency} value={currency}>
              {currencyCountryMap[currency].country} ({currency})
            </option>
          ))}
        </select>
        {currencyCountryMap[targetCurrency] && (
          <img
            src={currencyCountryMap[targetCurrency].flag}
            alt={`${targetCurrency} flag`}
            className="currency-flag"
          />
        )}
      </div>
    </div>
  );
};

export default HistoricalForm;
