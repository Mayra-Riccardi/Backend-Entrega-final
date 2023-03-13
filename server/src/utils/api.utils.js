// const STATUS={
//     OK:200,
//     CREATED:201,
//     BAD_REQUEST:400,
//     NOT_FOUND:404,
//     SERVER_ERROR:500,
//     UNAUTHORIZED:401,
//     INTERNAL_SERVER_ERROR:600,
// }
// const succesResponse =(data)=>{
//     return{
//         success:true,
//         data,
//     };
// }
// const errorResponse =(message)=> {
//     return{
//         success: false,
//         error: message
//     };
// }

// module.exports ={
//     STATUS,
//     succesResponse,
//     errorResponse,
// }

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