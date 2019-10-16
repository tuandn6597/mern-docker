const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3001
const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users', require('./components/users/user.route'))
// handle error
app.use(require('./middlewares/err.middleware'))
app.listen(PORT, () => console.log('server is running '))
