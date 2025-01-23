import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import events from '../data/sampleData.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ date }) => {
  const dataForDate = events[date] || [];

  const data = {
    labels: dataForDate.map((data, index) => `user_${index + 1}`),
    datasets: [
      {
        label: `Data for ${date}`,
        data: dataForDate.map((data) => Object.values(data)[0]),
        backgroundColor: 'rgba(75,192,192,0.6)'
      }
    ]
  };

  return <Bar data={data} />;
};

export default BarChart;
