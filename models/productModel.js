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

module.exports = {
  getAll,
  getById,
};
