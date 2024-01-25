import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DateFact from './component/DateFact';
import MathFact from './component/MathFact';
import RandomFact from './component/RandomFact';
import TriviaFact from './component/TriviaFact';
import YearFact from './component/YearFact';
import Home from './component/Home';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={showMenu ? 'show' : ''} onClick={(e) => e.stopPropagation()}>
            <li>
              <Link to="/date">DateFact</Link>
            </li>
            <li>
              <Link to="/math">MathFact</Link>
            </li>
            <li>
              <Link to="/random">RandomFact</Link>
            </li>
            <li>
              <Link to="/trivia">TriviaFact</Link>
            </li>
            <li>
              <Link to="/year">YearFact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/date" element={<DateFact />} />
          <Route path="/math" element={<MathFact />} />
          <Route path="/random" element={<RandomFact />} />
          <Route path="/trivia" element={<TriviaFact />} />
          <Route path="/year" element={<YearFact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
