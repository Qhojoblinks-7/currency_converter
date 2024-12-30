import React from 'react';

const FlipButton = ({ handleFlipCurrencies }) => {
  return (
    <button
      onClick={handleFlipCurrencies}
      className="mt-6 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
    >
      Flip Currencies
    </button>
  );
};

export default FlipButton;
