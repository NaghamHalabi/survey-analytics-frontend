import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './QcmQuestionVisualizer.css';

const QcmQuestionVisualizer = ({ question }) => {
  
  console.log('question')
  console.log(question)
  const { label, result } = question;
  console.log(result)
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      console.log('result')
      console.log(result)
      const labels =  Object.getOwnPropertyNames(result);
      const data = Object.values(result);

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Product Count',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              precision: 0,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [result]);

  return (
    <div className="container">
      <h3>{label}</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default QcmQuestionVisualizer;
