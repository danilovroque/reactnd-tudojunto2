import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMensagem extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };
  
 handleMensagem = (message) => {
   this.setState((current) => ({
     text: message
   }));
 };

  isDisabled = () => {
    return this.state.text === '';
  };

  addMessage = (ev) => {
    ev.preventDefault();
    this.handleMensagem('');
    this.props.onAddMessage(this.props.user.username, this.state.text);
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your message..." 
            value={this.state.text}
            onChange={(event) => this.handleMensagem(event.target.value)} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddMensagem;