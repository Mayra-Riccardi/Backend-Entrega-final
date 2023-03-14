const {STATUS} = require('../constants/api.constants');
const {HTTPError} = require('../utils/errors.utils');
const UsersDAO = require('../models/daos/users.dao');
const assingCartUser = require ('./users.services');

const usersDAO = new UsersDAO()


const register = async (fullName, email, password, phone) => {
    const user = await usersDAO.save({
      fullName,
      email,
      password,
      phone
    })

    const newUser = await assingCartUser(user._id)
    
    newUser.password = undefined
    return newUser
}


const login = async (email, password) => {
  if(!email || !password) {
    const message = "Please enter an email and password"
    throw new HTTPError(STATUS.BAD_REQUEST, message)
  }
    const user = await usersDAO.getByEmail(email)
    const isMatch = await user.matchPasswords(password, user.password)

    if (!isMatch) {
        const message = 'Email or password incorrect'
        throw new HTTPError(STATUS.UNAUTHORIZED, message)
      }
    
      user.password = undefined
      return user
}

module.exports = {
    register,
    login
}