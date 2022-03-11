const saleModel = require('../models/saleModel');

const getAll = async () => {
  const response = await saleModel.getAll();
  return response;
};

const getById = async (id) => {
  const response = await saleModel.getById(id);
  return response;
};

const newSale = async (createdSales) => {
  const sale = await saleModel.saleTable();
createdSales.forEach(async ({ productId, quantity }) => {
  await saleModel.newSale(sale.insertId, productId, quantity);
});
const response = { id: sale.insertId, itemsSold: createdSales };
return response;
};

 const updateSale = async (id, updatedSales) => {
  const saleById = await getById(id);

  if (!saleById.length) {
    return { message: 'Sale not found' };
  }
  updatedSales.forEach(async ({ productId, quantity }) => {
    await saleModel.updateSale(id, productId, quantity);
    return { id, productId, quantity };
  });
};

module.exports = {
  getAll,
  getById,
  newSale,
updateSale,
}; 