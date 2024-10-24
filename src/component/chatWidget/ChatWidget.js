import React, { useState } from 'react';
import './ChatWidget.css';
import ContactForm from './ContactForm';

const ChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="chat-widget">
      {/* Collapsed View */}
      {!isExpanded ? (
        <div className="chat-collapsed" onClick={toggleChat}>
          <span>Leave a message</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
            <polygon points="16,10 26,20 24.6,21.4 16,12.8 7.4,21.4 6,20"></polygon>
          </svg>
        </div>
      ) : (
        <div className="chat-expanded">
          <div className="chat-header">
            <span>Chat with us</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" onClick={toggleChat} viewBox="0 0 32 32">
              <path d="M11,22c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1s-0.4,1-1,1H11z"></path>
            </svg>
          </div>
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
