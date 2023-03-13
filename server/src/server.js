const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '..','..', 'client', 'public');
const { PORT } = require('./env.config');
const {logger} = require ('./logger/logger')
const MongoContainer = require('./models/containers/mongo.containers')
const apiRoutes = require('./routers/api.routes')
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(publicPath));
app.use(cors())


app.use('/api', apiRoutes);

const server = app.listen(PORT,()=>{
    MongoContainer.connect().then(()=>{
        logger.trace(`server is up and running on port , ${PORT}`);
        logger.trace('connected to mongodb');
    })
})
server.on('error', error=>{
    logger.trace(`error ${error}`);
}
)
