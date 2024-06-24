import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);


  
    const [input, setInput] = useState('');
    

    const sendMessage = async () => {
        setMessages([...messages, { user: 'User 1', text: message }]);
        const response = await fetch('http://localhost:8000/api/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: message })
        });
        const data = await response.json();
        
         setMessages([...messages, { user: 'User 2', text: data.message }]);
        setInput('');
      };


      const sendCustomData = async (customData) => {
        const response = await fetch('http://localhost:8000/api/custom-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: customData })
        });
        const data = await response.json();
        alert(data.message);
      };




  const handleSendMessage = () => {
    console.log(message)
    if (message.trim() !== "") {
      setMessages([...messages, { user: "User 1", text: message }]);
      setMessage("");
    }
  };

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
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

  return (
    <div className="flex flex-col h-screen w-full md:w-1/2 mx-auto p-4 border rounded shadow-md">
      {!fileUploaded ? (
        <div className="flex flex-col items-center justify-center h-full">
          <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white text-blue-700 ease-linear transition-all duration-150">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 11.74a1 1 0 00-.68-.74l-3.45-.86-1.55-3.1a1 1 0 00-1.8 0l-1.55 3.1-3.45.86a1 1 0 00-.68.74 1 1 0 00.18.87l2.5 2.44-.58 3.43a1 1 0 001.45 1.05L10 17.57l3.09 1.63a1 1 0 001.45-1.05l-.58-3.43 2.5-2.44a1 1 0 00.18-.87zM10 14.45V6a1 1 0 10-2 0v8.45l-2.17-1.14-.5 3a1 1 0 001.45 1.05L10 17.57l2.22 1.16a1 1 0 001.45-1.05l-.5-3L10 14.45z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Upload File</span>
            <input
              type="file"
              className="hidden"
              onChange={handleUploadFile}
            />
          </label>
          {uploadProgress > 0 && (
            <div className="w-full bg-gray-200 rounded-full mt-4">
              <div
                className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col flex-grow h-96 p-4 overflow-y-auto bg-gray-100 rounded">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.user === "User 1" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`${
                    msg.user === "User 1" ? "bg-blue-500" : "bg-gray-300"
                  } text-white p-2 rounded max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
