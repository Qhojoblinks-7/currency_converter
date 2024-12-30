import React from 'react';
import { Line } from 'react-chartjs-2';

const HistoricalChart = ({ historicalData }) => {
  return (
    <>
      <Line data={historicalData} options={{ responsive: true }} />
    </>
  );
};

export default HistoricalChart;
