const {STATUS } = require('../constants/api.constants') 
const { errorResponse } = require('../utils/api.utils') 
const {logger} = require('../logger/logger') 

const errorMiddleware = (err, req, res, next) => {
  const status = err.statusCode || STATUS.INTERNAL_SERVER_ERROR
  const message = err.message || 'An unexpected error ocurred'
  const details = err.details || ""

  logger.error(message)
  return res.status(status).json(errorResponse(message))
}

module.exports= {errorMiddleware}
