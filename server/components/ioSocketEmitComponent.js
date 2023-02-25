const socket = require('../socket')

async function test(req, res) {
  const connection = socket.connection()

  if (connection) {
    connection.emit('my broadcast', `server: hello from test component`)
  }

  res.status(200).send('ok')
}


module.exports = {
  test
}