const {STATUS} = require('../constants/api.constants');
const {succesResponse} = require('../utils/api.utils')
const { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } = require ('../services/products.services.js')



class ProductsController {
    
  async getProducts(req, res, next) {
      const { category } = req.query;
      try {
        const products = await getProducts(category)
        const response = succesResponse(products)
        res.json(response)
      } catch (err) {
        next(err)
      }
    }
  
    async getProductById(req, res, next) {
      const { id } = req.params
      try {
        const product = await getProductById(id)
        const response = succesResponse(product)
        res.json(response)
      } catch (err) {
        next(err)
      }
    }
  
    async saveProduct(req, res, next) {
      try {
        const newProduct = await saveProduct(req.body)
        const response = succesResponse(newProduct)
        res.status(STATUS.CREATED).json(response)
      } catch (err) {
        next(err)
      }
    }
  
    async updateProduct(req, res, next) {
      const { id } = req.params
      try {
        const updatedProduct = await updateProduct(id, req.body)
        const response = succesResponse(updatedProduct)
        res.json(response)
      } catch (err) {
        next(err)
      }
    }
  
    async deleteProduct(req, res, next) {
      const { id } = req.params
      try {
        const deletedProduct = await deleteProduct(id)
        const response = succesResponse(deletedProduct)
        res.json(response)
      } catch (err) {
        next(err)
      }
    }
  }
  
  module.exports = ProductsController;
