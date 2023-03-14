class HTTPError {
    constructor(status, message, details) {
        this.statusCode = status;
        this.message = message;
        this.details = details;
    }
}

const succesResponse = (data, statusCode = 200) => {
    return {
        success: true,
        statusCode,
        data
    }
}

const errorResponse = (error, statusCode = 403, details = false) => {
    let response = {
      success: false,
      statusCode,
      message: error,
    };
    if (details) response.details = details;
    return response;
  };

  module.exports = {
    succesResponse,
    errorResponse,
    HTTPError
  }