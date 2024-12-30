import React from 'react';

const CurrencyInput = ({ amount, setAmount }) => {
  return (
    <div className="mb-4">
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default CurrencyInput;
