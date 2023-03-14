const MongoContainer = require('../containers/mongo.containers');
const ProductSchema = require('../schemas/products.schema');
const { HTTPError} = require('../../utils/errors.utils');
const {STATUS} = require('../../constants/api.constants')

const collection='products'

class ProductsDAO extends MongoContainer {
    constructor() {
        super(collection, ProductSchema)
      }

      async getByCategory(category) {
        try {
          const documents = await this.model.find({ category }, { __v: 0 });
          if (documents.length === 0) {
            const message = `Oops, sorry! We couldn't find any products with the category ${category}.`;
            throw new HTTPError(STATUS.NOT_FOUND, message);
          }
          return documents;
        } catch (err) {
          console.error(err.message); // log the error message to the console
          throw err; // re-throw the error so it can be handled by a higher-level error handler
        }
      }
}
module.exports = ProductsDAO;