const { Router } = require('express')
const authMiddleware = require('../../middleware/auth.middleware')
const ProductsController = require('../../controllers/products.controller');

const productsController = new ProductsController()

const router= Router();



router.get('/',productsController.getProducts);
router.get('/:id',productsController.getProductById);
router.post('/',authMiddleware, productsController.saveProduct)
router.put('/:id',authMiddleware, productsController.updateProduct)
router.delete('/:id',authMiddleware, productsController.deleteProduct)


module.exports = router