import React, { useEffect, useState } from 'react';
import QcmQuestionVisualizer from '../QcmQuestionVisualizer/QcmQuestionVisualizer';
import axios from 'axios';
import './AggregatedDataVisualizer.css';
import APIRoutes from '../../config.js';


const AggregatedDataVisualizer = () => {
  const [qcmQuestions, setQcmQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIRoutes.aggregatedData);
        const qcmQuestions = Object.values(response.data)
          .filter(question => question.type === 'qcm')
          .map(question => ({
            type: question.type,
            label: question.label,
            result: question.result
          }));
        setQcmQuestions(qcmQuestions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      {qcmQuestions.length > 0 && (
        <QcmQuestionVisualizer question={qcmQuestions[0]} />
      )}
    </div>
  );
};

export default AggregatedDataVisualizer;
