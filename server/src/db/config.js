const env = require('../env.config');

module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://mayricca5:Mavica2105@yyouneedsushi.nuk3cgy.mongodb.net/${database}?retryWrites=true&w=majority`,
  }
}