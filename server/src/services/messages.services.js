const MessageDAO = require('../models/daos/messages.dao')
//const { STATUS } = require('../constants/api.constants');
//const { HTTPError } = require('../utils/errors.utils');

const messageDAO = new MessageDAO()

const getMessages = async () => {
    const allMessages = await messageDAO.getAll()
    return allMessages
}

const getMessageByEmail = async (email) => {
    return await messageDAO.getMessagesByEmail(email);
}

const saveMessage = async (message) => {
    return await messageDAO.save(message);
}

module.exports = {
    getMessages,
    getMessageByEmail,
    saveMessage
}