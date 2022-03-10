const productModel = require('../models/productModel');

const getAll = async () => {
  const response = await productModel.getAll();
  return response;
};

const getById = async (id) => {
  const response = await productModel.getById(id);
  return response;
};

const newProduct = async (name, quantity) => {
  const all = await productModel.getAll();

  if (all.find((el) => el.name === name) !== undefined) {
    return { message: 'Product already exists' };
  }

  const response = await productModel.newProduct(name, quantity);
  const product = { id: response.insertId, name, quantity };

  return product;
};

module.exports = {
  getAll,
  getById,
  newProduct,
}; 