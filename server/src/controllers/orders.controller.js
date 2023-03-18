const {STATUS} = require('../constants/api.constants');
const {succesResponse} = require('../utils/errors.utils');
const { HTTPError } = require( '../utils/errors.utils')

const {createOrder, getOrderById, deleteOrder} = require('../services/orders.services')

class OrdersController {
    async createOrder(req, res, next){
      const order = req.body
        try {
           const newOrder = await createOrder(order)
           const response = succesResponse({newOrder})
           res.status(STATUS.OK).json(response)
          } catch (err) {
            next(new HTTPError(STATUS.BAD_REQUEST, "Sorry, we cant process the Order, try again please."))
          }
  }

    async getOrderById(req, res, next){
      const orderId = req.params.id;
        try { 
            const order = await getOrderById(orderId);
            const response = succesResponse(order)
            res.status(STATUS.OK).json(response)
          } catch (err) {
            next(new HTTPError(STATUS.BAD_REQUEST, "Sorry, we don't found any Order with this id, check it and try again please."))
          }
    }

    async deleteOrder(req, res, next){
      const orderId = req.params.id;
        try {    
            const result = await deleteOrder(orderId);
            const response = succesResponse(result);
            res.status(STATUS.OK).json(response)
          } catch (err) {
            next(new HTTPError(STATUS.BAD_REQUEST, "Sorry, we don't found any Order with this id, check it and try again please"))
          }
    }
}


module.exports = OrdersController