module.exports = (socket) => {

  socket.on('my message', (msg) => {
    console.log('message: ' + msg)
  })
}