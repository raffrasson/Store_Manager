const saleValidation = async (req, res, next) => {
  const array = req.body;

  array.forEach(({ productId }) => {
    if (!productId) return res.status(400).json({ message: '"productId" is required' });

    if (productId <= 0) {
      return res.status(422).json({ message: '"productId" has to be greater than zero' });
    }
    return next();
  });
};

  const saleNumbersValidation = async (req, res, next) => {
    const array = req.body;
    array.forEach(({ quantity }) => {
    if (!quantity) return res.status(400).json({ message: '"quantity" is required' });

    if (quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  return next();
};

module.exports = { saleValidation, saleNumbersValidation };