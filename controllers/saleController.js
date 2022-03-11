const saleService = require('../services/saleService');

const getAll = async (_req, res, next) => {
  try {
    const sales = await saleService.getAll();
    return res.status(200).json(sales);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const sale = await saleService.getById(req.params.id);

    if (!sale.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    
    return res.status(200).json(sale);
  } catch (error) {
    return next(error);
  }
};

const newSale = async (req, res, next) => {
  try {
    const createdSales = await saleService.newSale(req.body);
console.log(req.body);
    return res.status(201).json(createdSales);
  } catch (error) {
    return next(error);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSales = req.body;
    await saleService.updateSale(id, updatedSales);
    const response = { saleId: Number(id), itemUpdated: updatedSales };
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  newSale,
   updateSale,
};