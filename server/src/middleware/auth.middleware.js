const envConfig = require('../env.config') 
const jwt = require('jsonwebtoken')
const  {logger} =require('../logger/logger') 
const { STATUS } = require('../constants/api.constants')
const { HTTPError } = require( '../utils/api.utils')


const authMiddleware = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    console.log('token de aadmin ', token);
    const decoded = jwt.verify(token, envConfig.JWT_SECRET);
    console.log('decodes de admin ', decoded);
    if (!decoded.admin) {
      return next(new HTTPError(STATUS.UNAUTHORIZED, 'not authorized to access this route'));
    }
    return next();
  } catch (err) {
    return next(new HTTPError(STATUS.UNAUTHORIZED, 'You are not authenticate'))
  }
};


module.exports = authMiddleware

