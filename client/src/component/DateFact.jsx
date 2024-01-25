import React, { useState } from 'react';
import axios from 'axios';
import '../style/MathFact.css'

function DateFact() {
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [fact, setFact] = useState({ text: '' });

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${month}/${date}/date`,
      params: {
        fragment: 'true',
        json: 'true'
      },
      headers: {
        'X-RapidAPI-Key': '3f4add2e16msh2b83f793044be81p1b134ejsnd04a8052f52e',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setFact(response.data);
      setDate("")
      setMonth("")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Date Facts</h1>
      <input
        type="number"
        placeholder="Enter date..."
        
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter month..."
        
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={() => fetchData()}>Get Fact</button>
      <p>{fact.text}</p>
      <span>Note - Date : 1 - 31, Month : 1 - 12</span>
    </div>
  );
}

export default DateFact;
