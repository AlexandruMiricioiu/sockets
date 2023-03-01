let connection = null

class Socket {
  socket

  constructor() {
    this.socket = null
  }

  connect(server) {
    const io = require('socket.io')(server, {
      cors: {
        origin: "http://localhost:8080",
        credentials: true
      },
    })

    io.use((socket, next) => {
      console.log(socket.handshake.headers.cookie)

      next()
    })

    io.on('connection', (socket) => {
      this.socket = socket

      console.log('a user connected')

      socket.on('disconnect', () => {
        console.log('user disconnected')
      })

      require('./components/ioSocketOnModule')(socket)
    })
  }

  emit(event, data) {
    this.socket.emit(event, data)
  }

  static init(server) {
    if (!connection) {
      connection = new Socket()
      connection.connect(server)
    }
  }

  static getConnection() {
    if (connection) {
      return connection;
    }
  }
}


module.exports = {
  connect: Socket.init,
  connection: Socket.getConnection
}