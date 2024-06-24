import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Quiz() {
  const [numberOfQuizzes, setNumberOfQuizzes] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const history = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadstart = () => {
          setUploadProgress(0);
        };
        reader.onprogress = (data) => {
          if (data.lengthComputable) {
            const progress = Math.round((data.loaded / data.total) * 100);
            setUploadProgress(progress);
          }
        };
        reader.onloadend = () => {
          setFileUploaded(true);
          sendCustomData(reader.result)
        };
        reader.readAsText(file);
      }
  };
  const handleQuizNumberChange = (e) => {
    setNumberOfQuizzes(e.target.value);
  };
  const sendCustomData = async (customData) => {
    const response = await fetch('http://localhost:8000/api/custom-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: customData })
    });
    const data = await response.json();
    //setMessages(prevMessages => [...prevMessages, { user: 'Bot', text: data.message }]);
    // alert(data.message);
  };

  const handleSubmit = async () => {
      try {       
          const quizResponse = await axios.post('http://localhost:8000/api/quiz', {
            numberOfQuestions: numberOfQuizzes,
          });
          console.log(quizResponse.data.jsonData)
          history('/quiz-question', { state: { questions: quizResponse.data.jsonData } });
             
      } catch (error) {
        console.error('Error uploading file or generating quiz:', error);
      }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
            Upload File
          </label>
          <input
            type="file"
            id="fileUpload"
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleFileUpload}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quizNumber">
            Number of quizzes to generate
          </label>
          <input
            type="number"
            id="quizNumber"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter number"
            value={numberOfQuizzes}
            onChange={handleQuizNumberChange}
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
