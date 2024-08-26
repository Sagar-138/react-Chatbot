// src/App.js
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config/config';
import MessageParser from './handlers/MessageParser';
import ActionProvider from './handlers/ActionProvider';
import './App.css';
// import "./customStyle.css"

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="App">
      <button onClick={handleToggleChat} className="chat-button">
        {showChat ? 'Close Chat' : 'Chat with us'}
      </button>

      {showChat && (
        <div className="chatbot-container">
          <Chatbot 
            config={config} 
            messageParser={MessageParser} 
            
            actionProvider={ActionProvider} 
          />
          
        </div>
      )}
    </div>
  );
}

export default App;
