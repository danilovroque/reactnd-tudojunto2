import React from 'react';
import PropTypes from 'prop-types';

const MensagensHistorico = (props) => {
  const { messages, user } = props;
  
  return (
    <div className='messages'>
      <ul className="message-list">
       {messages.map((message, index) => (
         <li
           key={index}
           className={
             message.username === user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

MensagensHistorico.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
}

export default MensagensHistorico;