const express = require('express')

const server = express()
const bodyParser = require('body-parser')
const db = require('./db')
const user = require('./routes/user')

server.use(bodyParser.json())

server.use(bodyParser.urlencoded({extended: false}))

server.use('/api/user', user)

// catch 404 and forward to error handler
server.use((req, res, next) => {
  const err = new Error('404 Not Found')
  err.status = 404
  next(err)
})

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {error: err.message}
  if (res.statusCode === 200) { res.status(err.status || 500) }

  console.log(err)
  res.json({error: res.locals.message})
})

db.connection.on('connected', () => {
  server.listen(4000, () => {
    console.log(`Server running on port 4000`)
  })
})

// If the connection throws an error
db.connection.on('error', (err) => {
  console.error('DB Error', err)
})

// When the connection is disconnected
db.connection.on('disconnected', () => {
  console.error('DB was disconnected')
})

module.exports = server
