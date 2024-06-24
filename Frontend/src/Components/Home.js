import React,{ useState } from 'react'

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [customData, setCustomData] = useState('');
  
    const sendMessage = async () => {
      const response = await fetch('http://localhost:8000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      setMessages([...messages, { user: input, bot: data.message }]);
      setInput('');
    };
  
    const sendCustomData = async () => {
      const response = await fetch('http://localhost:8000/api/custom-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: customData })
      });
      const data = await response.json();
      alert(data.message);
    };
  
    return (
      <div className="App">
        <div>
          <textarea
            value={customData}
            onChange={(e) => setCustomData(e.target.value)}
            placeholder="Enter custom data here"
            rows="10"
            cols="50"
          />
          <button onClick={sendCustomData}>Send Custom Data</button>
        </div>
        <div className="chatbox">
          {messages.map((msg, index) => (
            <div key={index}>
              <div><b>User:</b> {msg.user}</div>
              <div><b>Bot:</b> {msg.bot}</div>
            </div>
          ))}
        </div>
        
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    );
}


