const express = require('express');
const cors = require('cors')
const {logger} = require ('./logger/logger')
const apiRoutes = require('./routers/api.routes')
const {errorMiddleware} = require('./middleware/error.middleware')
const path = require('path');
const publicPath = path.join(__dirname, '..','..', 'client', 'public');



const app = express()

app.use(express.json());
app.use(express.static(publicPath));;
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.use('/api', apiRoutes)
app.use(errorMiddleware)

module.exports = app
