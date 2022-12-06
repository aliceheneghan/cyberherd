// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SearchResults() {

   const data = axios.get(`http://localhost:4000/api/events/`);

   console.log(data)



}