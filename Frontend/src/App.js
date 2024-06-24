import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import CustomGPT from './Components/CustomGPT';
import Question from './Components/Question';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Components/Quiz';

function App() {


  return (
    <div>
      <Navbar />
      <main className="mt-5">
        <section id="customGPT" className="pt-12">
          <Routes>
          <Route path="/" exact element={<CustomGPT />} />
            <Route path="/customGPT" exact element={<CustomGPT />} />
            <Route path="/quiz" exact element={<Quiz></Quiz>} />
            <Route path="/quiz-question" exact element={<Question/>} />
          </Routes>



        </section>
      </main>
    </div>



  );
}

export default App;
