
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './calculator1';
import './index.css'

function Home() {
  const [classTime, setClassTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClassTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>  Calculator </h1>
        <p> GOT A PROBLEM IN CALCULATION DON'T WORRY WE GOT YOU COVERED</p>
      </header>
      <main>
        <div className="go-to-calculator">
          <Link to="/calculator">
            <button>Go to Calculator</button>
          </Link>
        </div>
      </main>
      <footer>
        <div className="time-info time-box">
          <div className='timespent-content'>
            <span className="block text-2xl font-bold box">{classTime} seconds</span>
            <span className="block text-gray-900">Time Spent on the Home Page</span>
          </div>
        </div>
        <p>Contact: aditya1raj003@gmail.com</p>
        <p>GitHub: <a href="https://github.com/suneater003" target="_blank" rel="noopener noreferrer">github.com/suneater003</a></p>
      </footer>
    </div>
  );
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>
);

export default App;
