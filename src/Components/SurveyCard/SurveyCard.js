import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './SurveyCard.css';
import imageMap from '../../utils/imageMap';

const SurveyCard = ({ answer }) => {
  const questions = answer.questions;

  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="140"
        image={imageMap[answer.survey.name]}  // || default image
        alt={answer.survey.name}
        className="card-media"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {answer.survey.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {answer.survey.code}
        </Typography>

        {/* Render the questions */}
        {questions.map((question, index) => (
          <div key={index}>
            <Typography variant="subtitle1" component="div">
              {question.label}
            </Typography>
            {Array.isArray(question.answer) ? (
              <ul>
                {question.answer.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {question.answer}
              </Typography>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SurveyCard;
