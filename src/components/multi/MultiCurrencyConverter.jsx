import React, { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../../services/currencyService';
import CountrySelector from './CountrySelector';
import CurrencyList from './CurrencyList';
import '../../styles/MultiCurrencyConverter.css';

/**
 * MultiCurrencyConverter Component
 * 
 * This component fetches the exchange rates and displays a list of currency conversion cards.
 * It allows the user to select a country, and based on the selection, the list of conversion cards
 * is filtered.
 * 
 * @param {string} baseCurrency - The base currency code for conversion.
 * @param {number} amount - The amount in the base currency to be converted.
 * 
 * @returns {JSX.Element} A component with a country selector and a list of currency conversions.
 */
const currencyCountryMap = {
  USD: 'United States',
  EUR: 'European Union',
  GBP: 'United Kingdom',
  JPY: 'Japan',
  CAD: 'Canada',
  AUD: 'Australia',
  CHF: 'Switzerland',
  CNY: 'China',
  INR: 'India',
  GHS: 'Ghana',
  ZAR: 'South Africa',
  NGN: 'Nigeria',
  BRL: 'Brazil',
  RUB: 'Russia',
  SGD: 'Singapore',
  HKD: 'Hong Kong',
  NZD: 'New Zealand',
  MXN: 'Mexico',
  MYR: 'Malaysia',
  PHP: 'Philippines',
  THB: 'Thailand',
  KRW: 'South Korea',
  SAR: 'Saudi Arabia',
  ARS: 'Argentina',
  COP: 'Colombia',
  PEN: 'Peru',
  AED: 'United Arab Emirates',
  TRY: 'Turkey',
  IDR: 'Indonesia',
  CLP: 'Chile',
  EGP: 'Egypt',
  KWD: 'Kuwait',
  BDT: 'Bangladesh',
  PKR: 'Pakistan',
  TWD: 'Taiwan',
  VND: 'Vietnam',
  LKR: 'Sri Lanka',
  UAH: 'Ukraine',
  QAR: 'Qatar',
  BOB: 'Bolivia',
  NIS: 'Israel',
  DKK: 'Denmark',
  SEK: 'Sweden',
  NOK: 'Norway',
  ISK: 'Iceland',
  BGN: 'Bulgaria',
  HUF: 'Hungary',
  PLN: 'Poland',
  CZK: 'Czech Republic',
  HRK: 'Croatia',
  RON: 'Romania',
  JOD: 'Jordan',
  OMR: 'Oman',
  TND: 'Tunisia',
  KGS: 'Kyrgyzstan',
  MNT: 'Mongolia',
  AMD: 'Armenia',
  GEL: 'Georgia',
  LBP: 'Lebanon',
  GNF: 'Guinea',
  XOF: 'West Africa',
  YER: 'Yemen',
  MZN: 'Mozambique',
  PYG: 'Paraguay',
  ZMW: 'Zambia',
  ZWD: 'Zimbabwe',
  AFN: 'Afghanistan',
  KMF: 'Comoros',
  CDF: 'Democratic Republic of Congo',
  MGA: 'Madagascar',
  BIF: 'Burundi',
  TMT: 'Turkmenistan',
  GMD: 'Gambia',
  LSL: 'Lesotho',
  MRO: 'Mauritania',
  WST: 'Samoa',
  FKP: 'Falkland Islands',
  PAB: 'Panama',
  LRD: 'Liberia',
  BSD: 'Bahamas',
  KYD: 'Cayman Islands',
  BBD: 'Barbados',
  GTQ: 'Guatemala',
  CUC: 'Cuba',
  BZD: 'Belize',
  SBD: 'Solomon Islands',
  JMD: 'Jamaica',
  GYD: 'Guyana',
  AOA: 'Angola',
  MAD: 'Morocco',
  MUR: 'Mauritius',
  SLL: 'Sierra Leone',
  TZS: 'Tanzania',
  ETB: 'Ethiopia',
  NPR: 'Nepal',
  MMK: 'Myanmar',
  MOP: 'Macau',
  FJD: 'Fiji',
  KHR: 'Cambodia',
  UGX: 'Uganda',
  KZT: 'Kazakhstan',
  AWG: 'Aruba',
  XPF: 'Pacific Islands',
  MDL: 'Moldova',
  MWK: 'Malawi',
  RWF: 'Rwanda',
  BND: 'Brunei',
  DZD: 'Algeria',
};

const MultiCurrencyConverter = ({ baseCurrency, amount }) => {
  const [conversionRates, setConversionRates] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      const data = await fetchExchangeRates(baseCurrency);
      console.log('Fetched conversion rates:', data);
      setConversionRates(data || {});
    };

    fetchRates();
  }, [baseCurrency]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container max-w-6xl mx-auto p-6 bg-white bg-opacity-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-8">
        <CountrySelector
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
          currencyCountryMap={currencyCountryMap}
        />
      </div>
      <CurrencyList
        conversionRates={conversionRates}
        amount={amount}
        baseCurrency={baseCurrency}
        selectedCountry={selectedCountry}
        currencyCountryMap={currencyCountryMap}
      />
    </div>
  );
};

export default MultiCurrencyConverter;
