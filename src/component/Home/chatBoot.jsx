import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';

const ChatbotComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleMessageSubmit = (e) => {
      e.preventDefault();
  
      if (inputValue.trim() !== '') {
        // Add user message to the state
        setMessages([...messages, { text: inputValue, sender: 'user' }]);
  
        // Clear input field
        setInputValue('');
      }
    };

  return (
    <div className="App">
    <h1>Chatbot</h1>
    <div className="message-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
        >
          {message.text}
        </div>
      ))}
    </div>
    <form onSubmit={handleMessageSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  </div>
);
};


export default ChatbotComponent;
