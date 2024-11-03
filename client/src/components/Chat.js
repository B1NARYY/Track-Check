import React from 'react';
import './Chat.css';

const Chat = () => {
    return (
        <div className="chat-container">
            <h2>Chat</h2>
            <div className="messages">
                {/* Zde se budou zobrazovat zprávy */}
            </div>
            <input type="text" placeholder="Napište zprávu..." />
            <button>Odeslat</button>
        </div>
    );
};

export default Chat;