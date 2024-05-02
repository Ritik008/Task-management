require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const {connection} = require('./db/connection')
const cors = require('cors')
const {createError} = require('./utils/error')

const app = express()
connection()
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', routes)
app.use(cors())

//* Catch HTTP 404
app.use((req, res, next) => {
    next(createError(404, 'not found'));
  });
  
  //* Error Handler
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
      error: {
        status: err.statusCode || 500,
        message: err.message,
      },
    });
  });


const port = 8000 || process.env.PORT

app.listen(port, () => console.log(`Server is up at port ${port}`))