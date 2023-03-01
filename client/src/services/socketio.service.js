import { io } from 'socket.io-client'

const URL = "http://localhost:4000"

class SocketioService {
  socket
  constructor() {}

  setupSocketConnection() {
    this.socket = io(URL, {
      withCredentials: true
    })

    this.socket.emit('my message', 'Hello there from Vue.')

    this.socket.on('my broadcast', (data) => {
      console.log(data)
    })
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect()
    }
  }
}

export default new SocketioService()