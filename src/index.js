import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SurveyList from './Components/SurveyList/SurveyList';
import Layout from './Components/Layout/Layout';
import SurveyAnswersDashboard from './Components/SurveyAnswersDashboard/SurveyAnswersDashboard';
import QcmQuestionVisualizer from './Components/QcmQuestionVisualizer/QcmQuestionVisualizer';
import AggregatedDataVisualizer from './Components/AggregatedDataVisualizer/AggregatedDataVisualizer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <SurveyAnswersDashboard/>
      <SurveyList/>
      <AggregatedDataVisualizer/>
    </Layout>
  </React.StrictMode>
);
