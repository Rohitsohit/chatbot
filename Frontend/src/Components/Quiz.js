import React from 'react';

export default function Quiz() {
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
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
