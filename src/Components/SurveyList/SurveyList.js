import React, { useEffect, useState } from 'react';
import axios from 'axios';
import APIRoutes from '../../config.js';
import './SurveyList.css';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(APIRoutes.list);
        setSurveyData(response.data.original);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container className='surveyList'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="tableHeader">
            <TableRow>
              <TableCell className="tableCell">Code</TableCell>
              <TableCell className="tableHeader">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveyData.map((item) => (
              <TableRow key={item.code}>
                <TableCell className="tableCell">{item.code}</TableCell>
                <TableCell className="tableCell">{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

  );
};

export default SurveyList;

