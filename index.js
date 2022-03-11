require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const productController = require('./controllers/productController');
const saleController = require('./controllers/saleController');

// const { saleValidation, saleNumbersValidation } = require('./middlewares/salesValidation');
const { productValidation, productNumbersValidation } = require('./middlewares/productsValidation');

const app = express();

app.use(bodyParser.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', productNumbersValidation, productValidation, productController.newProduct);
app.put('/products/:id', productNumbersValidation,
 productValidation, productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.get('/sales', saleController.getAll);
app.get('/sales/:id', saleController.getById);
app.post('/sales', saleController.newSale);
app.put('/sales/:id', saleController.updateSale);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
