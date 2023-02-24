const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(
//   cors({
//     credentials: true,
//     // origin: "http://localhost:3000",
//   })
// )

const routes  = require('./routes/routes')

app.use(routes)

const port = 4000
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', () => {
  console.log('io connected')
})

server.listen(port, () => console.log(`Server started on port ${port}`))