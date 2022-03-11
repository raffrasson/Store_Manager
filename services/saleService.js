const saleModel = require('../models/saleModel');

const getAll = async () => {
  const response = await saleModel.getAll();
  return response;
};

const getById = async (id) => {
  const response = await saleModel.getById(id);
  return response;
};

 const updateSale = async ({ id, updatedSales }) => {
  updatedSales.forEach(async ({ productId, quantity }) => {
    await saleModel.updateSale(id, productId, quantity);
  });

  return { saleId: id, itemUpdated: updatedSales };
};
module.exports = {
  getAll,
  getById,
updateSale,
}; 