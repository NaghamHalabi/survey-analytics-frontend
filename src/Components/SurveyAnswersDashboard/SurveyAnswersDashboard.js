import React, { useEffect, useState } from 'react';
import SurveyCard from "../SurveyCard/SurveyCard";
import SearchBar from "../SearchBar/SearchBar";
import APIRoutes from '../../config.js';
import './SurveyAnswersDashboard.css';



import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const SurveyAnswerDashboard = () => {
  const [surveyAnswers, setSurveyAnswers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(APIRoutes.surveyAnswers);

      setSurveyAnswers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (value) => {
    const endpoint = APIRoutes.search;
    const queryString = `?term=${encodeURIComponent(value)}`;
  
    fetch(endpoint + queryString)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSurveyAnswers(data);
        console.log('Search results:', data);
      })
      .catch(error => {
        console.error('Error performing search:', error);
      });
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="dashboard-container">
      {surveyAnswers.map((answer) => (
          <SurveyCard key={uuidv4()} answer={answer} className="dashboard-card" />
      ))}
      </div>
    </>

  );
};

export default SurveyAnswerDashboard;
