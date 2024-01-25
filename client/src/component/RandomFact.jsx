import React, { useState } from 'react';
import axios from 'axios';
import '../style/RandomFact.css'

function RandomFact() {
  const [fact, setFact] = useState({ text: '', number : '' });
  const [option, setOption] = useState('trivia');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/random/${option}`,
      params: {
        min: '10',
        max: '40',
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Random Facts</h1>

      <label>
        Select Option:
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="math">Math</option>
          <option value="trivia">Trivia</option>
          <option value="year">Year</option>
        </select>
      </label>

      <button onClick={() => fetchData()}>Get Fact</button>
      <p>{fact.text} {fact.number}</p>
    </div>
  );
}

export default RandomFact;
