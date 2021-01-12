const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/connection')
const routes = require('./routes/books')
const users = require('./routes/users')
const logger = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', routes)
app.use('/user', users)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))