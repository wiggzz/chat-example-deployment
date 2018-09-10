import React from 'react';
import generateName from 'sillyname';

class SendForm extends React.Component {
  constructor(props) {
    super(props)
    this.socketHolder = props.socketHolder;
    this.send = this.send.bind(this);
    this.messageBox = React.createRef();
    this.name = generateName();
  }

  componentDidMount() {
    this.socket = this.socketHolder.getSocket();
  }

  send(event) {
    this.socket.emit('chat message', {
      name: this.name,
      message: this.messageBox.current.value
    });
    this.messageBox.current.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input type="text" ref={this.messageBox} />
        <button onClick={this.send} >Send</button>
      </form>
    );
  }
}

export default SendForm