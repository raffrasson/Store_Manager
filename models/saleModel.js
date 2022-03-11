const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT salesProducts.sale_id AS saleId, 
  sales.date, salesProducts.product_id AS productId,
  salesProducts.quantity
  FROM sales_products AS salesProducts
  INNER JOIN sales
  ON sales.id = salesProducts.sale_id`;
  const [response] = await connection.execute(query);
  return response;
}; 

const getById = async (id) => {
  const query = `SELECT sales.date, 
  salesProducts.product_id AS productId,
  salesProducts.quantity
  FROM sales_products as salesProducts
  INNER JOIN sales ON sales.id = salesProducts.sale_id
  WHERE salesProducts.sale_id = ?
  ORDER BY productId`;
  const [response] = await connection.execute(query, [id]);
  console.log([response]);
  return response;
};

const saleTable = async () => {
  const query = `
   INSERT INTO StoreManager.sales (date) VALUES (NOW());
  `;

   const [sale] = await connection.execute(query);

   return sale;
 };

const newSale = async (saleId, productId, quantity) => {
  const query = `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?)`;
  
  const [response] = await connection.execute(query, [saleId, productId, quantity]);

  return response;
  };
  
const updateSale = async (saleId, productId, quantity) => {
  const query = `UPDATE StoreManager.sales_products SET product_id = ?, 
  quantity = ?  WHERE sale_id = ?`;

  await connection.execute(query, [productId, quantity, saleId]);
};

module.exports = {
  getAll,
  getById,
  saleTable,
  newSale,
  updateSale,
};
