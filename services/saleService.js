const saleModel = require('../models/saleModel');

const getAll = async () => {
  const response = await saleModel.getAll();
  return response;
};

const getById = async (id) => {
  const response = await saleModel.getById(id);
  return response;
};

const newSale = async (id) => {
  const response = await saleModel.getById(id);
  return response;
};

module.exports = {
  getAll,
  getById,
  newSale,
}; 