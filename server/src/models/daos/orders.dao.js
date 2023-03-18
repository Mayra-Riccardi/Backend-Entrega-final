const MongoContainer = require('../containers/mongo.containers')
const OrderSchema = require('../schemas/orders.schema');

const collection='orders'


class OrdersDAO extends MongoContainer {
    constructor() {
        super(collection, OrderSchema)
      }

// module.exports = {
//   createOrder: async (userId, items, total) => {
//     const order = new Order({
//       userId,
//       items,
//       total
//     });
//     return await order.save();
//   },

//   deleteOrder: async (id) => {
//     return await Order.findByIdAndDelete(id);
//   },

//   getOrderById: async (id) => {
//     return await Order.findById(id).populate('userId').populate('items.productId');
//   }
 };

 module.exports = OrdersDAO;