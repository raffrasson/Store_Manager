const productValidation = async (req, res, next) => {
  const product = req.body;

  if (!product.name) return res.status(400).json({ message: '"name" is required' });

  if (product.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

function productNumbersValidation(req, res, next) {
  const product = req.body;
  if (!product.quantity) return res.status(400).json({ message: '"quantity" is required' });

  if (product.quantity < 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  
return next();
}
module.exports = { productValidation, productNumbersValidation };