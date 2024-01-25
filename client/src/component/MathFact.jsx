import React, { useState } from 'react';
import axios from 'axios';
import "../style/MathFact.css"

function MathFact() {
  const [number, setNumber] = useState(0);
  const [fact, setFact] = useState({ text: '' });

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${number}/math`,
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
      setNumber("")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Math Facts</h1>
      <input
        type="number"
        placeholder="Enter Number..."
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button onClick={() => fetchData()}>Get Fact</button>
      <p>{fact.text}</p>
      <span>(e.g). number : 5</span>
    </div>
  );
}

export default MathFact;
