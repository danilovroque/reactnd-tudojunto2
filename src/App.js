import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatJanela from './ChatJanela.js';

const users = [{ username: 'Danilo' }, { username: 'Vanderlei' }]

class App extends Component {
  
  state = {
    messages: []
  }

  isDisabled = () => {
    return false;
  };

  addMessage = (username, message) => {
    const newMessage = { username: username, text: message };
    
    this.setState((current) => ({
      messages: [...current.messages, newMessage]
    }))
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {
             users.map((user) => (
               <ChatJanela key={user.username} user={user} messages={messages} onAddMessage={this.addMessage} />
             ))
          }
        </div>
      </div>
    );
  }
}

export default App;
