const connection = require('./connection');

const getAll = async () => {
  const [response] = await connection.execute('SELECT * FROM products');
  return response;
}; 

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ? ORDER BY id';
  const [response] = await connection.execute(query, [id]);
  return response;
};

const newProduct = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [response] = await connection.execute(query, [name, quantity]);
  return response;
};

const updateProduct = async ({ id, name, quantity }) => {
  const query = 'UPDATE products SET name = ? , quantity = ? WHERE id = ?';
  await connection.execute(query, [name, quantity, id]);
  
  return { name, quantity, id };
};

const deleteProduct = async ({ id }) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getById,
  newProduct,
  updateProduct,
  deleteProduct,
};
