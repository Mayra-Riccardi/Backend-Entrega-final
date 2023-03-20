const envConfig = require('../env.config');


module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://mayricca5:${envConfig.DB_PASSWORD}@yyouneedsushi.nuk3cgy.mongodb.net/${database}?retryWrites=true&w=majority`,
  }
}