import React from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.socketHolder = props.socketHolder;
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.socket = this.socketHolder.getSocket();
    this.socket.on('chat message', (msg) => {
      this.setState(state => ({
        messages: [...state.messages, msg]
      }));
    })
  }

  render() {
    return (
      <div>
        { this.state.messages.map(m => (
          <div>
            <span>{ m.name }: </span>
            <span>{ m.message }</span>
          </div>
        )) }
      </div>
    )
  }
}

export default Messages;