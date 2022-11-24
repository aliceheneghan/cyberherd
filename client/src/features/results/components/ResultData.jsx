// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ResultData() {
    const { date } = useParams();
  
    const getEvents = async () => {
      const { data } = await axios.get(`http://localhost:4000/api/events`);
    };
  
    useEffect(() => {
      getEvents();
    }, []);
  
    // console.log(events[0]);
  
    return (
      <div>
        <h1>Results</h1>
      </div>
    );
  }