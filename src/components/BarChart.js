import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ date }) => {
  const data = {
    labels: ['user_1', 'user_2', 'user_3', 'user_4'],
    datasets: [
      {
        label: `Data for ${date}`,
        data: [1, 2, 3, 4],  // Replace with actual data
        backgroundColor: 'rgba(75,192,192,0.6)'
      }
    ]
  };

  return <Bar data={data} />;
};

export default BarChart;
