const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
  FROM sales_products sp
  INNER JOIN sales AS s
  ON s.id = sp.sale_id`;
  const [response] = await connection.execute(query);
  return response;
}; 

const getById = async (id) => {
  const query = `SELECT s.date, sp.product_id AS productId, sp.quantity
  FROM sales_products sp
  INNER JOIN sales AS s ON s.id = sp.sale_id
  WHERE sp.sale_id = ?
  ORDER BY productId`;
  const [response] = await connection.execute(query, [id]);
  return response;
};

module.exports = {
  getAll,
  getById,
};
