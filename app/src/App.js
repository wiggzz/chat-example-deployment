import React from 'react';
import SendForm from './SendForm';
import Messages from './Messages';
import io from 'socket.io-client'

class SocketHolder {
  getSocket() {
    this.socket = this.socket || io();
    return this.socket;
  }
}

const socketHolder = new SocketHolder();

const App = () => <div>
  <Messages socketHolder={socketHolder} />
  <SendForm socketHolder={socketHolder} />
</div>

export default App;
