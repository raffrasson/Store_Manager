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

const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSales = req.body;
    const sale = await saleService.updateSale({ id, updatedSales });

    return res.status(200).json(sale);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  updateSale,
};