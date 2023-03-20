// Imports
const express = require('express');
const cors = require('cors')
const { PORT } = require('./env.config');
const { logger } = require('./logger/logger')
const MongoContainer = require('./models/containers/mongo.containers')
const appRoutes = require('./routers/app.routes')
const { errorMiddleware } = require('./middleware/error.middleware')
const path = require('path');
const publicPath = path.join(__dirname, '..', '..', 'client', 'public');

const app = express()

// Configuración de Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(express.json());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', appRoutes)
app.use(errorMiddleware)

// Server
const server = app.listen(PORT, () => {
  MongoContainer.connect().then(() => {
    logger.trace(`🚀 Server's up and runing on PORT: ${PORT} 🚀`);
    logger.trace('Connected to mongo ✅');
  })
})

server.on('error', error => {
  logger.trace(`error ${error}`);
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})

module.exports = app;
