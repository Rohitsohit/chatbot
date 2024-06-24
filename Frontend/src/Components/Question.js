import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Human"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
];

const Question = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionIndex, value) => {
    setSelectedValues({ ...selectedValues, [questionIndex]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="relative flex justify-center items-start min-h-screen bg-gray-100 p-4">
      <div className="absolute top-4 left-4 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Summary</h2>
        <p className="text-sm">This is the summary text below the heading.</p>
      </div>
      <div className="flex flex-col p-4 bg-white text-black rounded-lg shadow-lg w-100">
        {questions.map((q, index) => (
          <div key={index} className="mb-4 w-full">
            <div className="flex items-center justify-between mb-2 w-full">
              <div className="text-lg font-extrabold text-gray-800">{q.question}</div>
              <div className="bg-black text-white p-1 rounded text-xs font-semibold">Question {index + 1}</div>
            </div>
            <div className="flex flex-col w-full">
              {q.options.map((option, optIndex) => (
                <div key={optIndex}>
                  <input
                    type="radio"
                    id={`q${index}-value-${optIndex}`}
                    name={`quiz-${index}`}
                    value={option}
                    className="hidden"
                    onChange={() => handleChange(index, option)}
                  />
                  <label
                    htmlFor={`q${index}-value-${optIndex}`}
                    className={`flex bg-white p-3 mt-2 text-sm font-semibold rounded-lg cursor-pointer border ${selectedValues[index] === option ? 'border-red-500 text-red-500' : 'border-gray-200'}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {submitted && (
              <div className={`mt-2 font-semibold text-xs transition-all ${selectedValues[index] === q.correctAnswer ? 'text-green-500 flex' : 'hidden'}`}>
                Success!
              </div>
            )}
            {submitted && selectedValues[index] && selectedValues[index] !== q.correctAnswer && (
              <div className={`mt-2 font-semibold text-xs transition-all text-red-500 flex`}>
                Error! The correct answer is {q.correctAnswer}.
              </div>
            )}
          </div>
        ))}
        
        <button
          onClick={handleSubmit}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Question;
