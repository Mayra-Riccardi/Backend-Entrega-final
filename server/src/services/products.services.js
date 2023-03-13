const ProductsDAO = require('../models/daos/products.dao');

const productsDAO = new ProductsDAO()

const getProducts = async category => {
    const products = await productsDAO.getAll()

    if(!category) return products

    return products.filter(product => product.category === category)
}

const getProductById = async (id) => await productsDAO.getById(id);
const saveProduct = async product => await productsDAO.save(product);
const updateProduct = async (id, product) => await productsDAO.update(id, product)
const deleteProduct = async (id) => await productsDAO.delete(id)

module.exports = {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
}

