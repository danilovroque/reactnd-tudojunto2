import React from 'react';
import PropTypes from 'prop-types';
import MensagensHistorico from './MensagensHistorico.js';
import AddMensagem from './AddMensagem.js';

const ChatJanela = (props) => {
  const { messages, user } = props;
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
        <MensagensHistorico messages={messages} user={user} />
        <AddMensagem onAddMessage={props.onAddMessage} user={user} />
       </div>
  )
}

ChatJanela.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onAddMessage: PropTypes.func.isRequired
}

export default ChatJanela;