const socket = require('../socket')

async function test(req, res) {
  const connection = socket.connection()

  if (connection) {
    connection.emit('my broadcast', `server: hello from test component`)
  }

  res.status(200).send('test')
}

async function auth(req, res) {
  res.cookie('accessToken', 'helo', {
    maxAge: 900000, // 15 minutes
    // httpOnly: true,
    // sameSite: true,
    // secure: true
  })

  res.cookie('refreshToken', 'world', {
    maxAge: 900000, // 15 minutes
    // httpOnly: true,
    // sameSite: true,
    // secure: true
  })

  res.status(200).send('auth')
}


module.exports = {
  test,
  auth
}