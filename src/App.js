import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="chat">
            <div class="chat-title">
            <h1>Fabio Ottaviani</h1>
            <h2>Supah</h2>
            </div>
            <div class="messages">
            <div class="messages-content"></div>
            </div>
            <div class="message-box">
            <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
            <button type="submit" class="message-submit">Send</button>
            </div>
            </div>
        <div class="bg"></div>
      </div>
    );
  }
}

export default App;
