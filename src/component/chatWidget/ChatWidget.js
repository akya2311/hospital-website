import React, { useState } from 'react';
import './ChatWidget.css'; // You can create a separate CSS file for styles
import ContactForm from './ContactForm'
const ChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mylivechat_inline mylivechat_template5 mylivechat_template_float_right mylivechat_template_float_bottom" style={{ fontFamily: 'Poppins', right: '16px', bottom: '0px' }}>
      {/* Collapsed View */}
      {!isExpanded ? (
        <div className="mylivechat_collapsed" style={{ backgroundColor: 'rgb(2, 117, 216)', color: 'white', minWidth: '180px', userSelect: 'none' }} onClick={toggleChat}>
          <div className="mylivechat_collapsed_text" style={{ fontSize: '15px', color: 'white', textIndent: '9px' }}>
            Leave a message
          </div>
          <div className="mylivechat_sprite" title="Maximize" style={{ cursor: 'pointer', backgroundRepeat: 'no-repeat', maxWidth: '32px', backgroundPosition: '-4px -148px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
              <polygon points="16,10 26,20 24.6,21.4 16,12.8 7.4,21.4 6,20"></polygon>
            </svg>
          </div>
        </div>
      ) : (
        // Expanded View
        <div className="mylivechat_expanded_outer" style={{ userSelect: 'none' }}>
          <div className="mylivechat_expanded" style={{ minHeight: '470px' }}>
            <div className="mylivechat_expanded_title" style={{ backgroundColor: 'rgb(2, 117, 216)', color: 'white' }}>
              <div className="mylivechat_expanded_text" style={{ fontSize: '15px', color: 'white', textIndent: '9px' }}>
                Chat with us
              </div>
              <div className="mylivechat_sprite" title="Minimize" onClick={toggleChat} style={{ cursor: 'pointer', backgroundRepeat: 'no-repeat', maxWidth: '32px', backgroundPosition: '-4px -52px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M11,22c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1s-0.4,1-1,1H11z"></path>
                </svg>
              </div>
              <div className="mylivechat_sprite" title="End Chat" style={{ cursor: 'pointer', display: 'none', backgroundRepeat: 'no-repeat', maxWidth: '32px', backgroundPosition: '-4px -76px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </div>
              <div className="mylivechat_sprite" title="Pop-out" style={{ cursor: 'pointer', display: 'none', backgroundRepeat: 'no-repeat', maxWidth: '32px', backgroundPosition: '-4px -4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <polygon points="10 6 10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6"></polygon>
                </svg>
              </div>
            </div>
            <div className="mylivechat_container" style={{ display: 'none' }}>
              <ContactForm/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
